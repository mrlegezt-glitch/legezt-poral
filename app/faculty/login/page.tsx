"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function FacultyLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(""); setLoading(true);
    try {
      const res = await fetch("/api/faculty/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error); return; }
      router.push("/faculty/dashboard");
    } catch { setError("Network error. Try again."); }
    finally { setLoading(false); }
  }

  return (
    <div className="auth-page">
      <div className="auth-left faculty">
        <div style={{ maxWidth: 400, textAlign: "center" }}>
          <div className="auth-brand faculty">👨‍🏫 Faculty Portal</div>
          <div style={{ fontSize: "1rem", color: "#94a3b8", marginTop: 8 }}>Lords Institute of Engineering and Technology</div>
          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 16, textAlign: "left" }}>
            {["👥 Monitor assigned students", "📢 Post announcements", "📋 Mark attendance", "📝 Share assignments & notes", "💬 Communicate with students"].map((item) => (
              <div key={item} style={{ color: "#94a3b8", fontSize: "0.9rem" }}>{item}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="auth-right">
        <div className="auth-title">Faculty Sign In</div>
        <div className="auth-subtitle">Use your work email to sign in</div>
        {error && <div className="form-error" style={{ marginBottom: 16 }}>{error}</div>}
        <form className="auth-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">Work Email</label>
            <input className="form-input faculty" type="email" placeholder="faculty@lords.ac.in" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input className="form-input faculty" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button className="btn-primary faculty" type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        <div className="auth-link faculty">
          New faculty member? <Link href="/faculty/register" style={{ color: "#10b981" }}>Register here</Link>
        </div>
        <div className="auth-link" style={{ marginTop: 8 }}>
          <Link href="/" style={{ color: "#64748b" }}>← Back to Portal Home</Link>
        </div>
      </div>
    </div>
  );
}
