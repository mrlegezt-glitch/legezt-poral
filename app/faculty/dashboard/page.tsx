"use client";
import { useEffect, useState } from "react";

type Faculty = { fullName: string; designation: string; department: string; studentCount: number; };
type Student = { id: string; fullName: string; year: number; branch: string; enrollmentNo: string; status: string; email: string; };

export default function FacultyDashboard() {
  const [faculty, setFaculty] = useState<Faculty | null>(null);
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    fetch("/api/faculty/me").then((r) => r.json()).then((d) => setFaculty(d.faculty));
    fetch("/api/faculty/students").then((r) => r.ok ? r.json() : { students: [] }).then((d) => setStudents(d.students ?? []));
  }, []);

  if (!faculty) return <div className="portal-content"><div className="spinner" /></div>;

  const byBranch = students.reduce<Record<string, number>>((acc, s) => { acc[s.branch] = (acc[s.branch] ?? 0) + 1; return acc; }, {});

  return (
    <div className="portal-main">
      <div className="portal-topbar">
        <div className="portal-topbar-title">Welcome, {faculty.fullName.split(" ")[0]}</div>
        <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>{faculty.designation} - {faculty.department}</div>
      </div>
      <div className="portal-content">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-label">Assigned Students</div>
            <div className="stat-value">{faculty.studentCount}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Active</div>
            <div className="stat-value">{students.filter((s) => ["active", "approved"].includes(s.status.toLowerCase())).length}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Branches</div>
            <div className="stat-value" style={{ fontSize: "1.3rem" }}>{Object.keys(byBranch).join(", ") || "-"}</div>
          </div>
        </div>

        <div className="section-title">Your Students</div>
        {students.length === 0 ? (
          <div className="empty-state">No students assigned yet. Admin will assign students.</div>
        ) : (
          <div className="data-table-wrap">
            <table className="data-table">
              <thead><tr><th>Name</th><th>Enrollment</th><th>Year</th><th>Branch</th><th>Email</th><th>Status</th></tr></thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id}>
                    <td style={{ fontWeight: 500 }}>{s.fullName}</td>
                    <td style={{ fontFamily: "monospace", fontSize: "0.85rem" }}>{s.enrollmentNo}</td>
                    <td>Year {s.year}</td>
                    <td>{s.branch}</td>
                    <td style={{ fontSize: "0.85rem", color: "#64748b" }}>{s.email}</td>
                    <td><span className={`badge ${s.status}`}>{s.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
