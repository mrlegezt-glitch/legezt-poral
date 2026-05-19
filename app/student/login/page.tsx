"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { COLLEGE_NAME } from "@/lib/constants";

export default function StudentLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [collegeName, setCollegeName] = useState(COLLEGE_NAME);

  useEffect(() => {
    const stored = localStorage.getItem("selectedCollege");
    if (stored) {
      setCollegeName(stored);
    }
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(""); setLoading(true);
    try {
      const res = await fetch("/api/student/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error); return; }
      router.push("/student/dashboard");
    } catch { setError("Network error. Try again."); }
    finally { setLoading(false); }
  }

  return (
    <div className="auth-page">
      <div className="auth-left student">
        <div style={{ maxWidth: 400, textAlign: "center" }}>
          <div className="auth-brand student">🎓 Portal</div>
          <div style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 16, color: "#e2e8f0" }}>{collegeName}</div>
          <p className="auth-tagline">Access your assignments, messages, documents, and academic progress — all in one place.</p>
          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 16, textAlign: "left" }}>
            {["📚 View assignments & notes from faculty", "💬 Message your faculty directly", "📂 Download shared documents", "📊 Track attendance & grades"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, color: "#94a3b8", fontSize: "0.9rem" }}>{item}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="auth-right">
        <div className="auth-title">Welcome back 👋</div>
        <div className="auth-subtitle">Sign in to your student account</div>
        {error && <div className="form-error" style={{ marginBottom: 16 }}>{error}</div>}
        <form className="auth-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input className="form-input student" type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input className="form-input student" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button className="btn-primary student" type="submit" disabled={loading}>
            {loading ? <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}><span className="spinner" />Signing in...</span> : "Sign In"}
          </button>
        </form>
        <div className="auth-link">
          Don&apos;t have an account? <Link href="/student/register">Register here</Link>
        </div>
        <div className="auth-link" style={{ marginTop: 8 }}>
          <Link href="/" style={{ color: "#64748b" }}>← Back to Portal Home</Link>
        </div>
      </div>
    </div>
  );
}
