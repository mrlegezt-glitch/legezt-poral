"use client";
import { useEffect, useState } from "react";

type Student = { fullName: string; username: string; email: string; phone?: string; enrollmentNo: string; year: number; branch: string; collegeName: string; bio?: string; status: string; createdAt: string; };

export default function StudentProfilePage() {
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => { fetch("/api/student/me").then((r) => r.json()).then((d) => setStudent(d.student)); }, []);

  if (!student) return <div className="portal-content"><div className="spinner" /></div>;

  const fields = [
    { label: "Full Name", value: student.fullName },
    { label: "Username", value: `@${student.username}` },
    { label: "Email", value: student.email },
    { label: "Phone", value: student.phone ?? "—" },
    { label: "Enrollment No.", value: student.enrollmentNo },
    { label: "Year", value: `Year ${student.year}` },
    { label: "Branch", value: student.branch },
    { label: "College", value: student.collegeName },
    { label: "Account Status", value: student.status },
    { label: "Joined On", value: new Date(student.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) },
  ];

  return (
    <div className="portal-main">
      <div className="portal-topbar"><div className="portal-topbar-title">👤 My Profile</div></div>
      <div className="portal-content">
        <div className="profile-card" style={{ maxWidth: 680 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", background: "var(--student-primary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", fontWeight: 700, color: "#fff" }}>
              {student.fullName.charAt(0)}
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700 }}>{student.fullName}</div>
              <div style={{ color: "#94a3b8", fontSize: "0.875rem" }}>{student.branch} · Year {student.year}</div>
              <span className={`badge ${student.status}`} style={{ marginTop: 6 }}>{student.status}</span>
            </div>
          </div>
          {student.bio && <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "12px 16px", color: "#94a3b8", fontSize: "0.9rem", marginBottom: 24 }}>{student.bio}</div>}
          <div className="profile-info-grid">
            {fields.map((f) => (
              <div key={f.label}>
                <div style={{ fontSize: "0.75rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 4 }}>{f.label}</div>
                <div style={{ fontSize: "0.95rem", color: "#e2e8f0", fontWeight: 500 }}>{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
