"use client";
import { useEffect, useState, useRef } from "react";

type Msg = { id: string; content: string; senderStudentId?: string; senderFacultyId?: string; createdAt: string; };
type Faculty = { id: string; fullName: string; designation: string; department: string; };

export default function StudentMessagesPage() {
  const [myId, setMyId] = useState("");
  const [faculty, setFaculty] = useState<Faculty | null>(null);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/student/me").then((r) => r.json()).then(async (d) => {
      setMyId(d.student?.id);
      const facultyId = d.student?.assignedFacultyId;
      if (facultyId) {
        fetch(`/api/faculty/public?id=${facultyId}`).then((r) => r.ok ? r.json() : null).then((fd) => { if (fd) setFaculty(fd.faculty); });
        const load = () => fetch(`/api/messages?with=${facultyId}`).then((r) => r.json()).then((md) => setMessages(md.messages ?? []));
        load();
        const t = setInterval(load, 8000);
        return () => clearInterval(t);
      }
    });
  }, []);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || !faculty) return;
    const text = input; setInput("");
    await fetch("/api/messages", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ content: text, receiverId: faculty.id, receiverRole: "faculty" }) });
    fetch(`/api/messages?with=${faculty.id}`).then((r) => r.json()).then((d) => setMessages(d.messages ?? []));
  }

  return (
    <div className="portal-main">
      <div className="portal-topbar">
        <div className="portal-topbar-title">💬 Messages</div>
        {faculty && <div style={{ fontSize: "0.875rem", color: "#64748b" }}>with {faculty.fullName} · {faculty.designation}</div>}
      </div>
      <div className="portal-content" style={{ padding: 0, height: "calc(100vh - 80px)" }}>
        {!faculty ? (
          <div className="empty-state" style={{ marginTop: 80 }}>
            <div className="empty-icon">⏳</div>
            <div>No faculty assigned yet. Admin will assign you a faculty mentor.</div>
          </div>
        ) : (
          <div className="messages-chat" style={{ height: "100%" }}>
            <div className="chat-messages">
              {messages.length === 0 && <div className="empty-state"><div className="empty-icon">💬</div><div>No messages yet. Start the conversation!</div></div>}
              {messages.map((m) => (
                <div key={m.id} className={`chat-bubble ${m.senderStudentId === myId ? "sent" : "received"}`}>{m.content}</div>
              ))}
              <div ref={bottomRef} />
            </div>
            <form className="chat-input-bar" onSubmit={send}>
              <input className="chat-input" placeholder="Message your faculty..." value={input} onChange={(e) => setInput(e.target.value)} />
              <button type="submit" className="chat-send-btn student">Send</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
