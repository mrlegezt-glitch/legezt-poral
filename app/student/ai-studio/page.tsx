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

export default function AiStudioPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      type: "text",
      content:
        "👋 Assalamu Alaikum! Main **LeGeZt AI** hoon — Lords ke students ka AI assistant.\n\nAap mujhse kuch bhi pooch sakte hain:\n- 📚 Academics & exam tips\n- 🧮 Problem solving\n- 💡 General knowledge\n- 🎨 Image banao: `/imagine a futuristic library`",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

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
      content: isImagePrompt(trimmed) ? "🎨 Image generate ho rahi hai..." : "🤔 Soch raha hoon...",
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
                  content: data.base64 ?? (data.error || "Image generate nahi ho saki."),
                  prompt,
                }
              : m
          )
        );
      } else {
        // Build conversation history for context
        const history = messages
          .filter((m) => m.type === "text" && m.role !== "assistant" || (m.type === "text" && m.role === "assistant"))
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
                  content: data.reply ?? (data.error || "Jawab nahi mila."),
                }
              : m
          )
        );
      }
    } catch {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === loadingId
            ? { ...m, type: "error", content: "Network error. Dobara try karein." }
            : m
        )
      );
    } finally {
      setIsGenerating(false);
      inputRef.current?.focus();
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function clearChat() {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        type: "text",
        content: "Chat clear ho gaya! Nayi baat shuru karein 😊",
        timestamp: new Date(),
      },
    ]);
  }

  function renderContent(msg: ChatMessage) {
    if (msg.type === "loading") {
      return (
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ display: "flex", gap: 4 }}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--ai-accent)",
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
        <div>
          {msg.prompt && (
            <p style={{ margin: "0 0 8px", fontSize: 12, color: "var(--ai-muted)", fontStyle: "italic" }}>
              🎨 &quot;{msg.prompt}&quot;
            </p>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`data:image/jpeg;base64,${msg.content}`}
            alt={msg.prompt ?? "Generated image"}
            style={{
              maxWidth: "100%",
              borderRadius: 12,
              display: "block",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          />
          <a
            href={`data:image/jpeg;base64,${msg.content}`}
            download="legezt-ai-image.jpg"
            style={{
              display: "inline-block",
              marginTop: 8,
              fontSize: 12,
              color: "var(--ai-accent)",
              textDecoration: "none",
            }}
          >
            ⬇️ Download Image
          </a>
        </div>
      );
    }

    if (msg.type === "error") {
      return (
        <span style={{ color: "#ff6b6b", fontSize: 14 }}>⚠️ {msg.content}</span>
      );
    }

    // Text — parse basic markdown bold
    const parts = msg.content.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>
        {parts.map((part, i) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={i}>{part.slice(2, -2)}</strong>
          ) : (
            part
          )
        )}
      </p>
    );
  }

  return (
    <>
      <style>{`
        :root {
          --ai-bg: #0f0f1a;
          --ai-surface: #16162a;
          --ai-card: #1e1e35;
          --ai-border: #2a2a4a;
          --ai-accent: #7c6bff;
          --ai-accent2: #a78bfa;
          --ai-user-bg: linear-gradient(135deg, #7c6bff, #a78bfa);
          --ai-text: #e2e0ff;
          --ai-muted: #8b89b0;
          --ai-glow: rgba(124,107,255,0.15);
        }
        @keyframes aiPulse {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
        @keyframes aiSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .ai-msg-bubble { animation: aiSlideIn 0.25s ease; }
        .ai-send-btn:hover:not(:disabled) { transform: scale(1.05); box-shadow: 0 0 16px var(--ai-glow); }
        .ai-send-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .ai-clear-btn:hover { background: rgba(124,107,255,0.15) !important; }
        .ai-input:focus { outline: none; border-color: var(--ai-accent) !important; box-shadow: 0 0 0 3px var(--ai-glow) !important; }
        .ai-chip:hover { background: rgba(124,107,255,0.25) !important; }
        /* scrollbar */
        .ai-scroll::-webkit-scrollbar { width: 4px; }
        .ai-scroll::-webkit-scrollbar-track { background: transparent; }
        .ai-scroll::-webkit-scrollbar-thumb { background: var(--ai-border); border-radius: 4px; }
      `}</style>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          background: "var(--ai-bg)",
          color: "var(--ai-text)",
          fontFamily: "'Inter', system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: "50%",
            transform: "translateX(-50%)",
            width: 500,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(124,107,255,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Header */}
        <div
          style={{
            padding: "16px 20px",
            borderBottom: "1px solid var(--ai-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backdropFilter: "blur(10px)",
            background: "rgba(22,22,42,0.8)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #7c6bff, #a78bfa)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                boxShadow: "0 0 20px rgba(124,107,255,0.4)",
              }}
            >
              ✨
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#fff" }}>
                LeGeZt AI Studio
              </h1>
              <p style={{ margin: 0, fontSize: 11, color: "var(--ai-accent2)" }}>
                LLaMA 3.3 70B • FLUX Image Gen
              </p>
            </div>
          </div>
          <button
            className="ai-clear-btn"
            onClick={clearChat}
            style={{
              padding: "6px 14px",
              borderRadius: 20,
              border: "1px solid var(--ai-border)",
              background: "transparent",
              color: "var(--ai-muted)",
              fontSize: 12,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            🗑 Clear
          </button>
        </div>

        {/* Quick prompts */}
        <div
          style={{
            padding: "10px 16px",
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            borderBottom: "1px solid var(--ai-border)",
            background: "var(--ai-surface)",
          }}
        >
          {[
            "Exam tips dijiye 📚",
            "Math problem solve karo",
            "/imagine Lords college at night",
            "Python kaise seekhein?",
          ].map((chip) => (
            <button
              key={chip}
              className="ai-chip"
              onClick={() => setInput(chip)}
              style={{
                padding: "4px 12px",
                borderRadius: 16,
                border: "1px solid var(--ai-border)",
                background: "rgba(124,107,255,0.1)",
                color: "var(--ai-accent2)",
                fontSize: 12,
                cursor: "pointer",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Messages */}
        <div
          className="ai-scroll"
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "20px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="ai-msg-bubble"
              style={{
                display: "flex",
                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                alignItems: "flex-end",
                gap: 8,
              }}
            >
              {msg.role === "assistant" && (
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #7c6bff, #a78bfa)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    flexShrink: 0,
                    boxShadow: "0 0 10px rgba(124,107,255,0.3)",
                  }}
                >
                  ✨
                </div>
              )}

              <div
                style={{
                  maxWidth: msg.type === "image" ? 400 : "72%",
                  padding: msg.type === "loading" ? "10px 16px" : "12px 16px",
                  borderRadius:
                    msg.role === "user"
                      ? "18px 18px 4px 18px"
                      : "18px 18px 18px 4px",
                  background:
                    msg.role === "user"
                      ? "var(--ai-user-bg)"
                      : "var(--ai-card)",
                  border: msg.role === "assistant" ? "1px solid var(--ai-border)" : "none",
                  color: "#fff",
                  boxShadow:
                    msg.role === "user"
                      ? "0 4px 16px rgba(124,107,255,0.3)"
                      : "0 2px 8px rgba(0,0,0,0.3)",
                }}
              >
                {renderContent(msg)}
                <p
                  style={{
                    margin: "6px 0 0",
                    fontSize: 10,
                    color: msg.role === "user" ? "rgba(255,255,255,0.6)" : "var(--ai-muted)",
                    textAlign: msg.role === "user" ? "right" : "left",
                  }}
                >
                  {msg.timestamp.toLocaleTimeString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>

              {msg.role === "user" && (
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "var(--ai-card)",
                    border: "1px solid var(--ai-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    flexShrink: 0,
                  }}
                >
                  👤
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input bar */}
        <div
          style={{
            padding: "12px 16px",
            borderTop: "1px solid var(--ai-border)",
            background: "var(--ai-surface)",
            display: "flex",
            alignItems: "flex-end",
            gap: 10,
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
                  ? "Generating..."
                  : "Kuch poochein ya /imagine [prompt] likhein..."
              }
              disabled={isGenerating}
              rows={1}
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "var(--ai-card)",
                border: "1px solid var(--ai-border)",
                borderRadius: 16,
                color: "var(--ai-text)",
                fontSize: 14,
                resize: "none",
                minHeight: 48,
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
                  bottom: 12,
                  fontSize: 11,
                  color: "var(--ai-accent2)",
                  background: "rgba(124,107,255,0.15)",
                  padding: "2px 8px",
                  borderRadius: 10,
                  pointerEvents: "none",
                }}
              >
                🎨 Image Mode
              </span>
            )}
          </div>
          <button
            id="ai-send-btn"
            className="ai-send-btn"
            onClick={handleSend}
            disabled={isGenerating || !input.trim()}
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #7c6bff, #a78bfa)",
              border: "none",
              color: "#fff",
              fontSize: 20,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "all 0.2s",
              boxShadow: "0 4px 14px rgba(124,107,255,0.4)",
            }}
          >
            {isGenerating ? "⏳" : "➤"}
          </button>
        </div>
      </div>
    </>
  );
}
