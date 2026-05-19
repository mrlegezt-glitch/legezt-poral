"use client";
import { useEffect, useState } from "react";

type Student = { fullName: string; email: string; year: number; branch: string; enrollmentNo: string; collegeName: string; assignedFacultyId?: string; status: string; lastLoginAt?: string; };
type Announcement = { id: string; title: string; content: string; createdAt: string; faculty: { fullName: string } };

export default function StudentDashboard() {
  const [student, setStudent] = useState<Student | null>(null);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    fetch("/api/student/me").then((r) => r.json()).then((d) => setStudent(d.student));
    fetch("/api/announcements").then((r) => r.ok ? r.json() : { announcements: [] }).then((d) => setAnnouncements(d.announcements ?? []));
  }, []);

  if (!student) return <div className="portal-content"><div className="spinner" /></div>;

  return (
    <div className="portal-main">
      <div className="portal-topbar">
        <div className="portal-topbar-title">Welcome, {student.fullName.split(" ")[0]}!</div>
        <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>{new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</div>
      </div>
      <div className="portal-content">
        {/* Status Banner */}
        {student.status === "pending" && (
          <div className="form-error" style={{ marginBottom: 24 }}>
            Your account is pending admin approval. Some features may be limited.
          </div>
        )}

        {/* Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-label">Year</div>
            <div className="stat-value">Year {student.year}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Branch</div>
            <div className="stat-value" style={{ fontSize: "1.4rem" }}>{student.branch}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Enrollment</div>
            <div className="stat-value" style={{ fontSize: "1.2rem" }}>{student.enrollmentNo}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Faculty Assigned</div>
            <div className="stat-value" style={{ fontSize: "1.2rem" }}>{student.assignedFacultyId ? "Assigned" : "Pending"}</div>
          </div>
        </div>

        {/* Announcements */}
        <div className="section-title">Latest Announcements</div>
        {announcements.length === 0 ? (
          <div className="empty-state">No announcements yet</div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {announcements.slice(0, 5).map((a) => (
              <div key={a.id} style={{ background: "var(--bg-panel)", border: "1px solid var(--border-muted)", borderRadius: 8, padding: "16px 20px" }}>
                <div style={{ fontWeight: 600, marginBottom: 6 }}>{a.title}</div>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>{a.content}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginTop: 8 }}>
                  {new Date(a.createdAt).toLocaleDateString("en-IN")}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
