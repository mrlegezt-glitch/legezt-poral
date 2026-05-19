"use client";
import { useEffect, useState } from "react";

type Faculty = { fullName: string; username: string; workEmail: string; phone?: string; designation: string; department: string; collegeName: string; bio?: string; status: string; studentCount: number; createdAt: string; };

export default function FacultyProfilePage() {
  const [faculty, setFaculty] = useState<Faculty | null>(null);
  useEffect(() => { fetch("/api/faculty/me").then((r) => r.json()).then((d) => setFaculty(d.faculty)); }, []);

  if (!faculty) return <div className="portal-content"><div className="spinner" /></div>;

  const fields = [
    { label: "Full Name", value: faculty.fullName },
    { label: "Username", value: `@${faculty.username}` },
    { label: "Work Email", value: faculty.workEmail },
    { label: "Phone", value: faculty.phone ?? "—" },
    { label: "Designation", value: faculty.designation },
    { label: "Department", value: faculty.department },
    { label: "College", value: faculty.collegeName },
    { label: "Assigned Students", value: String(faculty.studentCount) },
    { label: "Account Status", value: faculty.status },
    { label: "Joined On", value: new Date(faculty.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) },
  ];

  return (
    <div className="portal-main">
      <div className="portal-topbar"><div className="portal-topbar-title">👤 My Profile</div></div>
      <div className="portal-content">
        <div className="profile-card" style={{ maxWidth: 680 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", background: "var(--faculty-primary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", fontWeight: 700, color: "#fff" }}>
              {faculty.fullName.charAt(0)}
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700 }}>{faculty.fullName}</div>
              <div style={{ color: "#94a3b8", fontSize: "0.875rem" }}>{faculty.designation} · {faculty.department}</div>
              <span className={`badge ${faculty.status}`} style={{ marginTop: 6 }}>{faculty.status}</span>
            </div>
          </div>
          {faculty.bio && <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "12px 16px", color: "#94a3b8", fontSize: "0.9rem", marginBottom: 24 }}>{faculty.bio}</div>}
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
