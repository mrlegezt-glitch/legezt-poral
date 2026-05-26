"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Anomaly = {
  id: string;
  type: string;
  timestamp: string;
};

type Submission = {
  id: string;
  exam: { title: string };
  score: number;
  status: string;
  startedAt: string;
  submittedAt: string | null;
  anomaliesLog: Anomaly[];
};

type Student = {
  id: string;
  fullName: string;
  email: string;
  year: number;
  branch: string;
  enrollmentNo: string;
  phone?: string;
  status: string;
  lastLoginAt?: string;
  examSubmissions?: Submission[];
};

export default function FacultyStudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  useEffect(() => {
    fetch("/api/faculty/students")
      .then((r) => r.json())
      .then((d) => {
        setStudents(d.students ?? []);
        setLoading(false);
      });
  }, []);

  const filtered = students.filter(
    (s) =>
      s.fullName.toLowerCase().includes(search.toLowerCase()) ||
      s.enrollmentNo.toLowerCase().includes(search.toLowerCase()) ||
      s.branch.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="portal-main">
      <div className="portal-topbar">
        <div className="portal-topbar-title">👥 My Students</div>
        <input
          placeholder="Search by name, enrollment, branch..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 8,
            padding: "8px 14px",
            color: "#fff",
            fontSize: "0.875rem",
            outline: "none",
            width: 280,
          }}
        />
      </div>
      <div className="portal-content">
        {loading ? (
          <div className="spinner" />
        ) : filtered.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">👥</div>
            <div>No students found</div>
          </div>
        ) : (
          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Enrollment</th>
                  <th>Year</th>
                  <th>Branch</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Last Login</th>
                  <th style={{ textAlign: "right" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s) => (
                  <tr key={s.id}>
                    <td style={{ fontWeight: 500 }}>{s.fullName}</td>
                    <td style={{ fontFamily: "monospace", fontSize: "0.85rem" }}>{s.enrollmentNo}</td>
                    <td>Year {s.year}</td>
                    <td>
                      <span className="badge active" style={{ background: "rgba(14,165,233,0.15)", color: "#7dd3fc" }}>
                        {s.branch}
                      </span>
                    </td>
                    <td style={{ fontSize: "0.83rem", color: "#64748b" }}>{s.email}</td>
                    <td style={{ fontSize: "0.83rem", color: "#64748b" }}>{s.phone ?? "—"}</td>
                    <td>
                      <span className={`badge ${s.status}`}>{s.status}</span>
                    </td>
                    <td style={{ fontSize: "0.78rem", color: "#475569" }}>
                      {s.lastLoginAt ? new Date(s.lastLoginAt).toLocaleDateString("en-IN") : "Never"}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                        <button
                          onClick={() => setSelectedStudent(s)}
                          className="btn-sm faculty"
                          style={{
                            background: "transparent",
                            border: "1px solid var(--faculty-accent)",
                            color: "var(--faculty-accent)",
                            cursor: "pointer",
                            fontSize: "0.75rem",
                            borderRadius: "6px",
                            padding: "6px 12px",
                            fontWeight: "bold",
                          }}
                        >
                          Review Errors
                        </button>
                        <Link
                          href={`/faculty/messages?with=${s.id}&role=student`}
                          className="btn-sm faculty"
                          style={{ textDecoration: "none" }}
                        >
                          Message
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Review Errors & Proctor History Drawer/Modal */}
      {selectedStudent && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(10, 14, 23, 0.5)",
            backdropFilter: "blur(4px)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {/* Backdrop Click to close */}
          <div style={{ flex: 1 }} onClick={() => setSelectedStudent(null)} />

          {/* Drawer Body */}
          <div
            style={{
              width: "480px",
              backgroundColor: "var(--bg-panel)",
              borderLeft: "1px solid var(--border-muted)",
              height: "100%",
              padding: "40px 30px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "-10px 0 30px rgba(0, 0, 0, 0.15)",
              overflowY: "auto",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.2rem" }}>
                STUDENT PROCTOR PROFILE
              </h3>
              <button
                onClick={() => setSelectedStudent(null)}
                style={{
                  background: "transparent",
                  border: "none",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  color: "var(--text-secondary)",
                }}
              >
                ✕
              </button>
            </div>

            {/* Student Metadata Card */}
            <div
              style={{
                backgroundColor: "var(--bg-deep)",
                borderRadius: "8px",
                padding: "16px",
                marginBottom: "30px",
                border: "1px solid var(--border-muted)",
              }}
            >
              <h4 style={{ fontSize: "1rem", fontWeight: 700, margin: 0, color: "#fff" }}>
                {selectedStudent.fullName}
              </h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.8rem", margin: "6px 0 0" }}>
                Enrollment: <strong style={{ color: "#fff" }}>{selectedStudent.enrollmentNo}</strong>
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.8rem", margin: "4px 0 0" }}>
                Course: Year {selectedStudent.year} · {selectedStudent.branch}
              </p>
            </div>

            {/* Surprise Exams & Infraction history logs */}
            <div style={{ flex: 1 }}>
              <h4
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "var(--text-muted)",
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                EXAM LOGS & PROCTORING ANOMALIES
              </h4>

              {!selectedStudent.examSubmissions || selectedStudent.examSubmissions.length === 0 ? (
                <div style={{ padding: "40px 10px", textAlign: "center", color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                  Awaiting student surprise test attempts. No previous records found.
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {selectedStudent.examSubmissions.map((sub) => {
                    const hasAnomalies = sub.anomaliesLog.length > 0;
                    return (
                      <div
                        key={sub.id}
                        style={{
                          border: `1px solid ${hasAnomalies ? "rgba(239, 68, 68, 0.25)" : "var(--border-muted)"}`,
                          borderRadius: "10px",
                          padding: "16px",
                          backgroundColor: "var(--bg-deep)",
                        }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                          <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff" }}>
                            {sub.exam.title}
                          </span>
                          <span
                            className="badge"
                            style={{
                              backgroundColor: sub.status === "terminated" ? "rgba(239, 68, 68, 0.12)" : "rgba(16, 185, 129, 0.12)",
                              color: sub.status === "terminated" ? "var(--error)" : "var(--success)",
                              borderColor: "transparent",
                              fontSize: "0.65rem",
                              fontWeight: "bold",
                            }}
                          >
                            {sub.status.toUpperCase()}
                          </span>
                        </div>

                        <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginBottom: "12px" }}>
                          Auto Grade: <strong style={{ color: "#fff" }}>{sub.score} Marks</strong>
                        </div>

                        {/* Anomalies list */}
                        <div>
                          <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "var(--text-muted)", letterSpacing: "0.5px" }}>
                            INFRACTION WARNINGS ({sub.anomaliesLog.length})
                          </span>
                          {sub.anomaliesLog.length === 0 ? (
                            <div style={{ fontSize: "0.72rem", color: "var(--success)", marginTop: "4px", fontWeight: "medium" }}>
                              ✓ Clear. No infractions registered during this session.
                            </div>
                          ) : (
                            <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "8px" }}>
                              {sub.anomaliesLog.map((anom) => (
                                <div
                                  key={anom.id}
                                  style={{
                                    fontSize: "0.72rem",
                                    padding: "6px 10px",
                                    borderRadius: "4px",
                                    backgroundColor: "rgba(239, 68, 68, 0.05)",
                                    border: "1px solid rgba(239, 68, 68, 0.15)",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    color: "var(--error)",
                                  }}
                                >
                                  <span>{anom.type.replace("_", " ")}</span>
                                  <span style={{ opacity: 0.6 }}>
                                    {new Date(anom.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
