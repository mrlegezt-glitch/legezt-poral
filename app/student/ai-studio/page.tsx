"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type MessageRole = "user" | "assistant";
type MessageType = "text" | "image" | "error" | "loading";

interface ChatMessage {
  id: string;
  role: MessageRole;
  type: MessageType;
  content: string;
  prompt?: string;
  timestamp: Date;
}

function generateId() {
  return Math.random().toString(36).slice(2);
}

/* ─── Copy Button ─── */
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        fontSize: "11px",
        background: "transparent",
        border: "none",
        color: copied ? "#a78bfa" : "#64748b",
        cursor: "pointer",
        transition: "color 0.2s",
        fontWeight: 600,
      }}
      onMouseOver={(e) => !copied && (e.currentTarget.style.color = "#ffffff")}
      onMouseOut={(e) => !copied && (e.currentTarget.style.color = "#64748b")}
    >
      {copied ? (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          Copy
        </>
      )}
    </button>
  );
}

/* ─── Inline Action Button ─── */
function ActionButton({ icon, label, active, onClick }: { icon: React.ReactNode; label?: string; active?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        background: "transparent",
        border: "none",
        color: active ? "#a78bfa" : "#475569",
        cursor: "pointer",
        padding: "4px 6px",
        borderRadius: 6,
        transition: "color 0.2s, background 0.2s",
        fontSize: 11,
        fontWeight: 500,
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.background = "rgba(99,102,241,0.08)";
        e.currentTarget.style.color = "#a78bfa";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.color = active ? "#a78bfa" : "#475569";
      }}
    >
      {icon}
      {label && <span>{label}</span>}
    </button>
  );
}

/* ─── SVG Icons ─── */
const SparkleIcon = ({ size = 15 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/>
    <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5Z"/>
  </svg>
);

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
  </svg>
);

const ThumbUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 10v12"/>
    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/>
  </svg>
);

const ThumbDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 14V2"/>
    <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/>
  </svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m5 12 7-7 7 7"/>
    <path d="M12 19V5"/>
  </svg>
);

const suggestions = [
  {
    title: "Explain a coding concept",
    desc: "How do async/await coroutines work in JavaScript and Kotlin?",
    prompt: "Explain how async/await coroutines work in JavaScript and Kotlin with simple examples",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    )
  },
  {
    title: "Draft an academic email",
    desc: "Requesting a deadline extension for an assignment.",
    prompt: "Draft a formal email to my professor requesting a deadline extension for a laboratory report due to health reasons",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    )
  },
  {
    title: "Generate an image",
    desc: "/imagine a high-tech smart classroom of the future",
    prompt: "/imagine a high-tech smart classroom of the future, 8k resolution, cinematic lighting, photorealistic",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
    )
  },
  {
    title: "Revision strategies",
    desc: "Best study methods for upcoming final exams.",
    prompt: "What are the most effective study techniques for memorizing complex technical details before final exams?",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    )
  }
];

export default function AiStudioPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [chatHistory, setChatHistory] = useState<{ id: string; title: string; messages: ChatMessage[] }[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  /* ─── Load student profile ─── */
  useEffect(() => {
    fetch("/api/student/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.student?.fullName) {
          setStudentName(data.student.fullName.split(" ")[0]);
        }
      })
      .catch((err) => console.error("Error fetching student profile:", err));
  }, []);

  /* ─── Load chat history from API ─── */
  useEffect(() => {
    async function loadHistory() {
      try {
        const res = await fetch("/api/ai/history");
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.messages && data.messages.length > 0) {
            const parsed: ChatMessage[] = data.messages.map((m: any) => ({
              id: m.id,
              role: m.role,
              type: m.type,
              content: m.content,
              prompt: m.imagePrompt,
              timestamp: new Date(m.createdAt),
            }));
            setMessages(parsed);
            // Create a chat entry for existing history
            const firstUserMsg = parsed.find(m => m.role === "user");
            const title = firstUserMsg ? firstUserMsg.content.slice(0, 40) + (firstUserMsg.content.length > 40 ? "..." : "") : "Previous Chat";
            const chatId = generateId();
            setChatHistory([{ id: chatId, title, messages: parsed }]);
            setActiveChatId(chatId);
          } else {
            setMessages([]);
          }
        }
      } catch (err) {
        console.error("Failed to load AI history:", err);
      }
    }
    loadHistory();
  }, []);

  /* ─── Auto scroll ─── */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* ─── Auto-resize textarea ─── */
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = Math.min(inputRef.current.scrollHeight, 160) + "px";
    }
  }, [input]);

  /* ─── Responsive sidebar ─── */
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    if (mq.matches) setSidebarOpen(false);
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setSidebarOpen(false);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const getGreeting = () => {
    const h = new Date().getHours();
    if (h < 12) return "Good morning";
    if (h < 17) return "Good afternoon";
    return "Good evening";
  };

  const isImagePrompt = (text: string) =>
    text.trim().toLowerCase().startsWith("/imagine");

  const extractImagePrompt = (text: string) =>
    text.trim().replace(/^\/imagine\s*/i, "").trim();

  /* ─── Start New Chat ─── */
  const handleNewChat = useCallback(() => {
    // Save current chat to history if it has messages
    if (messages.length > 0 && activeChatId) {
      setChatHistory(prev => prev.map(c => c.id === activeChatId ? { ...c, messages } : c));
    } else if (messages.length > 0 && !activeChatId) {
      const firstUserMsg = messages.find(m => m.role === "user");
      const title = firstUserMsg ? firstUserMsg.content.slice(0, 40) + (firstUserMsg.content.length > 40 ? "..." : "") : "Chat";
      const newId = generateId();
      setChatHistory(prev => [{ id: newId, title, messages }, ...prev]);
    }
    setMessages([]);
    setActiveChatId(null);
    setInput("");
    fetch("/api/ai/history", { method: "DELETE" }).catch(() => {});
  }, [messages, activeChatId]);

  /* ─── Switch to a history chat ─── */
  const switchToChat = useCallback((chatId: string) => {
    // Save current before switching
    if (messages.length > 0 && activeChatId) {
      setChatHistory(prev => prev.map(c => c.id === activeChatId ? { ...c, messages } : c));
    }
    const target = chatHistory.find(c => c.id === chatId);
    if (target) {
      setMessages(target.messages);
      setActiveChatId(chatId);
    }
    // Close sidebar on mobile
    if (window.innerWidth <= 768) setSidebarOpen(false);
  }, [messages, activeChatId, chatHistory]);

  /* ─── Auto sync messages into active chat history ─── */
  useEffect(() => {
    if (activeChatId && messages.length > 0) {
      setChatHistory(prev =>
        prev.map(c => (c.id === activeChatId ? { ...c, messages } : c))
      );
    }
  }, [messages, activeChatId]);

  /* ─── Delete a chat from history ─── */
  const deleteChat = (chatId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setChatHistory(prev => prev.filter(c => c.id !== chatId));
    if (activeChatId === chatId) {
      setMessages([]);
      setActiveChatId(null);
    }
  };

  /* ─── Send message ─── */
  async function handleSend() {
    const trimmed = input.trim();
    if (!trimmed || isGenerating) return;

    const userMsg: ChatMessage = {
      id: generateId(),
      role: "user",
      type: "text",
      content: trimmed,
      timestamp: new Date(),
    };

    const loadingId = generateId();
    const loadingMsg: ChatMessage = {
      id: loadingId,
      role: "assistant",
      type: "loading",
      content: isImagePrompt(trimmed) ? "Generating image..." : "Thinking...",
      timestamp: new Date(),
    };

    const newMessages = [...messages, userMsg, loadingMsg];
    setMessages(newMessages);
    setInput("");
    setIsGenerating(true);

    // If this is the first message in a new chat, create a history entry
    if (!activeChatId) {
      const newChatId = generateId();
      const title = trimmed.slice(0, 40) + (trimmed.length > 40 ? "..." : "");
      setChatHistory(prev => [{ id: newChatId, title, messages: newMessages }, ...prev]);
      setActiveChatId(newChatId);
    }

    try {
      if (isImagePrompt(trimmed)) {
        const prompt = extractImagePrompt(trimmed);
        const res = await fetch("/api/ai/image", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt }),
        });
        const data = await res.json();

        setMessages((prev) =>
          prev.map((m) =>
            m.id === loadingId
              ? {
                  ...m,
                  type: data.base64 ? "image" : "error",
                  content: data.base64 ?? (data.error || "Failed to generate image."),
                  prompt,
                }
              : m
          )
        );
      } else {
        const history = messages
          .filter((m) => m.type === "text")
          .slice(-10)
          .map((m) => ({ role: m.role, content: m.content }));

        history.push({ role: "user", content: trimmed });

        const res = await fetch("/api/ai/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: history }),
        });
        const data = await res.json();

        setMessages((prev) =>
          prev.map((m) =>
            m.id === loadingId
              ? {
                  ...m,
                  type: data.reply ? "text" : "error",
                  content: data.reply ?? (data.error || "No response received."),
                }
              : m
          )
        );
      }
    } catch {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === loadingId
            ? { ...m, type: "error", content: "Network error. Please try again." }
            : m
        )
      );
    } finally {
      setIsGenerating(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  /* ─── Markdown Renderer ─── */
  function renderFormattedContent(content: string) {
    const parts = content.split(/(```[\s\S]*?```)/g);

    return parts.map((part, index) => {
      if (part.startsWith("```") && part.endsWith("```")) {
        const lines = part.slice(3, -3).trim().split("\n");
        let language = "code";
        let codeLines = lines;
        if (lines[0] && !lines[0].includes(" ") && lines[0].length < 15 && lines.length > 1) {
          language = lines[0];
          codeLines = lines.slice(1);
        }
        const codeText = codeLines.join("\n");

        return (
          <div
            key={index}
            style={{
              margin: "14px 0",
              borderRadius: "10px",
              border: "1px solid rgba(30,35,69,0.8)",
              backgroundColor: "#08080f",
              fontFamily: "'Fira Code', 'Courier New', Courier, monospace",
              fontSize: "13px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 14px",
                backgroundColor: "rgba(10,10,22,0.9)",
                borderBottom: "1px solid rgba(30,35,69,0.8)",
                color: "#64748b",
              }}
            >
              <span style={{ textTransform: "uppercase", fontSize: "10px", fontWeight: 700, letterSpacing: "1px", color: "#a5b4fc" }}>
                {language}
              </span>
              <CopyButton text={codeText} />
            </div>
            <pre style={{ margin: 0, padding: "14px", overflowX: "auto", color: "#e2e8f0", lineHeight: 1.55 }}>
              <code>{codeText}</code>
            </pre>
          </div>
        );
      } else {
        const lines = part.split("\n");
        return lines.map((line, lineIdx) => {
          const trimmedLine = line.trim();
          const numMatch = trimmedLine.match(/^(\d+)\.\s+(.*)/);
          if (numMatch) {
            const num = numMatch[1];
            const rawText = numMatch[2];
            return (
              <div key={`${index}-${lineIdx}`} style={{ display: "flex", alignItems: "flex-start", gap: "10px", margin: "8px 0" }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(99,102,241,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#a78bfa", fontSize: 11, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>
                  {num}
                </div>
                <div style={{ flex: 1, lineHeight: 1.6, fontSize: "14px" }}>
                  {renderInlineParts(rawText)}
                </div>
              </div>
            );
          }

          const isBullet = trimmedLine.startsWith("- ") || trimmedLine.startsWith("* ");
          const bulletText = isBullet ? trimmedLine.slice(2) : line;

          if (isBullet) {
            return (
              <div key={`${index}-${lineIdx}`} style={{ display: "flex", alignItems: "flex-start", gap: "8px", margin: "4px 0 4px 12px" }}>
                <span style={{ color: "#8b5cf6", fontSize: 14, lineHeight: "22px" }}>&#x2022;</span>
                <span style={{ lineHeight: 1.6, fontSize: "14px" }}>
                  {renderInlineParts(bulletText)}
                </span>
              </div>
            );
          }

          if (trimmedLine === "") return <div key={`${index}-${lineIdx}`} style={{ height: 6 }} />;

          return (
            <p key={`${index}-${lineIdx}`} style={{ margin: "5px 0", lineHeight: 1.6, fontSize: "14px" }}>
              {renderInlineParts(line)}
            </p>
          );
        });
      }
    });
  }

  function renderInlineParts(text: string) {
    const inlineParts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
    return inlineParts.map((subPart, subIdx) => {
      if (subPart.startsWith("`") && subPart.endsWith("`")) {
        return (
          <code
            key={subIdx}
            style={{
              padding: "2px 6px",
              borderRadius: "5px",
              backgroundColor: "rgba(99,102,241,0.1)",
              color: "#a78bfa",
              fontFamily: "monospace",
              fontSize: "13px",
            }}
          >
            {subPart.slice(1, -1)}
          </code>
        );
      } else if (subPart.startsWith("**") && subPart.endsWith("**")) {
        return (
          <strong key={subIdx} style={{ fontWeight: 700, color: "#ffffff" }}>
            {subPart.slice(2, -2)}
          </strong>
        );
      } else {
        return subPart;
      }
    });
  }

  function renderContent(msg: ChatMessage) {
    if (msg.type === "loading") {
      return (
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ display: "flex", gap: 4 }}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
                  display: "inline-block",
                  animation: `gemPulse 1.2s ${i * 0.2}s infinite ease-in-out`,
                }}
              />
            ))}
          </div>
          <span style={{ fontSize: 13, color: "#64748b", fontStyle: "italic" }}>
            {msg.content}
          </span>
        </div>
      );
    }

    if (msg.type === "image") {
      return (
        <div style={{ marginTop: "6px" }}>
          {msg.prompt && (
            <p style={{ margin: "0 0 10px", fontSize: 12, color: "#64748b", fontStyle: "italic" }}>
              Prompt: &quot;{msg.prompt}&quot;
            </p>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`data:image/jpeg;base64,${msg.content}`}
            alt={msg.prompt ?? "Generated image"}
            style={{
              maxWidth: "100%",
              maxHeight: "420px",
              borderRadius: 12,
              display: "block",
              boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
              border: "1px solid rgba(30,35,69,0.8)"
            }}
          />
          <a
            href={`data:image/jpeg;base64,${msg.content}`}
            download={`flux-gen-${msg.id}.jpg`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              marginTop: "10px",
              fontSize: "12px",
              color: "#8b5cf6",
              textDecoration: "none",
              fontWeight: 600,
              transition: "opacity 0.2s"
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
            Download Image
          </a>
        </div>
      );
    }

    if (msg.type === "error") {
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#f87171", fontSize: "13px" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
            <line x1="12" x2="12" y1="9" y2="13"/>
            <line x1="12" x2="12.01" y1="17" y2="17"/>
          </svg>
          {msg.content}
        </div>
      );
    }

    return renderFormattedContent(msg.content);
  }

  return (
    <>
      <style>{`
        @keyframes gemPulse {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
        @keyframes gemSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes gemSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gemGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes gemFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .gem-root {
          display: flex;
          height: 100vh;
          width: 100%;
          background: #070913;
          color: #e2e8f0;
          font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, system-ui, sans-serif;
          overflow: hidden;
        }

        /* ─── Left Sidebar ─── */
        .gem-sidebar {
          width: 260px;
          min-width: 260px;
          height: 100vh;
          background: #0a0c1a;
          border-right: 1px solid #1a1d35;
          display: flex;
          flex-direction: column;
          transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s;
          z-index: 40;
        }
        .gem-sidebar.collapsed {
          margin-left: -260px;
          opacity: 0;
          pointer-events: none;
        }
        .gem-sidebar-header {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .gem-sidebar-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .gem-sidebar-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          font-size: 15px;
          color: #f1f5f9;
          letter-spacing: 0.3px;
        }
        .gem-sidebar-brand-icon {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }
        .gem-new-chat-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          padding: 11px 16px;
          border-radius: 22px;
          border: 1px solid #1e2345;
          background: transparent;
          color: #e2e8f0;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .gem-new-chat-btn:hover {
          background: rgba(99,102,241,0.08);
          border-color: #4f46e5;
        }

        .gem-sidebar-section {
          padding: 4px 12px;
          font-size: 11px;
          font-weight: 600;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 8px;
        }

        .gem-sidebar-chats {
          flex: 1;
          overflow-y: auto;
          padding: 4px 8px;
        }
        .gem-sidebar-chats::-webkit-scrollbar { width: 4px; }
        .gem-sidebar-chats::-webkit-scrollbar-track { background: transparent; }
        .gem-sidebar-chats::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.06); border-radius: 4px; }

        .gem-chat-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.15s;
          margin-bottom: 2px;
          position: relative;
        }
        .gem-chat-item:hover {
          background: rgba(99,102,241,0.06);
        }
        .gem-chat-item.active {
          background: rgba(99,102,241,0.1);
        }
        .gem-chat-item-text {
          flex: 1;
          font-size: 13px;
          color: #cbd5e1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          line-height: 1.4;
        }
        .gem-chat-item.active .gem-chat-item-text {
          color: #f1f5f9;
          font-weight: 500;
        }
        .gem-chat-delete {
          opacity: 0;
          background: transparent;
          border: none;
          color: #64748b;
          cursor: pointer;
          padding: 4px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s;
          flex-shrink: 0;
        }
        .gem-chat-item:hover .gem-chat-delete {
          opacity: 1;
        }
        .gem-chat-delete:hover {
          background: rgba(239,68,68,0.1);
          color: #f87171;
        }

        .gem-sidebar-footer {
          padding: 12px 12px 16px;
          border-top: 1px solid #1a1d35;
        }
        .gem-sidebar-user {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px;
          border-radius: 10px;
          transition: background 0.15s;
          cursor: pointer;
        }
        .gem-sidebar-user:hover {
          background: rgba(99,102,241,0.06);
        }
        .gem-sidebar-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          flex-shrink: 0;
          position: relative;
        }
        .gem-sidebar-user-info {
          flex: 1;
          min-width: 0;
        }
        .gem-sidebar-user-name {
          font-size: 13px;
          font-weight: 600;
          color: #e2e8f0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .gem-sidebar-user-role {
          font-size: 11px;
          color: #64748b;
        }

        .gem-back-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          border-radius: 10px;
          color: #94a3b8;
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.15s;
          margin-bottom: 8px;
        }
        .gem-back-link:hover {
          background: rgba(99,102,241,0.06);
          color: #e2e8f0;
        }

        /* ─── Main Area ─── */
        .gem-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          height: 100vh;
          min-width: 0;
          position: relative;
        }

        /* Top bar */
        .gem-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 20px;
          border-bottom: 1px solid rgba(30,35,69,0.5);
          flex-shrink: 0;
          background: rgba(7,9,19,0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 10;
        }
        .gem-topbar-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .gem-topbar-right {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .gem-toggle-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          border: none;
          background: transparent;
          color: #94a3b8;
          cursor: pointer;
          transition: all 0.15s;
        }
        .gem-toggle-btn:hover {
          background: rgba(99,102,241,0.08);
          color: #e2e8f0;
        }
        .gem-model-selector {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 8px;
          background: transparent;
          border: none;
          color: #e2e8f0;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          transition: background 0.15s;
        }
        .gem-model-selector:hover {
          background: rgba(99,102,241,0.06);
        }
        .gem-topbar-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.15s;
        }
        .gem-topbar-avatar:hover {
          transform: scale(1.05);
        }

        /* ─── Chat / Welcome ─── */
        .gem-content {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }
        .gem-content::-webkit-scrollbar { width: 5px; }
        .gem-content::-webkit-scrollbar-track { background: transparent; }
        .gem-content::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.06); border-radius: 4px; }
        .gem-content::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.12); }

        /* Welcome */
        .gem-welcome {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 680px;
          width: 100%;
          margin: 0 auto;
          padding: 40px 24px;
          animation: gemFadeIn 0.6s ease;
        }
        .gem-greeting {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 4px;
          background: linear-gradient(74deg, #4285f4 0%, #9b72cb 35%, #d96570 70%);
          background-size: 200% 200%;
          animation: gemGradient 6s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .gem-subtitle {
          font-size: clamp(1.4rem, 3vw, 2.2rem);
          font-weight: 500;
          color: #334155;
          margin-bottom: 40px;
          line-height: 1.2;
        }
        .gem-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        @media (max-width: 520px) {
          .gem-cards { grid-template-columns: 1fr; }
        }
        .gem-card {
          background: #0e1025;
          border: 1px solid #1a1d35;
          border-radius: 16px;
          padding: 18px;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .gem-card:hover {
          background: rgba(99,102,241,0.05);
          border-color: rgba(99,102,241,0.3);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(99,102,241,0.08);
        }
        .gem-card-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(99,102,241,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8b5cf6;
        }
        .gem-card-title {
          font-size: 14px;
          font-weight: 600;
          color: #f1f5f9;
        }
        .gem-card-desc {
          font-size: 12px;
          color: #64748b;
          line-height: 1.4;
        }

        /* Messages */
        .gem-messages {
          max-width: 820px;
          width: 100%;
          margin: 0 auto;
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          flex: 1;
        }
        .gem-msg-row {
          animation: gemSlideIn 0.3s cubic-bezier(0.16,1,0.3,1) both;
          display: flex;
          width: 100%;
          align-items: flex-start;
          gap: 14px;
        }
        .gem-msg-row.user { justify-content: flex-end; }
        .gem-msg-row.assistant { justify-content: flex-start; }
        .gem-msg-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .gem-msg-avatar.ai {
          background: linear-gradient(135deg, #4f46e5, #8b5cf6);
          color: #fff;
        }
        .gem-msg-avatar.user {
          background: #3b82f6;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
        }
        .gem-user-bubble {
          background: linear-gradient(135deg, #1e293b, #1a2332);
          border-radius: 20px 20px 4px 20px;
          padding: 12px 18px;
          max-width: 70%;
          color: #f1f5f9;
          border: 1px solid #2a3042;
        }
        .gem-user-bubble p { margin: 0; font-size: 14px; line-height: 1.5; }
        .gem-ai-response {
          flex: 1;
          min-width: 0;
        }
        .gem-ai-response-inner {
          font-size: 14px;
          line-height: 1.7;
          color: #cbd5e1;
        }
        .gem-ai-actions {
          display: flex;
          align-items: center;
          gap: 2px;
          margin-top: 8px;
          padding-top: 4px;
        }

        /* ─── Input Bar ─── */
        .gem-input-area {
          padding: 0 24px 20px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .gem-input-container {
          max-width: 820px;
          width: 100%;
          background: #0e1025;
          border: 1px solid #1e2345;
          border-radius: 24px;
          padding: 8px 8px 8px 20px;
          display: flex;
          align-items: flex-end;
          gap: 8px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .gem-input-container:focus-within {
          border-color: #4f46e5;
          box-shadow: 0 0 0 2px rgba(99,102,241,0.08);
        }
        .gem-textarea {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #e2e8f0;
          font-size: 14px;
          font-family: inherit;
          resize: none;
          min-height: 24px;
          max-height: 160px;
          line-height: 1.5;
          padding: 8px 0;
        }
        .gem-textarea::placeholder {
          color: #475569;
        }
        .gem-input-actions {
          display: flex;
          align-items: center;
          gap: 2px;
          flex-shrink: 0;
          padding-bottom: 2px;
        }
        .gem-input-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: none;
          background: transparent;
          color: #64748b;
          cursor: pointer;
          transition: all 0.15s;
          flex-shrink: 0;
        }
        .gem-input-btn:hover {
          background: rgba(99,102,241,0.08);
          color: #a78bfa;
        }
        .gem-send-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          flex-shrink: 0;
          padding: 0;
        }
        .gem-send-btn.active {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          color: #fff;
          box-shadow: 0 4px 14px rgba(99,102,241,0.3);
        }
        .gem-send-btn.active:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
        .gem-send-btn.inactive {
          background: #1a1d35;
          color: #475569;
          cursor: not-allowed;
        }
        .gem-disclaimer {
          font-size: 11px;
          color: #475569;
          margin-top: 10px;
          text-align: center;
          font-weight: 400;
        }

        /* ─── Mobile Overlay ─── */
        .gem-mobile-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          z-index: 35;
          backdrop-filter: blur(4px);
        }

        /* ─── Responsive ─── */
        @media (max-width: 768px) {
          .gem-sidebar {
            position: fixed;
            left: 0;
            top: 0;
            z-index: 40;
            box-shadow: 8px 0 30px rgba(0,0,0,0.5);
          }
          .gem-sidebar.collapsed {
            margin-left: -260px;
          }
          .gem-mobile-overlay.visible {
            display: block;
          }
          .gem-welcome { padding: 30px 16px; }
          .gem-messages { padding: 16px; }
          .gem-input-area { padding: 0 12px 14px; }
          .gem-user-bubble { max-width: 85%; }
        }
      `}</style>

      <div className="gem-root">
        {/* ─── Mobile Overlay ─── */}
        <div
          className={`gem-mobile-overlay ${sidebarOpen ? "visible" : ""}`}
          onClick={() => setSidebarOpen(false)}
        />

        {/* ─── Left Sidebar ─── */}
        <aside className={`gem-sidebar ${sidebarOpen ? "" : "collapsed"}`}>
          <div className="gem-sidebar-header">
            <div className="gem-sidebar-top">
              <div className="gem-sidebar-brand">
                <div className="gem-sidebar-brand-icon">
                  <SparkleIcon size={16} />
                </div>
                LeGeZt AI
              </div>
              <button
                className="gem-toggle-btn"
                onClick={() => setSidebarOpen(false)}
                title="Close sidebar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
            </div>
            <button className="gem-new-chat-btn" onClick={handleNewChat}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              New Chat
            </button>
          </div>

          <div className="gem-sidebar-section">Recent</div>

          <div className="gem-sidebar-chats">
            {chatHistory.length === 0 ? (
              <div style={{ padding: "20px 12px", textAlign: "center", color: "#475569", fontSize: 12 }}>
                No recent conversations
              </div>
            ) : (
              chatHistory.map((chat) => (
                <div
                  key={chat.id}
                  className={`gem-chat-item ${activeChatId === chat.id ? "active" : ""}`}
                  onClick={() => switchToChat(chat.id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: "#475569" }}>
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  <span className="gem-chat-item-text">{chat.title}</span>
                  <button
                    className="gem-chat-delete"
                    onClick={(e) => deleteChat(chat.id, e)}
                    title="Delete chat"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h18"/>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                    </svg>
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="gem-sidebar-footer">
            <Link href="/student/dashboard" className="gem-back-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"/>
                <polyline points="12 19 5 12 12 5"/>
              </svg>
              Back to Portal
            </Link>
            <div className="gem-sidebar-user" onClick={() => router.push("/student/profile")}>
              <div className="gem-sidebar-avatar">
                {studentName?.charAt(0)?.toUpperCase() || "S"}
              </div>
              <div className="gem-sidebar-user-info">
                <div className="gem-sidebar-user-name">{studentName || "Student"}</div>
                <div className="gem-sidebar-user-role">LIET Student</div>
              </div>
            </div>
          </div>
        </aside>

        {/* ─── Main Chat Area ─── */}
        <div className="gem-main">
          {/* Top Bar */}
          <div className="gem-topbar">
            <div className="gem-topbar-left">
              {!sidebarOpen && (
                <button
                  className="gem-toggle-btn"
                  onClick={() => setSidebarOpen(true)}
                  title="Open sidebar"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <line x1="3" y1="18" x2="21" y2="18"/>
                  </svg>
                </button>
              )}
              {!sidebarOpen && (
                <button className="gem-toggle-btn" onClick={handleNewChat} title="New chat">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9"/>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                  </svg>
                </button>
              )}
              <button className="gem-model-selector">
                LeGeZt AI
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
            </div>
            <div className="gem-topbar-right">
              <div
                className="gem-topbar-avatar"
                onClick={() => router.push("/student/profile")}
                title={studentName || "Profile"}
              >
                {studentName?.charAt(0)?.toUpperCase() || "S"}
              </div>
            </div>
          </div>

          {/* ─── Content: Welcome or Messages ─── */}
          <div className="gem-content">
            {messages.length === 0 ? (
              <div className="gem-welcome">
                <h1 className="gem-greeting">
                  {getGreeting()}, {studentName || "Student"}
                </h1>
                <h2 className="gem-subtitle">
                  How can I help you today?
                </h2>
                <div className="gem-cards">
                  {suggestions.map((s, idx) => (
                    <div
                      key={idx}
                      className="gem-card"
                      onClick={() => {
                        setInput(s.prompt);
                        setTimeout(() => inputRef.current?.focus(), 50);
                      }}
                    >
                      <div className="gem-card-icon">{s.icon}</div>
                      <div>
                        <div className="gem-card-title">{s.title}</div>
                        <div className="gem-card-desc">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="gem-messages">
                {messages.map((msg) => {
                  const isUser = msg.role === "user";
                  return (
                    <div
                      key={msg.id}
                      className={`gem-msg-row ${isUser ? "user" : "assistant"}`}
                    >
                      {!isUser && (
                        <div className="gem-msg-avatar ai">
                          <SparkleIcon size={14} />
                        </div>
                      )}

                      {isUser ? (
                        <div className="gem-user-bubble">
                          <p>{msg.content}</p>
                        </div>
                      ) : (
                        <div className="gem-ai-response">
                          <div className="gem-ai-response-inner">
                            {renderContent(msg)}
                          </div>
                          {msg.type !== "loading" && (
                            <div className="gem-ai-actions">
                              <ActionButton
                                icon={<CopyIcon />}
                                onClick={() => navigator.clipboard.writeText(msg.content)}
                              />
                              <ActionButton icon={<ThumbUpIcon />} />
                              <ActionButton icon={<ThumbDownIcon />} />
                            </div>
                          )}
                        </div>
                      )}

                      {isUser && (
                        <div className="gem-msg-avatar user">
                          {studentName?.charAt(0)?.toUpperCase() || "S"}
                        </div>
                      )}
                    </div>
                  );
                })}
                <div ref={bottomRef} />
              </div>
            )}
          </div>

          {/* ─── Input Bar ─── */}
          <div className="gem-input-area">
            <div className="gem-input-container">
              <button className="gem-input-btn" title="Attach file" style={{ marginRight: -4 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"/>
                  <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </button>

              <textarea
                ref={inputRef}
                id="ai-chat-input"
                className="gem-textarea"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  isGenerating
                    ? "Generating response..."
                    : "Ask LeGeZt AI anything..."
                }
                disabled={isGenerating}
                rows={1}
              />

              <div className="gem-input-actions">
                {input.toLowerCase().startsWith("/imagine") && (
                  <span
                    style={{
                      fontSize: 9,
                      color: "#8b5cf6",
                      background: "rgba(139,92,246,0.1)",
                      border: "1px solid rgba(139,92,246,0.2)",
                      padding: "3px 8px",
                      borderRadius: 10,
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                      whiteSpace: "nowrap",
                      marginRight: 4,
                    }}
                  >
                    IMAGE
                  </span>
                )}

                <button className="gem-input-btn" title="Voice input">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                    <line x1="12" y1="19" x2="12" y2="23"/>
                    <line x1="8" y1="23" x2="16" y2="23"/>
                  </svg>
                </button>

                <button
                  id="ai-send-btn"
                  className={`gem-send-btn ${isGenerating || !input.trim() ? "inactive" : "active"}`}
                  onClick={handleSend}
                  disabled={isGenerating || !input.trim()}
                >
                  {isGenerating ? (
                    <div
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        border: "2px solid currentColor",
                        borderTopColor: "transparent",
                        animation: "gemSpin 0.8s infinite linear",
                        boxSizing: "border-box",
                      }}
                    />
                  ) : (
                    <SendIcon />
                  )}
                </button>
              </div>
            </div>
            <div className="gem-disclaimer">
              LeGeZt AI can make mistakes. Consider checking important information.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
