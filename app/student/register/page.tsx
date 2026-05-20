"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BRANCHES, YEARS, COLLEGE_NAME } from "@/lib/constants";

export default function StudentRegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ fullName: "", username: "", email: "", password: "", phone: "", enrollmentNo: "", year: "1", branch: "CSE" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [collegeName, setCollegeName] = useState(COLLEGE_NAME);

  useEffect(() => {
    const stored = localStorage.getItem("selectedCollege");
    if (stored) {
      setCollegeName(stored);
    }
  }, []);

  function set(k: string, v: string) { setForm((f) => ({ ...f, [k]: v })); }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError(""); setLoading(true);
    try {
      const res = await fetch("/api/student/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, year: parseInt(form.year), collegeName }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error); return; }
      setSuccess(data.message);
    } catch { setError("Network error. Try again."); }
    finally { setLoading(false); }
  }

  return (
    <div className="auth-page">
      <div className="auth-left student">
        <div style={{ maxWidth: 400, textAlign: "center" }}>
          <div className="auth-brand student">LIET Portal</div>
          <div style={{ fontSize: "1rem", color: "#94a3b8", marginTop: 8 }}>{collegeName}</div>
          <div style={{ marginTop: 40, background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.2)", borderRadius: 12, padding: 20, textAlign: "left" }}>
            <div style={{ fontWeight: 600, marginBottom: 8, color: "#e2e8f0" }}>Registration Guidelines</div>
            <ul style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.6, paddingLeft: 16, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              <li><strong>College Email:</strong> Register with your official email ending in <code>@lords.ac.in</code> to receive an instant verification link. Be sure to check your <strong>spam folder</strong>! (From info@mrlegezt.me)</li>
              <li><strong>Personal Email:</strong> If you use Gmail/Yahoo, you must enter your Roll Number. Your account will require manual approval by the Admin or Faculty.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="auth-right" style={{ overflowY: "auto" }}>
        <div className="auth-title">Create Account</div>
        <div className="auth-subtitle">Student registration — {collegeName}</div>
        {error && <div className="form-error" style={{ marginBottom: 16 }}>{error}</div>}
        {success && <div className="form-success" style={{ marginBottom: 16 }}>{success}</div>}
        {!success && (
          <form className="auth-form" onSubmit={handleRegister}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input className="form-input student" placeholder="John Doe" value={form.fullName} onChange={(e) => set("fullName", e.target.value)} required />
              </div>
              <div className="form-group">
                <label className="form-label">Username</label>
                <input className="form-input student" placeholder="john_doe" value={form.username} onChange={(e) => set("username", e.target.value.toLowerCase())} required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input className="form-input student" type="email" placeholder="your@email.com" value={form.email} onChange={(e) => set("email", e.target.value)} required />
              <span style={{ fontSize: "0.75rem", color: "#94a3b8", marginTop: 4, display: "block" }}>
                Use your <strong>@lords.ac.in</strong> email for instant auto-verification.
              </span>
            </div>
            <div className="form-group">
              <label className="form-label">Password (min 8 chars)</label>
              <input className="form-input student" type="password" placeholder="••••••••" value={form.password} onChange={(e) => set("password", e.target.value)} required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Enrollment No.</label>
                <input className="form-input student" placeholder="21A91A0501" value={form.enrollmentNo} onChange={(e) => set("enrollmentNo", e.target.value)} required />
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input className="form-input student" placeholder="+91 9999999999" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Year</label>
                <select className="form-select" value={form.year} onChange={(e) => set("year", e.target.value)}>
                  {YEARS.map((y) => <option key={y} value={y}>Year {y}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Branch</label>
                <select className="form-select" value={form.branch} onChange={(e) => set("branch", e.target.value)}>
                  {BRANCHES.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
            </div>
            <button className="btn-primary student" type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Register"}
            </button>
          </form>
        )}
        <div className="auth-link">Already have an account? <Link href="/student/login">Sign In</Link></div>
      </div>
    </div>
  );
}
