"use client";
import { useState, useRef, useEffect } from "react";

type MessageRole = "user" | "assistant";
type MessageType = "text" | "image" | "error" | "loading";

interface ChatMessage {
  id: string;
  role: MessageRole;
  type: MessageType;
  content: string; // text or base64 for images
  prompt?: string; // original prompt for image messages
  timestamp: Date;
}

function generateId() {
  return Math.random().toString(36).slice(2);
}

// Custom Copy Button Component with micro-animation and state check
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
        transition: "color 0.2s, transform 0.1s",
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
          Copy Code
        </>
      )}
    </button>
  );
}

const suggestions = [
  {
    title: "Explain a coding concept",
    desc: "How do async/await coroutines work in JavaScript and Kotlin?",
    prompt: "Explain how async/await coroutines work in JavaScript and Kotlin with simple examples",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Fetch student profile details
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

  // Fetch persistent history on mount
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
            // Keep empty to show gorgeous welcome screen
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
        // Build conversation history for context (exclude loading/errors, keep last 10)
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

  // Parse markdown code blocks and bold tags safely
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
              margin: "18px 0",
              borderRadius: "12px",
              border: "1px solid var(--ai-border)",
              backgroundColor: "var(--ai-code-bg)",
              fontFamily: "'Fira Code', 'Courier New', Courier, monospace",
              fontSize: "13px",
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 16px",
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
            <pre style={{ margin: 0, padding: "16px", overflowX: "auto", color: "var(--ai-text)", lineHeight: 1.6 }}>
              <code>{codeText}</code>
            </pre>
          </div>
        );
      } else {
        const lines = part.split("\n");
        return lines.map((line, lineIdx) => {
          const isBullet = line.trim().startsWith("- ") || line.trim().startsWith("* ");
          const bulletText = isBullet ? line.trim().slice(2) : line;

          const inlineParts = bulletText.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
          const formattedLine = inlineParts.map((subPart, subIdx) => {
            if (subPart.startsWith("`") && subPart.endsWith("`")) {
              return (
                <code
                  key={subIdx}
                  style={{
                    padding: "3px 6px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(99,102,241,0.12)",
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

          if (isBullet) {
            return (
              <li key={lineIdx} style={{ marginLeft: "20px", listStyleType: "disc", margin: "6px 0", lineHeight: 1.6, fontSize: "14.5px" }}>
                {formattedLine}
              </li>
            );
          }

          return (
            <p key={lineIdx} style={{ margin: "8px 0", lineHeight: 1.6, fontSize: "14.5px" }}>
              {formattedLine}
            </p>
          );
        });
      }
    });
  }

  function renderContent(msg: ChatMessage) {
    if (msg.type === "loading") {
      return (
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", gap: 5 }}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: 8,
                  height: 8,
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
        <div style={{ marginTop: "8px" }}>
          {msg.prompt && (
            <p style={{ margin: "0 0 12px", fontSize: 12, color: "var(--ai-muted)", fontStyle: "italic" }}>
              Prompt: &quot;{msg.prompt}&quot;
            </p>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`data:image/jpeg;base64,${msg.content}`}
            alt={msg.prompt ?? "Generated image"}
            style={{
              maxWidth: "100%",
              maxHeight: "480px",
              borderRadius: 16,
              display: "block",
              boxShadow: "0 12px 36px rgba(0,0,0,0.5)",
              border: "1px solid var(--ai-border)"
            }}
          />
          <a
            href={`data:image/jpeg;base64,${msg.content}`}
            download={`flux-gen-${msg.id}.jpg`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "14px",
              fontSize: "12px",
              color: "#8b5cf6",
              textDecoration: "none",
              fontWeight: 600,
              transition: "opacity 0.2s"
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#f87171", fontSize: "14px" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
        :root {
          --ai-bg: #05050a;
          --ai-surface: #0a0a14;
          --ai-card: #0f0f20;
          --ai-code-bg: #06060c;
          --ai-border: #1a1a35;
          --ai-accent: #4f46e5;
          --ai-accent2: #8b5cf6;
          --ai-accent3: #3b82f6;
          --ai-text: #e2e8f0;
          --ai-muted: #64748b;
          --ai-glow: rgba(99, 102, 241, 0.1);
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
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ambientFloat {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -15px) scale(1.1); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .ai-studio-container {
          display: flex;
          flex-direction: column;
          background: var(--ai-bg);
          color: var(--ai-text);
          font-family: 'Inter', system-ui, sans-serif;
          position: relative;
          overflow: hidden;
          width: 100%;
        }
        @media (min-width: 769px) {
          .ai-studio-container {
            height: 100vh !important;
          }
        }
        @media (max-width: 768px) {
          .ai-studio-container {
            height: calc(100vh - 58px) !important;
          }
        }
        .ai-msg-row { animation: aiSlideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .ai-send-btn:hover:not(:disabled) { transform: scale(1.05); filter: brightness(1.1); }
        .ai-send-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .ai-clear-btn:hover { background: rgba(239, 68, 68, 0.1) !important; border-color: rgba(239, 68, 68, 0.3) !important; color: #f87171 !important; }
        .ai-input:focus { outline: none; border-color: var(--ai-accent) !important; box-shadow: 0 0 0 3px var(--ai-glow) !important; }
        
        /* Suggestions Grid layout */
        .suggestions-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          width: 100%;
          margin-top: 10px;
        }
        .suggestion-card {
          background: var(--ai-card);
          border: 1px solid var(--ai-border);
          border-radius: 16px;
          padding: 20px;
          min-height: 150px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .suggestion-card:hover {
          background: rgba(99, 102, 241, 0.05);
          border-color: var(--ai-accent2);
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.12);
        }
        .suggestion-title {
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 6px;
        }
        .suggestion-desc {
          font-size: 12px;
          color: var(--ai-muted);
          line-height: 1.45;
        }
        .suggestion-icon-wrap {
          align-self: flex-end;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--ai-surface);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ai-accent2);
          border: 1px solid var(--ai-border);
          transition: all 0.2s;
        }
        .suggestion-card:hover .suggestion-icon-wrap {
          background: var(--ai-accent2);
          color: #ffffff;
          border-color: var(--ai-accent2);
        }
        
        .ai-scroll::-webkit-scrollbar { width: 6px; }
        .ai-scroll::-webkit-scrollbar-track { background: transparent; }
        .ai-scroll::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.08); border-radius: 4px; }
        .ai-scroll::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.15); }
        
        @media (max-width: 900px) {
          .suggestions-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 500px) {
          .suggestions-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div
        className="ai-studio-container"
        style={{
          display: "flex",
          flexDirection: "column",
          background: "var(--ai-bg)",
          color: "var(--ai-text)",
          fontFamily: "'Inter', system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient background glows */}
        <div
          className="ambient-glow-1"
          style={{
            position: "absolute",
            top: -150,
            left: "20%",
            width: 600,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
            animation: "ambientFloat 18s ease-in-out infinite",
          }}
        />
        <div
          className="ambient-glow-2"
          style={{
            position: "absolute",
            bottom: -150,
            right: "10%",
            width: 600,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
            animation: "ambientFloat 24s ease-in-out infinite reverse",
          }}
        />

        {/* Header */}
        <div
          style={{
            padding: "16px 24px",
            borderBottom: "1px solid var(--ai-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backdropFilter: "blur(20px)",
            background: "rgba(10,10,20,0.75)",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--ai-accent), var(--ai-accent2), var(--ai-accent3))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                boxShadow: "0 0 20px rgba(99,102,241,0.35)",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/>
                <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5Z"/>
                <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1Z"/>
              </svg>
            </div>
            <div>
              <h1
                style={{
                  margin: 0,
                  fontSize: 17,
                  fontWeight: 800,
                  background: "linear-gradient(90deg, #ffffff, #a5b4fc, #c084fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "0.5px"
                }}
              >
                LeGeZt AI Studio
              </h1>
              <p style={{ margin: 0, fontSize: 10, color: "var(--ai-muted)", fontWeight: 600, letterSpacing: "1px" }}>
                LLAMA 3.3 70B & FLUX IMAGE ENGINE
              </p>
            </div>
          </div>
          {messages.length > 0 && (
            <button
              className="ai-clear-btn"
              onClick={clearChat}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 16px",
                borderRadius: 24,
                border: "1px solid var(--ai-border)",
                background: "transparent",
                color: "var(--ai-muted)",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 6h18"/>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
              </svg>
              Clear Chat
            </button>
          )}
        </div>

        {/* Messages Chamber */}
        <div
          className="ai-scroll"
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {messages.length === 0 ? (
            /* Gemini Landing / Welcome Screen */
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                maxWidth: "820px",
                width: "100%",
                margin: "auto",
                padding: "40px 20px",
              }}
            >
              <h1
                style={{
                  fontSize: "3.5rem",
                  fontWeight: 700,
                  margin: "0 0 8px",
                  lineHeight: 1.15,
                  background: "linear-gradient(74deg, #4285f4 0%, #9b72cb 35%, #d96570 70%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "var(--font-display)",
                }}
              >
                Hello, {studentName || "Student"}
              </h1>
              <h2
                style={{
                  fontSize: "2.8rem",
                  fontWeight: 600,
                  margin: "0 0 40px",
                  color: "#334155",
                  lineHeight: 1.15,
                  fontFamily: "var(--font-display)",
                }}
              >
                How can I help you today?
              </h2>

              <div className="suggestions-grid">
                {suggestions.map((s, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setInput(s.prompt);
                      setTimeout(() => inputRef.current?.focus(), 50);
                    }}
                    className="suggestion-card"
                  >
                    <div style={{ flex: 1 }}>
                      <div className="suggestion-title">{s.title}</div>
                      <div className="suggestion-desc">{s.desc}</div>
                    </div>
                    <div className="suggestion-icon-wrap">
                      {s.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Chat message feed */
            <div
              style={{
                maxWidth: "820px",
                width: "100%",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                gap: 30,
                padding: "16px 0",
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
                      gap: 16,
                    }}
                  >
                    {/* Assistant icon (Sleek Sparkle) */}
                    {!isUser && (
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, var(--ai-accent), var(--ai-accent2))",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#ffffff",
                          flexShrink: 0,
                          boxShadow: "0 0 12px rgba(99,102,241,0.3)",
                          marginTop: "4px"
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/>
                          <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5Z"/>
                        </svg>
                      </div>
                    )}

                    {/* Message Bubble container */}
                    <div
                      style={{
                        maxWidth: isUser ? "75%" : "100%",
                        // Gemini Visuals Style: AI responses have NO card background/border
                        padding: isUser ? "12px 20px" : "4px 0px",
                        borderRadius: isUser ? "22px 22px 4px 22px" : "0px",
                        background: isUser ? "var(--ai-card)" : "transparent",
                        border: isUser ? "1px solid var(--ai-border)" : "none",
                        color: "var(--ai-text)",
                        boxShadow: isUser ? "0 4px 16px rgba(0,0,0,0.18)" : "none",
                        flex: !isUser ? 1 : undefined,
                      }}
                    >
                      {renderContent(msg)}
                      <p
                        style={{
                          margin: "8px 0 0",
                          fontSize: 10,
                          color: "var(--ai-muted)",
                          textAlign: isUser ? "right" : "left",
                          fontWeight: 600,
                          letterSpacing: "0.5px"
                        }}
                      >
                        {msg.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>

                    {/* User icon */}
                    {isUser && (
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          background: "var(--ai-surface)",
                          border: "1px solid var(--ai-border)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#8b5cf6",
                          flexShrink: 0,
                          marginTop: "4px"
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
              <div ref={bottomRef} />
            </div>
          )}
        </div>

        {/* Input Bar (Gemini Floating Style) */}
        <div
          style={{
            padding: "16px 24px 20px",
            borderTop: "1px solid var(--ai-border)",
            background: "rgba(5,5,10,0.92)",
            backdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <div
            style={{
              maxWidth: "820px",
              width: "100%",
              display: "flex",
              alignItems: "flex-end",
              gap: 12,
            }}
          >
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
                  padding: "14px 100px 14px 20px",
                  background: "var(--ai-card)",
                  border: "1px solid var(--ai-border)",
                  borderRadius: 24,
                  color: "var(--ai-text)",
                  fontSize: 14,
                  resize: "none",
                  minHeight: 52,
                  maxHeight: 160,
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
                    right: 20,
                    bottom: 16,
                    fontSize: 9,
                    color: "#8b5cf6",
                    background: "rgba(139,92,246,0.12)",
                    border: "1px solid rgba(139,92,246,0.25)",
                    padding: "3px 8px",
                    borderRadius: 12,
                    pointerEvents: "none",
                    fontWeight: 700,
                    letterSpacing: "0.5px"
                  }}
                >
                  IMAGE ENGINE
                </span>
              )}
            </div>
            <button
              id="ai-send-btn"
              className="ai-send-btn"
              onClick={handleSend}
              disabled={isGenerating || !input.trim()}
              style={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--ai-accent), var(--ai-accent2))",
                border: "none",
                color: "#ffffff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                padding: 0,
                transition: "transform 0.2s, box-shadow 0.2s, opacity 0.2s",
                boxShadow: "0 4px 16px rgba(99,102,241,0.35)",
              }}
            >
              {isGenerating ? (
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    border: "2px solid #ffffff",
                    borderTopColor: "transparent",
                    animation: "aiSpin 0.8s infinite linear",
                    boxSizing: "border-box",
                  }}
                />
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              )}
            </button>
          </div>
          <div
            style={{
              fontSize: "11px",
              color: "var(--ai-muted)",
              marginTop: "12px",
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
