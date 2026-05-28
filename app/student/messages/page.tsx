"use client";
import { useEffect, useState, useRef } from "react";

type Msg = { 
  id: string; 
  content: string; 
  senderStudentId?: string; 
  senderFacultyId?: string; 
  receiverStudentId?: string;
  receiverFacultyId?: string;
  createdAt: string; 
  messageType?: string;
  stickerUrl?: string | null;
  parentMessageId?: string | null;
  parentMessage?: {
    id: string;
    content: string;
    messageType: string;
    senderStudentId?: string;
    senderFacultyId?: string;
  } | null;
};

type Faculty = { id: string; fullName: string; designation: string; department: string; };
type Student = { id: string; fullName: string; username: string; email: string; year: number; branch: string; friendshipId?: string | null; };
type FriendSearchResult = Student & { friendshipStatus: string; friendshipId: string | null; };
type FriendshipRequest = { id: string; createdAt: string; sender?: Student; receiver?: Student; };

const CUSTOM_STICKERS = [
  { id: "wink", name: "Wink", url: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f609/512.webp" },
  { id: "cool", name: "Cool", url: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60e/512.webp" },
  { id: "crazy", name: "Crazy", url: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f92a/512.webp" },
  { id: "fist", name: "Fist Bump", url: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f44a/512.webp" },
  { id: "flex", name: "Flex", url: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4aa/512.webp" },
  { id: "rocket", name: "Lords Rocket", url: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.webp" },
  { id: "trophy", name: "Trophy", url: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c6/512.webp" },
  { id: "studying", name: "Exam Study", url: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4d6/512.webp" }
];

export default function StudentMessagesPage() {
  const [myId, setMyId] = useState("");
  const [activeTab, setActiveTab] = useState<"chats" | "friends" | "requests">("chats");
  
  // Chats & Connections
  const [assignedFaculty, setAssignedFaculty] = useState<Faculty | null>(null);
  const [friends, setFriends] = useState<Student[]>([]);
  const [incomingRequests, setIncomingRequests] = useState<FriendshipRequest[]>([]);
  const [outgoingRequests, setOutgoingRequests] = useState<FriendshipRequest[]>([]);
  
  // Active Chat State
  const [activeChat, setActiveChat] = useState<{ id: string; name: string; type: "faculty" | "student" } | null>(null);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [quotedMsg, setQuotedMsg] = useState<Msg | null>(null);
  const [showStickers, setShowStickers] = useState(false);
  
  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<FriendSearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const bottomRef = useRef<HTMLDivElement>(null);

  // Initial setup: Profile, Advisor, and Connections
  useEffect(() => {
    fetch("/api/student/me").then((r) => r.json()).then(async (d) => {
      setMyId(d.student?.id);
      const facultyId = d.student?.assignedFacultyId;
      if (facultyId) {
        fetch(`/api/faculty/public?id=${facultyId}`).then((r) => r.ok ? r.json() : null).then((fd) => {
          if (fd) setAssignedFaculty(fd.faculty);
        });
      }
    });
    loadConnections();
  }, []);

  // Reload connections (friends, pending requests)
  async function loadConnections() {
    try {
      const res = await fetch("/api/student/friends");
      if (res.ok) {
        const data = await res.json();
        setFriends(data.friends || []);
        setIncomingRequests(data.incoming || []);
        setOutgoingRequests(data.outgoing || []);
      }
    } catch (e) {
      console.error("Failed to load friendships", e);
    }
  }

  // Poll conversation history with active user
  useEffect(() => {
    if (!activeChat) {
      setMessages([]);
      return;
    }

    const loadHistory = () => {
      fetch(`/api/messages?with=${activeChat.id}`)
        .then((r) => r.json())
        .then((md) => {
          setMessages(md.messages ?? []);
        });
    };

    loadHistory();
    const interval = setInterval(loadHistory, 4000);
    return () => clearInterval(interval);
  }, [activeChat]);

  // Scroll to bottom when messages load
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle classmate search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const delayDebounce = setTimeout(() => {
      fetch(`/api/student/friends?search=${encodeURIComponent(searchQuery)}`)
        .then((r) => r.json())
        .then((d) => {
          setSearchResults(d.results || []);
          setIsSearching(false);
        })
        .catch(() => setIsSearching(false));
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  // Friend Request Actions
  async function sendFriendRequest(studentId: string) {
    const res = await fetch("/api/student/friends", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ studentId }),
    });
    if (res.ok) {
      setSearchQuery("");
      loadConnections();
      alert("Friend request sent!");
    } else {
      const err = await res.json();
      alert(err.error || "Request failed");
    }
  }

  async function handleRequest(id: string, status: "ACCEPTED" | "REJECTED") {
    const res = await fetch(`/api/student/friends/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (res.ok) {
      loadConnections();
    }
  }

  async function removeFriendship(id: string) {
    if (!confirm("Are you sure you want to unfriend this classmate?")) return;
    const res = await fetch(`/api/student/friends/${id}`, { method: "DELETE" });
    if (res.ok) {
      if (activeChat?.id === id) setActiveChat(null);
      loadConnections();
    }
  }

  // Message Sender
  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || !activeChat) return;
    
    const content = input;
    setInput("");
    const parentId = quotedMsg?.id;
    setQuotedMsg(null);

    await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content,
        receiverId: activeChat.id,
        receiverRole: activeChat.type,
        messageType: "TEXT",
        parentMessageId: parentId,
      }),
    });

    fetch(`/api/messages?with=${activeChat.id}`).then((r) => r.json()).then((d) => {
      setMessages(d.messages ?? []);
    });
  }

  // Sticker Sender
  async function sendSticker(stickerUrl: string) {
    if (!activeChat) return;
    setShowStickers(false);

    await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: "Sticker",
        receiverId: activeChat.id,
        receiverRole: activeChat.type,
        messageType: "STICKER",
        stickerUrl,
      }),
    });

    fetch(`/api/messages?with=${activeChat.id}`).then((r) => r.json()).then((d) => {
      setMessages(d.messages ?? []);
    });
  }

  return (
    <>
      <style>{`
        .messages-page-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          overflow: hidden;
          padding: 0;
          font-family: 'Inter', sans-serif;
          background: var(--bg-deep);
        }
        @media (min-width: 769px) {
          .messages-page-container {
            height: 100vh !important;
          }
        }
        @media (max-width: 768px) {
          .messages-page-container {
            height: calc(100vh - 58px) !important;
          }
        }
      `}</style>
      <div className="messages-page-container">
      {/* Visual Header */}
      <div style={{
        padding: "16px 24px",
        background: "var(--bg-panel)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border-muted)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ color: "#6366f1", display: "flex", alignItems: "center" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5s3-1 5.5-2.5C9.37 20.8 11.61 21 14 21c7.18 0 10-7.18 10-10 0-2.42-.2-4.63-.5-6.5H21a12 12 0 0 0-12 12c0 2.39.2 4.63.5 6.5-2.5 1.5-5.5.5-5.5.5Z"/><path d="M12 12a3 3 0 1 0-6 0c0 .83.34 1.58.88 2.12L12 12Z"/></svg>
          </span>
          <div>
            <h1 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)" }}>LeGeZt Message Studio</h1>
            <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--text-secondary)" }}>Secure real-time academic messenger channel</p>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", overflow: "hidden", background: "var(--bg-deep)" }}>
        
        {/* LEFT SIDEBAR: Search, Tabs, Lists */}
        <div style={{
          width: "360px",
          borderRight: "1px solid var(--border-muted)",
          display: "flex",
          flexDirection: "column",
          background: "var(--bg-panel)"
        }}>
          {/* Search Classmates */}
          <div style={{ padding: "16px", borderBottom: "1px solid var(--border-muted)" }}>
            <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
              <input 
                type="text"
                placeholder="Search classmates by name or roll number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px 10px 36px",
                  borderRadius: "20px",
                  border: "1px solid var(--border-muted)",
                  background: "rgba(255, 255, 255, 0.03)",
                  color: "var(--text-primary)",
                  fontSize: "0.875rem",
                  outline: "none",
                  transition: "all 0.2s"
                }}
              />
              <span style={{ position: "absolute", left: "14px", color: "var(--text-secondary)", display: "flex", alignItems: "center" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </span>
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  style={{ position: "absolute", right: "12px", border: "none", background: "none", cursor: "pointer", color: "var(--text-muted)", display: "flex", alignItems: "center" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
              )}
            </div>
          </div>
 
          {/* Sidebar Tab triggers */}
          {!searchQuery && (
            <div style={{ display: "flex", borderBottom: "1px solid var(--border-muted)", padding: "4px 16px" }}>
              {(["chats", "friends", "requests"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    flex: 1,
                    padding: "10px 0",
                    border: "none",
                    background: "none",
                    fontSize: "0.875rem",
                    fontWeight: activeTab === tab ? "700" : "500",
                    color: activeTab === tab ? "#a5b4fc" : "var(--text-secondary)",
                    borderBottom: activeTab === tab ? "2px solid #6366f1" : "2px solid transparent",
                    cursor: "pointer",
                    textTransform: "capitalize",
                    transition: "all 0.2s"
                  }}
                >
                  {tab}
                  {tab === "requests" && incomingRequests.length > 0 && (
                    <span style={{ marginLeft: "6px", background: "#ef4444", color: "white", padding: "2px 6px", borderRadius: "10px", fontSize: "0.65rem", fontWeight: "bold" }}>
                      {incomingRequests.length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Sidebar Lists Container */}
          <div style={{ flex: 1, overflowY: "auto" }}>
            {searchQuery ? (
              // Search Results pane
              <div style={{ padding: "12px" }}>
                <h3 style={{ fontSize: "0.75rem", color: "#64748b", textTransform: "uppercase", paddingLeft: "8px", marginBottom: "8px", fontWeight: "bold" }}>
                  {isSearching ? "Searching..." : `Search Results (${searchResults.length})`}
                </h3>
                {searchResults.length === 0 && !isSearching && (
                  <div style={{ textAlign: "center", padding: "24px", color: "#64748b", fontSize: "0.875rem" }}>No classmates found.</div>
                )}
                {searchResults.map((stu) => (
                  <div key={stu.id} style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 8px",
                    borderRadius: "8px",
                    borderBottom: "1px solid #f1f5f9",
                    background: "#fff"
                  }}>
                    <div>
                      <div style={{ fontSize: "0.875rem", fontWeight: "600", color: "#1e293b" }}>{stu.fullName}</div>
                      <div style={{ fontSize: "0.75rem", color: "#64748b" }}>{stu.branch} · Year {stu.year}</div>
                    </div>
                    {stu.friendshipStatus === "NONE" && (
                      <button 
                        onClick={() => sendFriendRequest(stu.id)}
                        style={{ padding: "4px 10px", fontSize: "0.75rem", background: "#0f766e", color: "white", border: "none", borderRadius: "12px", cursor: "pointer", fontWeight: "bold" }}
                      >
                        Add Friend
                      </button>
                    )}
                    {stu.friendshipStatus === "PENDING_SENT" && (
                      <span style={{ fontSize: "0.75rem", color: "#f59e0b", background: "#fef3c7", padding: "4px 8px", borderRadius: "10px", fontWeight: "500" }}>Sent</span>
                    )}
                    {stu.friendshipStatus === "PENDING_RECEIVED" && (
                      <span style={{ fontSize: "0.75rem", color: "#0f766e", background: "#ccfbf1", padding: "4px 8px", borderRadius: "10px", fontWeight: "500" }}>Pending Accept</span>
                    )}
                    {stu.friendshipStatus === "ACCEPTED" && (
                      <span style={{ fontSize: "0.75rem", color: "#10b981", background: "#d1fae5", padding: "4px 8px", borderRadius: "10px", fontWeight: "500" }}>Friends</span>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              // Tab contents
              <>
                {/* 1. CHATS TAB */}
                {activeTab === "chats" && (
                  <div style={{ padding: "8px" }}>
                    {/* Faculty Mentor */}
                    {assignedFaculty && (
                      <div 
                        onClick={() => setActiveChat({ id: assignedFaculty.id, name: assignedFaculty.fullName, type: "faculty" })}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "12px",
                          borderRadius: "12px",
                          cursor: "pointer",
                          background: activeChat?.id === assignedFaculty.id ? "linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(139, 92, 246, 0.06))" : "transparent",
                          transition: "all 0.2s"
                        }}
                      >
                        <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#0f766e", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span style={{ fontSize: "0.875rem", fontWeight: "700", color: "var(--text-primary)" }}>{assignedFaculty.fullName}</span>
                            <span style={{ fontSize: "0.65rem", background: "#0f766e", color: "white", padding: "2px 6px", borderRadius: "8px", fontWeight: "bold" }}>Advisor</span>
                          </div>
                          <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "2px" }}>{assignedFaculty.designation} · {assignedFaculty.department}</div>
                        </div>
                      </div>
                    )}
 
                    <div style={{ height: "1px", background: "var(--border-muted)", margin: "8px 0" }} />
 
                    {/* Student Friends chats */}
                    {friends.length === 0 && (
                      <div style={{ textAlign: "center", padding: "40px 20px", color: "var(--text-muted)" }}>
                        <div style={{ display: "flex", justifyContent: "center", color: "var(--border-muted)" }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                        </div>
                        <div style={{ fontSize: "0.875rem", marginTop: "8px" }}>No active chats. Search and add classmates to start a conversation.</div>
                      </div>
                    )}
                    {friends.map((friend) => (
                      <div 
                        key={friend.id}
                        onClick={() => setActiveChat({ id: friend.id, name: friend.fullName, type: "student" })}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "12px",
                          borderRadius: "12px",
                          cursor: "pointer",
                          background: activeChat?.id === friend.id ? "linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(139, 92, 246, 0.06))" : "transparent",
                          transition: "all 0.2s",
                          marginBottom: "4px"
                        }}
                      >
                        <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "linear-gradient(135deg, #3b82f6, #6366f1)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.1rem" }}>
                          {friend.fullName[0].toUpperCase()}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span style={{ fontSize: "0.875rem", fontWeight: "600", color: "var(--text-primary)" }}>{friend.fullName}</span>
                          </div>
                          <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "2px" }}>{friend.branch} · Year {friend.year}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 2. FRIENDS TAB */}
                {activeTab === "friends" && (
                  <div style={{ padding: "8px" }}>
                    {friends.length === 0 && (
                      <div style={{ textAlign: "center", padding: "40px 20px", color: "#94a3b8" }}>
                        <div style={{ fontSize: "0.875rem" }}>Your friends list is currently empty.</div>
                      </div>
                    )}
                    {friends.map((friend) => (
                      <div key={friend.id} style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 12px",
                        background: "white",
                        borderRadius: "10px",
                        marginBottom: "6px",
                        border: "1px solid #f1f5f9"
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
                            {friend.fullName[0]}
                          </div>
                          <div>
                            <div style={{ fontSize: "0.875rem", fontWeight: "600" }}>{friend.fullName}</div>
                            <div style={{ fontSize: "0.7rem", color: "#64748b" }}>{friend.branch} · Year {friend.year}</div>
                          </div>
                        </div>
                        <button 
                          onClick={() => {
                            if (friend.friendshipId) {
                              removeFriendship(friend.friendshipId);
                            } else {
                              removeFriendship(friend.id);
                            }
                          }}
                          style={{ background: "none", border: "none", color: "#ef4444", fontSize: "0.75rem", cursor: "pointer", fontWeight: 600 }}
                        >
                          Remove Friend
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* 3. REQUESTS TAB */}
                {activeTab === "requests" && (
                  <div style={{ padding: "12px" }}>
                    {/* Incoming requests */}
                    <h4 style={{ fontSize: "0.75rem", color: "#64748b", textTransform: "uppercase", paddingLeft: "4px", marginBottom: "8px", fontWeight: "bold" }}>
                      Received Requests ({incomingRequests.length})
                    </h4>
                    {incomingRequests.length === 0 && (
                      <div style={{ fontSize: "0.825rem", color: "#94a3b8", paddingLeft: "4px", marginBottom: "16px" }}>No pending requests.</div>
                    )}
                    {incomingRequests.map((req) => (
                      <div key={req.id} style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px",
                        background: "#f8fafc",
                        borderRadius: "8px",
                        marginBottom: "8px"
                      }}>
                        <div>
                          <div style={{ fontSize: "0.875rem", fontWeight: "600" }}>{req.sender?.fullName}</div>
                          <div style={{ fontSize: "0.7rem", color: "#64748b" }}>{req.sender?.branch} · Year {req.sender?.year}</div>
                        </div>
                        <div style={{ display: "flex", gap: "6px" }}>
                          <button 
                            onClick={() => handleRequest(req.id, "ACCEPTED")}
                            style={{ padding: "4px 8px", background: "#10b981", color: "white", border: "none", borderRadius: "6px", fontSize: "0.7rem", cursor: "pointer", fontWeight: "bold" }}
                          >
                            Accept
                          </button>
                          <button 
                            onClick={() => handleRequest(req.id, "REJECTED")}
                            style={{ padding: "4px 8px", background: "#ef4444", color: "white", border: "none", borderRadius: "6px", fontSize: "0.7rem", cursor: "pointer", fontWeight: "bold" }}
                          >
                            Reject
                          </button>
                        </div>
                      </div>
                    ))}

                    <div style={{ height: "1px", background: "#e2e8f0", margin: "16px 0" }} />

                    {/* Outgoing requests */}
                    <h4 style={{ fontSize: "0.75rem", color: "#64748b", textTransform: "uppercase", paddingLeft: "4px", marginBottom: "8px", fontWeight: "bold" }}>
                      Sent Requests ({outgoingRequests.length})
                    </h4>
                    {outgoingRequests.length === 0 && (
                      <div style={{ fontSize: "0.825rem", color: "#94a3b8", paddingLeft: "4px" }}>No outgoing pending requests.</div>
                    )}
                    {outgoingRequests.map((req) => (
                      <div key={req.id} style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px",
                        background: "#f8fafc",
                        borderRadius: "8px",
                        marginBottom: "8px"
                      }}>
                        <div>
                          <div style={{ fontSize: "0.875rem", fontWeight: "600" }}>{req.receiver?.fullName}</div>
                          <div style={{ fontSize: "0.7rem", color: "#64748b" }}>{req.receiver?.branch} · Year {req.receiver?.year}</div>
                        </div>
                        <button 
                          onClick={() => removeFriendship(req.id)}
                          style={{ padding: "4px 8px", background: "none", border: "1px solid #cbd5e1", color: "#64748b", borderRadius: "6px", fontSize: "0.7rem", cursor: "pointer" }}
                        >
                          Cancel
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        {/* RIGHT PANE: Conversation Chamber */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", background: "var(--bg-deep)" }}>
          {activeChat ? (
            <>
              {/* Chat Header */}
              <div style={{
                padding: "14px 24px",
                background: "var(--bg-panel)",
                borderBottom: "1px solid var(--border-muted)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
              }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: activeChat.type === "faculty" ? "#0f766e" : "linear-gradient(135deg, #3b82f6, #6366f1)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
                  {activeChat.type === "faculty" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
                  ) : activeChat.name[0].toUpperCase()}
                </div>
                <div>
                  <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--text-primary)" }}>{activeChat.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "#6366f1", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    {activeChat.type} connection
                  </div>
                </div>
              </div>
 
              {/* Chat Messages Chamber */}
              <div style={{
                flex: 1,
                overflowY: "auto",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                background: "rgba(7, 9, 19, 0.45)"
              }}>
                {messages.length === 0 && (
                  <div style={{ alignSelf: "center", margin: "auto", textAlign: "center", color: "var(--text-secondary)" }}>
                    <div style={{ display: "flex", justifyContent: "center", color: "var(--border-muted)", marginBottom: "8px" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    </div>
                    <div style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Start a conversation!</div>
                    <div style={{ fontSize: "0.75rem", marginTop: "4px" }}>Say hello or reply in this secure chat.</div>
                  </div>
                )}
 
                {messages.map((m) => {
                  const isMe = m.senderStudentId === myId;
                  
                  return (
                    <div 
                      key={m.id} 
                      className="chat-message-row"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignSelf: isMe ? "flex-end" : "flex-start",
                        alignItems: isMe ? "flex-end" : "flex-start",
                        maxWidth: "60%"
                      }}
                    >
                      {/* Message Bubble */}
                      <div 
                        style={{
                          background: isMe ? "linear-gradient(135deg, #4f46e5, #6366f1)" : "var(--bg-panel)",
                          color: "white",
                          border: isMe ? "none" : "1px solid var(--border-muted)",
                          padding: m.messageType === "STICKER" ? "8px" : "10px 14px",
                          borderRadius: isMe ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                          position: "relative",
                          display: "inline-block",
                          minWidth: "60px"
                        }}
                      >
                        {/* Hover Quick Quote Action */}
                        <button 
                          onClick={() => setQuotedMsg(m)}
                          style={{
                            position: "absolute",
                            right: isMe ? "100%" : "auto",
                            left: isMe ? "auto" : "100%",
                            top: "50%",
                            transform: "translateY(-50%)",
                            background: "var(--bg-hover)",
                            border: "1px solid var(--border-muted)",
                            borderRadius: "50%",
                            width: "24px",
                            height: "24px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            margin: "0 6px",
                            boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                            fontSize: "0.85rem",
                            color: "var(--text-primary)"
                          }}
                          title="Reply/Quote"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v.5"/></svg>
                        </button>
 
                        {/* Quoted Message display */}
                        {m.parentMessage && (
                          <div style={{
                            background: isMe ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
                            padding: "6px 10px",
                            borderRadius: "8px",
                            fontSize: "0.75rem",
                            marginBottom: "6px",
                            borderLeft: isMe ? "3px solid #a5b4fc" : "3px solid #6366f1"
                          }}>
                            <div style={{ fontWeight: "bold", fontSize: "0.65rem", color: isMe ? "#a5b4fc" : "#6366f1", marginBottom: "2px" }}>
                              {m.parentMessage.senderStudentId === myId ? "You" : activeChat.name}
                            </div>
                            <div style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                              {m.parentMessage.content}
                            </div>
                          </div>
                        )}
 
                        {/* Rich Content rendering */}
                        {m.messageType === "STICKER" && m.stickerUrl ? (
                          <img 
                            src={m.stickerUrl} 
                            alt="Sticker" 
                            style={{ width: "120px", height: "120px", objectFit: "contain", borderRadius: "12px" }}
                          />
                        ) : (
                          <div style={{ fontSize: "0.875rem", lineHeight: "1.4", color: isMe ? "white" : "var(--text-primary)" }}>{m.content}</div>
                        )}
 
                        {/* Timestamp */}
                        <div style={{
                          fontSize: "0.6rem",
                          color: isMe ? "rgba(255,255,255,0.6)" : "var(--text-muted)",
                          textAlign: "right",
                          marginTop: "4px"
                        }}>
                          {new Date(m.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div ref={bottomRef} />
              </div>
 
              {/* Rich Footer: Quote bar, Emojis/Stickers Sheet, Input field */}
              <div style={{
                background: "var(--bg-panel)",
                borderTop: "1px solid var(--border-muted)",
                padding: "12px 24px",
                display: "flex",
                flexDirection: "column",
                position: "relative"
              }}>
                {/* Quoted Message Preview Bar */}
                {quotedMsg && (
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "8px 12px",
                    background: "var(--bg-hover)",
                    borderRadius: "8px",
                    marginBottom: "8px",
                    borderLeft: "4px solid #6366f1"
                  }}>
                    <div style={{ fontSize: "0.8rem" }}>
                      <span style={{ fontWeight: "bold", color: "#6366f1" }}>Replying to message: </span>
                      <span style={{ color: "var(--text-primary)" }}>{quotedMsg.content}</span>
                    </div>
                    <button 
                      onClick={() => setQuotedMsg(null)}
                      style={{ background: "none", border: "none", display: "flex", alignItems: "center", color: "#ef4444", cursor: "pointer" }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                  </div>
                )}
 
                {/* Stickers Selection Sheet */}
                {showStickers && (
                  <div style={{
                    position: "absolute",
                    bottom: "100%",
                    left: "24px",
                    background: "var(--bg-panel)",
                    border: "1px solid var(--border-muted)",
                    borderRadius: "16px",
                    boxShadow: "0 -4px 12px rgba(0,0,0,0.08)",
                    padding: "16px",
                    width: "280px",
                    zIndex: 100,
                    marginBottom: "10px"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                      <span style={{ fontSize: "0.8rem", fontWeight: "bold", color: "var(--text-primary)" }}>Lords Stickers</span>
                      <button onClick={() => setShowStickers(false)} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                      </button>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
                      {CUSTOM_STICKERS.map((sticker) => (
                        <button
                          key={sticker.id}
                          onClick={() => sendSticker(sticker.url)}
                          title={sticker.name}
                          style={{
                            background: "var(--bg-deep)",
                            border: "1px solid var(--border-muted)",
                            borderRadius: "10px",
                            padding: "6px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.15s"
                          }}
                          onMouseOver={(e) => e.currentTarget.style.background = "var(--bg-hover)"}
                          onMouseOut={(e) => e.currentTarget.style.background = "var(--bg-deep)"}
                        >
                          <img src={sticker.url} alt={sticker.name} style={{ width: "38px", height: "38px", objectFit: "contain" }} />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
 
                {/* Chat Inputs */}
                <form onSubmit={sendMessage} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <button 
                    type="button"
                    onClick={() => setShowStickers(!showStickers)}
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      border: "none",
                      background: "var(--bg-hover)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-secondary)"
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
                  </button>
 
                  <input 
                    type="text" 
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={{
                      flex: 1,
                      padding: "10px 18px",
                      borderRadius: "24px",
                      border: "1px solid var(--border-muted)",
                      fontSize: "0.875rem",
                      outline: "none",
                      background: "rgba(255,255,255,0.03)",
                      color: "var(--text-primary)"
                    }}
                  />
 
                  <button 
                    type="submit" 
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "38px",
                      height: "38px",
                      background: "linear-gradient(135deg, #4f46e5, #8b5cf6)",
                      color: "white",
                      border: "none",
                      borderRadius: "50%",
                      cursor: "pointer",
                      boxShadow: "0 2px 8px rgba(99,102,241,0.2)"
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 3 3 9-3 9 19-9Z"/><path d="M6 12h16"/></svg>
                  </button>
                </form>
              </div>
            </>
          ) : (
            // Empty State
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "var(--text-secondary)" }}>
              <span style={{ color: "var(--border-muted)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </span>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--text-primary)", marginTop: "16px" }}>LeGeZt Chat Room</h2>
              <p style={{ fontSize: "0.85rem", marginTop: "4px", color: "var(--text-muted)" }}>Select any active chat from the sidebar list to start chatting.</p>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
