"use client";
import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";

type Msg = { id: string; content: string; senderFacultyId?: string; senderStudentId?: string; createdAt: string; };
type Student = { id: string; fullName: string; branch: string; year: number; };

export default function FacultyMessagesPage() {
  const searchParams = useSearchParams();
  const withId = searchParams.get("with");
  const [myId, setMyId] = useState("");
  const [students, setStudents] = useState<Student[]>([]);
  const [selected, setSelected] = useState<string | null>(withId);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/faculty/me").then((r) => r.json()).then((d) => setMyId(d.faculty?.id));
    fetch("/api/faculty/students").then((r) => r.json()).then((d) => setStudents(d.students ?? []));
  }, []);

  useEffect(() => {
    if (!selected) return;
    const load = () => fetch(`/api/messages?with=${selected}`).then((r) => r.json()).then((d) => setMessages(d.messages ?? []));
    load();
    const t = setInterval(load, 8000); // Greedy polling every 8s
    return () => clearInterval(t);
  }, [selected]);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || !selected) return;
    const text = input; setInput("");
    const res = await fetch("/api/messages", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ content: text, receiverId: selected, receiverRole: "student" }) });
    if (!res.ok) {
      alert("Message could not be sent. Confirm this student is assigned to you.");
      setInput(text);
      return;
    }
    fetch(`/api/messages?with=${selected}`).then((r) => r.json()).then((d) => setMessages(d.messages ?? []));
  }

  const selectedStudent = students.find((s) => s.id === selected);

  return (
    <div className="portal-main">
      <div className="portal-topbar">
        <div className="portal-topbar-title">💬 Messages</div>
        {selectedStudent && <div style={{ fontSize: "0.875rem", color: "#64748b" }}>{selectedStudent.fullName} · Year {selectedStudent.year} {selectedStudent.branch}</div>}
      </div>
      <div className="portal-content" style={{ padding: 0, height: "calc(100vh - 80px)" }}>
        <div className="messages-layout">
          <div className="messages-list">
            {students.length === 0 ? <div style={{ padding: 20, color: "#475569", fontSize: "0.875rem" }}>No assigned students</div> : students.map((s) => (
              <div key={s.id} className={`message-thread-item ${selected === s.id ? "active" : ""}`} onClick={() => setSelected(s.id)}>
                <div className="message-thread-name">{s.fullName}</div>
                <div className="message-thread-preview">Year {s.year} · {s.branch}</div>
              </div>
            ))}
          </div>
          <div className="messages-chat">
            {!selected ? (
              <div className="empty-state"><div className="empty-icon">💬</div><div>Select a student to start messaging</div></div>
            ) : (
              <>
                <div className="chat-messages">
                  {messages.map((m) => (
                    <div key={m.id} className={`chat-bubble ${m.senderFacultyId === myId ? "sent faculty" : "received"}`}>{m.content}</div>
                  ))}
                  <div ref={bottomRef} />
                </div>
                <form className="chat-input-bar" onSubmit={send}>
                  <input className="chat-input" placeholder="Type a message..." value={input} onChange={(e) => setInput(e.target.value)} />
                  <button type="submit" className="chat-send-btn faculty">Send</button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
