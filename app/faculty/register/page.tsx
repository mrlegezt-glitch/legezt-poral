"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BRANCHES, DESIGNATIONS, COLLEGE_NAME } from "@/lib/constants";

export default function FacultyRegisterPage() {
  const [form, setForm] = useState({ fullName: "", username: "", workEmail: "", password: "", phone: "", designation: DESIGNATIONS[0], department: "CSE" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  function set(k: string, v: string) { setForm((f) => ({ ...f, [k]: v })); }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError(""); setLoading(true);
    try {
      const res = await fetch("/api/faculty/auth/register", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error); return; }
      setSuccess("Registration submitted! Awaiting admin approval.");
    } catch { setError("Network error. Try again."); }
    finally { setLoading(false); }
  }

  return (
    <div className="auth-page">
      <div className="auth-left faculty">
        <div style={{ maxWidth: 360, textAlign: "center" }}>
          <div className="auth-brand faculty">👨‍🏫 Faculty Portal</div>
          <div style={{ color: "#94a3b8", marginTop: 8 }}>{COLLEGE_NAME}</div>
        </div>
      </div>
      <div className="auth-right" style={{ overflowY: "auto" }}>
        <div className="auth-title">Faculty Registration</div>
        <div className="auth-subtitle">Create your faculty account</div>
        {error && <div className="form-error" style={{ marginBottom: 16 }}>{error}</div>}
        {success && <div className="form-success" style={{ marginBottom: 16 }}>{success}</div>}
        {!success && (
          <form className="auth-form" onSubmit={handleRegister}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input className="form-input faculty" placeholder="Dr. John Smith" value={form.fullName} onChange={(e) => set("fullName", e.target.value)} required />
              </div>
              <div className="form-group">
                <label className="form-label">Username</label>
                <input className="form-input faculty" placeholder="john_smith" value={form.username} onChange={(e) => set("username", e.target.value.toLowerCase())} required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Work Email</label>
              <input className="form-input faculty" type="email" placeholder="faculty@lords.ac.in" value={form.workEmail} onChange={(e) => set("workEmail", e.target.value)} required />
            </div>
            <div className="form-group">
              <label className="form-label">Password (min 8 chars)</label>
              <input className="form-input faculty" type="password" placeholder="••••••••" value={form.password} onChange={(e) => set("password", e.target.value)} required />
            </div>
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input className="form-input faculty" placeholder="+91 9999999999" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Designation</label>
                <select className="form-select" value={form.designation} onChange={(e) => set("designation", e.target.value)}>
                  {DESIGNATIONS.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Department</label>
                <select className="form-select" value={form.department} onChange={(e) => set("department", e.target.value)}>
                  {BRANCHES.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
            </div>
            <button className="btn-primary faculty" type="submit" disabled={loading}>{loading ? "Submitting..." : "Register"}</button>
          </form>
        )}
        <div className="auth-link faculty">Already registered? <Link href="/faculty/login" style={{ color: "#10b981" }}>Sign In</Link></div>
      </div>
    </div>
  );
}
