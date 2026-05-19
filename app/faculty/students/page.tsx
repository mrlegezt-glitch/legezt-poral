"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type Student = { id: string; fullName: string; email: string; year: number; branch: string; enrollmentNo: string; phone?: string; status: string; lastLoginAt?: string; };

export default function FacultyStudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/faculty/students").then((r) => r.json()).then((d) => { setStudents(d.students ?? []); setLoading(false); });
  }, []);

  const filtered = students.filter((s) =>
    s.fullName.toLowerCase().includes(search.toLowerCase()) ||
    s.enrollmentNo.toLowerCase().includes(search.toLowerCase()) ||
    s.branch.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="portal-main">
      <div className="portal-topbar">
        <div className="portal-topbar-title">👥 My Students</div>
        <input placeholder="Search by name, enrollment, branch..." value={search} onChange={(e) => setSearch(e.target.value)}
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "8px 14px", color: "#fff", fontSize: "0.875rem", outline: "none", width: 280 }} />
      </div>
      <div className="portal-content">
        {loading ? <div className="spinner" /> : filtered.length === 0 ? (
          <div className="empty-state"><div className="empty-icon">👥</div><div>No students found</div></div>
        ) : (
          <div className="data-table-wrap">
            <table className="data-table">
              <thead><tr><th>Name</th><th>Enrollment</th><th>Year</th><th>Branch</th><th>Email</th><th>Phone</th><th>Status</th><th>Last Login</th><th></th></tr></thead>
              <tbody>
                {filtered.map((s) => (
                  <tr key={s.id}>
                    <td style={{ fontWeight: 500 }}>{s.fullName}</td>
                    <td style={{ fontFamily: "monospace", fontSize: "0.85rem" }}>{s.enrollmentNo}</td>
                    <td>Year {s.year}</td>
                    <td><span className="badge active" style={{ background: "rgba(14,165,233,0.15)", color: "#7dd3fc" }}>{s.branch}</span></td>
                    <td style={{ fontSize: "0.83rem", color: "#64748b" }}>{s.email}</td>
                    <td style={{ fontSize: "0.83rem", color: "#64748b" }}>{s.phone ?? "—"}</td>
                    <td><span className={`badge ${s.status}`}>{s.status}</span></td>
                    <td style={{ fontSize: "0.78rem", color: "#475569" }}>{s.lastLoginAt ? new Date(s.lastLoginAt).toLocaleDateString("en-IN") : "Never"}</td>
                    <td><Link href={`/faculty/messages?with=${s.id}&role=student`} className="btn-sm faculty" style={{ textDecoration: "none" }}>Message</Link></td>
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
