"use client";
import { useState, useRef, useEffect } from "react";

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
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    )
  },
  {
    title: "Image generation",
    desc: "/imagine a high-tech smart classroom of the future",
    prompt: "/imagine a high-tech smart classroom of the future, 8k resolution, cinematic lighting, photorealistic",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
    )
  },
  {
    title: "Revision tips",
    desc: "Best study methods for upcoming final exams.",
    prompt: "What are the most effective study techniques for memorizing complex technical details before final exams?",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    )
  }
];

const quickPills = [
  { text: "/imagine college campus", icon: "image" },
  { text: "Best Python IDE?", icon: "code" },
  { text: "Python vs JavaScript", icon: "compare" },
  { text: "Study schedule tips", icon: "book" },
];

export default function AiStudioPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [studentName, setStudentName] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

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

  useEffect(() => {
    async function loadHistory() {
      try {
        const res = await fetch("/api/ai/history");
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.messages && data.messages.length > 0) {
            const parsed = data.messages.map((m: any) => ({
              id: m.id,
              role: m.role,
              type: m.type,
              content: m.content,
              prompt: m.imagePrompt,
              timestamp: new Date(m.createdAt),
            }));
            setMessages(parsed);
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

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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

    setMessages((prev) => [...prev, userMsg, loadingMsg]);
    setInput("");
    setIsGenerating(true);

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

  async function clearChat() {
    if (!confirm("Are you sure you want to clear your conversation history?")) return;
    try {
      const res = await fetch("/api/ai/history", { method: "DELETE" });
      if (res.ok) {
        setMessages([]);
      }
    } catch (err) {
      console.error("Failed to clear chat history:", err);
    }
  }

  /* ─── Markdown Renderer with Code Blocks, Numbered Lists, Bullets ─── */
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
              border: "1px solid var(--ai-border)",
              backgroundColor: "var(--ai-code-bg)",
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
                borderBottom: "1px solid var(--ai-border)",
                color: "var(--ai-muted)",
              }}
            >
              <span style={{ textTransform: "uppercase", fontSize: "10px", fontWeight: 700, letterSpacing: "1px", color: "#a5b4fc" }}>
                {language}
              </span>
              <CopyButton text={codeText} />
            </div>
            <pre style={{ margin: 0, padding: "14px", overflowX: "auto", color: "var(--ai-text)", lineHeight: 1.55 }}>
              <code>{codeText}</code>
            </pre>
          </div>
        );
      } else {
        const lines = part.split("\n");
        return lines.map((line, lineIdx) => {
          const trimmedLine = line.trim();

          // Numbered list: "1. Title" or "1. **Title**: Description"
          const numMatch = trimmedLine.match(/^(\d+)\.\s+(.*)/);
          if (numMatch) {
            const num = numMatch[1];
            const rawText = numMatch[2];
            return (
              <div
                key={`${index}-${lineIdx}`}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  margin: "8px 0",
                }}
              >
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "rgba(99,102,241,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#a78bfa",
                    fontSize: 11,
                    fontWeight: 700,
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
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
              <div
                key={`${index}-${lineIdx}`}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  marginLeft: "12px",
                  margin: "4px 0 4px 12px",
                }}
              >
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
                  animation: `aiPulse 1.2s ${i * 0.2}s infinite ease-in-out`,
                }}
              />
            ))}
          </div>
          <span style={{ fontSize: 13, color: "var(--ai-muted)", fontStyle: "italic" }}>
            {msg.content}
          </span>
        </div>
      );
    }

    if (msg.type === "image") {
      return (
        <div style={{ marginTop: "6px" }}>
          {msg.prompt && (
            <p style={{ margin: "0 0 10px", fontSize: 12, color: "var(--ai-muted)", fontStyle: "italic" }}>
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
              border: "1px solid var(--ai-border)"
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

  const quickPillIcons: Record<string, React.ReactNode> = {
    image: (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
    ),
    code: (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    compare: (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    book: (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
  };

  return (
    <>
      <style>{`
        :root {
          --ai-bg: #0a0a12;
          --ai-surface: #0e0e1a;
          --ai-card: #12122a;
          --ai-code-bg: #08080f;
          --ai-border: #1c1c38;
          --ai-accent: #4f46e5;
          --ai-accent2: #8b5cf6;
          --ai-accent3: #3b82f6;
          --ai-text: #e2e8f0;
          --ai-muted: #64748b;
          --ai-glow: rgba(99, 102, 241, 0.08);
        }
        @keyframes aiPulse {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
        @keyframes aiSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes aiSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .ai-studio-root {
          display: flex;
          flex-direction: column;
          background: var(--ai-bg);
          color: var(--ai-text);
          font-family: 'Inter', -apple-system, system-ui, sans-serif;
          position: relative;
          overflow: hidden;
          width: 100%;
        }
        @media (min-width: 769px) {
          .ai-studio-root { height: 100vh !important; }
        }
        @media (max-width: 768px) {
          .ai-studio-root { height: calc(100vh - 58px) !important; }
        }
        .ai-msg-row { animation: aiSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .ai-send-btn:hover:not(:disabled) { transform: scale(1.04); filter: brightness(1.1); }
        .ai-send-btn:disabled { opacity: 0.45; cursor: not-allowed; }
        .ai-clear-btn:hover { background: rgba(239, 68, 68, 0.08) !important; border-color: rgba(239, 68, 68, 0.25) !important; color: #f87171 !important; }
        .ai-input:focus { outline: none; border-color: var(--ai-accent) !important; box-shadow: 0 0 0 2px var(--ai-glow) !important; }

        .ai-scroll::-webkit-scrollbar { width: 5px; }
        .ai-scroll::-webkit-scrollbar-track { background: transparent; }
        .ai-scroll::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.06); border-radius: 4px; }
        .ai-scroll::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.12); }

        .suggestion-card-web {
          flex-shrink: 0;
          width: 180px;
          min-height: 130px;
          background: var(--ai-card);
          border: 1px solid var(--ai-border);
          border-radius: 14px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .suggestion-card-web:hover {
          background: rgba(99, 102, 241, 0.06);
          border-color: var(--ai-accent2);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.1);
        }

        .quick-pill {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 6px 12px;
          border-radius: 18px;
          border: 1px solid var(--ai-border);
          background: rgba(99,102,241,0.05);
          color: var(--ai-text);
          font-size: 11px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .quick-pill:hover {
          border-color: var(--ai-accent2);
          background: rgba(99,102,241,0.1);
        }

        .input-action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: none;
          background: transparent;
          color: var(--ai-muted);
          cursor: pointer;
          transition: color 0.2s, background 0.2s;
          flex-shrink: 0;
        }
        .input-action-btn:hover {
          color: var(--ai-accent2);
          background: rgba(99,102,241,0.08);
        }
      `}</style>

      <div className="ai-studio-root">
        {/* ─── Header ─── */}
        <div
          style={{
            padding: "12px 20px",
            borderBottom: "1px solid var(--ai-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "var(--ai-surface)",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--ai-accent), var(--ai-accent2))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                boxShadow: "0 0 16px rgba(99,102,241,0.3)",
              }}
            >
              <SparkleIcon size={16} />
            </div>
            <div>
              <h1
                style={{
                  margin: 0,
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "0.3px"
                }}
              >
                LeGeZt AI
              </h1>
              <p style={{ margin: 0, fontSize: 9, color: "var(--ai-muted)", fontWeight: 600, letterSpacing: "0.8px" }}>
                LLAMA 3.3 70B + FLUX IMAGE
              </p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {messages.length > 0 && (
              <button
                className="ai-clear-btn"
                onClick={clearChat}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "6px 14px",
                  borderRadius: 20,
                  border: "1px solid var(--ai-border)",
                  background: "transparent",
                  color: "var(--ai-muted)",
                  fontSize: 11,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6h18"/>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                </svg>
                Clear
              </button>
            )}
            {/* Pro badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                padding: "4px 10px",
                borderRadius: 12,
                background: "linear-gradient(135deg, var(--ai-accent), var(--ai-accent2))",
                fontSize: 10,
                fontWeight: 700,
                color: "#fff",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Pro
            </div>
            {/* User avatar */}
            <div style={{ position: "relative", width: 32, height: 32 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "var(--ai-accent3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                {studentName?.charAt(0)?.toUpperCase() || "S"}
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22c55e",
                  border: "2px solid var(--ai-surface)",
                }}
              />
            </div>
          </div>
        </div>

        {/* ─── Messages / Welcome ─── */}
        <div
          className="ai-scroll"
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {messages.length === 0 ? (
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                maxWidth: "760px",
                width: "100%",
                margin: "0 auto",
                padding: "20px 0",
              }}
            >
              <h1
                style={{
                  fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                  fontWeight: 700,
                  margin: "0 0 6px",
                  lineHeight: 1.2,
                  background: "linear-gradient(74deg, #4285f4 0%, #9b72cb 35%, #d96570 70%)",
                  backgroundSize: "200% 200%",
                  animation: "gradientShift 6s ease infinite",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {getGreeting()}, {studentName || "Student"}
              </h1>
              <h2
                style={{
                  fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
                  fontWeight: 500,
                  margin: "0 0 32px",
                  color: "#334155",
                  lineHeight: 1.2,
                }}
              >
                How can I help you today?
              </h2>

              {/* Horizontal scrollable suggestion cards */}
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  overflowX: "auto",
                  paddingBottom: 8,
                  scrollbarWidth: "none",
                }}
              >
                {suggestions.map((s, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setInput(s.prompt);
                      setTimeout(() => inputRef.current?.focus(), 50);
                    }}
                    className="suggestion-card-web"
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 8,
                        background: "rgba(99,102,241,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--ai-accent2)",
                        marginBottom: 10,
                      }}
                    >
                      {s.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "#ffffff", marginBottom: 4 }}>
                        {s.title}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--ai-muted)", lineHeight: 1.4 }}>
                        {s.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div
              style={{
                maxWidth: "760px",
                width: "100%",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                padding: "8px 0",
              }}
            >
              {messages.map((msg) => {
                const isUser = msg.role === "user";
                return (
                  <div
                    key={msg.id}
                    className="ai-msg-row"
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: isUser ? "flex-end" : "flex-start",
                      alignItems: "flex-start",
                      gap: 12,
                    }}
                  >
                    {/* AI Avatar */}
                    {!isUser && (
                      <div
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, var(--ai-accent), var(--ai-accent2))",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#ffffff",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        <SparkleIcon size={14} />
                      </div>
                    )}

                    {/* Message Content */}
                    <div
                      style={{
                        maxWidth: isUser ? "70%" : "100%",
                        flex: !isUser ? 1 : undefined,
                      }}
                    >
                      {isUser ? (
                        /* User Message Bubble */
                        <div
                          style={{
                            background: "linear-gradient(135deg, #4f46e5, #6366f1)",
                            borderRadius: "18px 18px 4px 18px",
                            padding: "10px 16px",
                            color: "#ffffff",
                            border: "1px solid rgba(255,255,255,0.08)",
                          }}
                        >
                          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5 }}>{msg.content}</p>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                              alignItems: "center",
                              gap: 4,
                              marginTop: 4,
                            }}
                          >
                            <span style={{ fontSize: 9, opacity: 0.7 }}>
                              {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </span>
                            <span style={{ fontSize: 9, opacity: 0.7, fontWeight: 700 }}>
                              &#x2714;&#x2714;
                            </span>
                          </div>
                        </div>
                      ) : (
                        /* AI Response Card */
                        <div
                          style={{
                            background: "var(--ai-card)",
                            border: "1px solid var(--ai-border)",
                            borderRadius: 14,
                            padding: "14px 16px",
                          }}
                        >
                          {renderContent(msg)}
                          {/* Action footer */}
                          {msg.type !== "loading" && (
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginTop: 10,
                                paddingTop: 8,
                                borderTop: "1px solid var(--ai-border)",
                              }}
                            >
                              <div style={{ display: "flex", gap: 2 }}>
                                <ActionButton
                                  icon={<CopyIcon />}
                                  onClick={() => navigator.clipboard.writeText(msg.content)}
                                />
                                <ActionButton icon={<ThumbUpIcon />} />
                                <ActionButton icon={<ThumbDownIcon />} />
                              </div>
                              <span style={{ fontSize: 10, color: "var(--ai-muted)", fontWeight: 500 }}>
                                {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* User Avatar */}
                    {isUser && (
                      <div
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: "50%",
                          background: "var(--ai-accent3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontSize: 13,
                          fontWeight: 700,
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
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
        <div
          style={{
            padding: "10px 20px 16px",
            borderTop: "1px solid var(--ai-border)",
            background: "var(--ai-surface)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          {/* Quick suggestion pills */}
          <div
            style={{
              maxWidth: "760px",
              width: "100%",
              display: "flex",
              gap: 8,
              overflowX: "auto",
              paddingBottom: 10,
              scrollbarWidth: "none",
            }}
          >
            {quickPills.map((pill, idx) => (
              <button
                key={idx}
                className="quick-pill"
                onClick={() => {
                  setInput(pill.text);
                  setTimeout(() => inputRef.current?.focus(), 50);
                }}
              >
                <span style={{ color: "var(--ai-accent2)" }}>{quickPillIcons[pill.icon]}</span>
                {pill.text}
              </button>
            ))}
          </div>

          {/* Input row */}
          <div
            style={{
              maxWidth: "760px",
              width: "100%",
              display: "flex",
              alignItems: "flex-end",
              gap: 6,
            }}
          >
            {/* Add button */}
            <button className="input-action-btn" title="Attach file">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
            </button>

            {/* Globe button */}
            <button className="input-action-btn" title="Web search">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </button>

            {/* Text input */}
            <div style={{ flex: 1, position: "relative" }}>
              <textarea
                ref={inputRef}
                id="ai-chat-input"
                className="ai-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  isGenerating
                    ? "Generating response..."
                    : "Ask anything or type /imagine [prompt]..."
                }
                disabled={isGenerating}
                rows={1}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  paddingRight: input.toLowerCase().startsWith("/imagine") ? "90px" : "16px",
                  background: "var(--ai-card)",
                  border: "1px solid var(--ai-border)",
                  borderRadius: 22,
                  color: "var(--ai-text)",
                  fontSize: 13,
                  resize: "none",
                  minHeight: 44,
                  maxHeight: 140,
                  overflowY: "auto",
                  boxSizing: "border-box",
                  fontFamily: "inherit",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  lineHeight: 1.5,
                }}
              />
              {input.toLowerCase().startsWith("/imagine") && (
                <span
                  style={{
                    position: "absolute",
                    right: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: 9,
                    color: "#8b5cf6",
                    background: "rgba(139,92,246,0.1)",
                    border: "1px solid rgba(139,92,246,0.2)",
                    padding: "2px 7px",
                    borderRadius: 10,
                    pointerEvents: "none",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                  }}
                >
                  IMAGE ENGINE
                </span>
              )}
            </div>

            {/* Mic button */}
            <button className="input-action-btn" title="Voice input">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                <line x1="12" y1="19" x2="12" y2="23"/>
                <line x1="8" y1="23" x2="16" y2="23"/>
              </svg>
            </button>

            {/* Send button */}
            <button
              id="ai-send-btn"
              className="ai-send-btn"
              onClick={handleSend}
              disabled={isGenerating || !input.trim()}
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background:
                  isGenerating || !input.trim()
                    ? "var(--ai-card)"
                    : "linear-gradient(135deg, var(--ai-accent), var(--ai-accent2))",
                border: isGenerating || !input.trim() ? "1px solid var(--ai-border)" : "none",
                color: "#ffffff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                padding: 0,
                transition: "all 0.2s",
                boxShadow:
                  isGenerating || !input.trim()
                    ? "none"
                    : "0 4px 14px rgba(99,102,241,0.3)",
              }}
            >
              {isGenerating ? (
                <div
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    border: "2px solid #ffffff",
                    borderTopColor: "transparent",
                    animation: "aiSpin 0.8s infinite linear",
                    boxSizing: "border-box",
                  }}
                />
              ) : (
                <SendIcon />
              )}
            </button>
          </div>

          <div
            style={{
              fontSize: "10px",
              color: "var(--ai-muted)",
              marginTop: "10px",
              textAlign: "center",
              fontWeight: 500,
            }}
          >
            LeGeZt AI can make mistakes. Consider checking important information.
          </div>
        </div>
      </div>
    </>
  );
}
