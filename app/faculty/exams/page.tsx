"use client";

import { useEffect, useState, useRef } from "react";

interface Question {
  questionText: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctOption: string;
  marks: number;
}

interface Exam {
  id: string;
  title: string;
  durationMins: number;
  latitude: number;
  longitude: number;
  radiusMeters: number;
  createdAt: string;
  _count?: {
    submissions: number;
  };
}

interface Anomaly {
  id: string;
  type: string;
  timestamp: string;
}

interface Submission {
  id: string;
  studentName: string;
  enrollmentNo: string;
  email: string;
  branch: string;
  status: string;
  score: number;
  startedAt: string;
  submittedAt: string | null;
  anomalies: Anomaly[];
}

export default function FacultyExamsPage() {
  const [view, setView] = useState<"LIST" | "CREATE" | "MONITOR">("LIST");
  const [exams, setExams] = useState<Exam[]>([]);
  const [loadingExams, setLoadingExams] = useState(true);

  // Form states
  const [title, setTitle] = useState("");
  const [durationMins, setDurationMins] = useState("30");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [radiusMeters, setRadiusMeters] = useState("100");
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [csvText, setCsvText] = useState("");
  const [formQuestions, setFormQuestions] = useState<Question[]>([]);
  
  // Smart Gemini Corrections state
  const [isCorrecting, setIsCorrecting] = useState(false);
  const [correctedQuestions, setCorrectedQuestions] = useState<Question[] | null>(null);
  const [correctionError, setCorrectionError] = useState<string | null>(null);

  // Monitor states
  const [activeMonitorExam, setActiveMonitorExam] = useState<Exam | null>(null);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [monitorConnected, setMonitorConnected] = useState(false);
  const eventSourceRef = useRef<EventSource | null>(null);
  const [selectedStudentLogs, setSelectedStudentLogs] = useState<Submission | null>(null);

  // Load created exams
  useEffect(() => {
    if (view === "LIST") {
      fetchExams();
    }
  }, [view]);

  const fetchExams = async () => {
    setLoadingExams(true);
    try {
      const res = await fetch("/api/faculty/me");
      if (res.ok) {
        const data = await res.json();
        // Since we don't have a direct list api, let's fetch faculty details containing exams
        setExams(data.faculty.exams || []);
      }
    } catch (e) {
      console.error("Failed to fetch exams:", e);
    } finally {
      setLoadingExams(false);
    }
  };

  // Browser Geolocation auto-detection
  const handleAutoDetectLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude.toFixed(6));
        setLongitude(position.coords.longitude.toFixed(6));
      },
      (error) => {
        alert("Failed to capture location coordinates. Please enter manually.");
      },
      { enableHighAccuracy: true }
    );
  };

  // Handle CSV file selection and parsing
  const handleCsvUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCsvFile(file);

    const reader = new FileReader();
    reader.onload = async (event) => {
      const text = event.target?.result as string;
      setCsvText(text);
      validateAndParseCsv(text);
    };
    reader.readAsText(file);
  };

  const validateAndParseCsv = async (text: string) => {
    setIsCorrecting(true);
    setCorrectedQuestions(null);
    setCorrectionError(null);

    try {
      const response = await fetch("/api/faculty/exams/questions/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ csvText: text }),
      });

      const data = await response.json();

      if (response.ok) {
        setFormQuestions(data.questions || []);
      } else {
        // Validation failed, let's see if Gemini has auto-corrected it
        if (data.canCorrect && data.corrected) {
          setCorrectedQuestions(data.corrected);
          setCorrectionError(data.error || "CSV parsing schema violation detected.");
        } else {
          setCorrectionError("Failed to parse CSV. Verify column headers match requirements.");
        }
      }
    } catch (e) {
      console.error(e);
      setCorrectionError("Server connection error during validation.");
    } finally {
      setIsCorrecting(false);
    }
  };

  const handleApproveGemini = () => {
    if (correctedQuestions) {
      setFormQuestions(correctedQuestions);
      setCorrectedQuestions(null);
      setCorrectionError(null);
    }
  };

  const handleCreateExamSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !durationMins || !latitude || !longitude || formQuestions.length === 0) {
      alert("Complete all fields and upload a valid question sheet before submitting.");
      return;
    }

    try {
      const res = await fetch("/api/faculty/exams/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          durationMins: parseInt(durationMins, 10),
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          radiusMeters: parseFloat(radiusMeters || "100"),
          questions: formQuestions,
        }),
      });

      if (res.ok) {
        alert("Secure Surprise Exam generated successfully!");
        // Reset state
        setTitle("");
        setDurationMins("30");
        setLatitude("");
        setLongitude("");
        setRadiusMeters("100");
        setFormQuestions([]);
        setView("LIST");
      } else {
        const data = await res.json();
        alert(data.error || "Failed to create exam");
      }
    } catch (e) {
      console.error(e);
      alert("Connection failure during transactional upload.");
    }
  };

  // Start Live monitoring SSE connection
  const handleStartMonitor = (exam: Exam) => {
    setActiveMonitorExam(exam);
    setView("MONITOR");
    setMonitorConnected(true);

    const sse = new EventSource(`/api/faculty/exams/${exam.id}/monitor`);
    eventSourceRef.current = sse;

    sse.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.success) {
          setSubmissions(data.submissions || []);
        }
      } catch (e) {
        console.error("Failed to parse SSE packet:", e);
      }
    };

    sse.onerror = (err) => {
      console.error("SSE connection dropped:", err);
      setMonitorConnected(false);
    };
  };

  const handleCloseMonitor = () => {
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }
    setActiveMonitorExam(null);
    setSubmissions([]);
    setSelectedStudentLogs(null);
    setView("LIST");
  };

  // Helper status checkers for live student cards
  const getStudentCardState = (sub: Submission) => {
    if (sub.status === "terminated") return "TERMINATED";
    if (sub.status === "submitted") return "SUBMITTED";

    // Ongoing checks
    if (sub.anomalies.length > 0) {
      const latest = sub.anomalies[0];
      if (latest.type === "APP_BACKGROUNDED") {
        return "APP_SWITCHING";
      }
      return "ANOMALY_WARNING";
    }

    return "ACTIVE_SAFE";
  };

  // Metrics calculators
  const completedCount = submissions.filter((s) => s.status === "submitted").length;
  const activeCount = submissions.filter((s) => s.status === "ongoing").length;
  const terminatedCount = submissions.filter((s) => s.status === "terminated").length;
  const avgScore =
    submissions.length > 0
      ? (submissions.reduce((acc, curr) => acc + curr.score, 0) / submissions.length).toFixed(1)
      : "0.0";

  return (
    <div className="portal-content" style={{ padding: "30px 40px" }}>
      {/* View 1: Exams List */}
      {view === "LIST" && (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <div>
              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.8rem" }}>
                SURPRISE EXAMINATIONS
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", marginTop: "4px" }}>
                Generate geofenced, proctored examinations and monitor student feeds live.
              </p>
            </div>
            <button className="btn-primary" onClick={() => setView("CREATE")} style={{ width: "auto" }}>
              Create Surprise Exam
            </button>
          </div>

          {loadingExams ? (
            <div style={{ display: "flex", justifyContent: "center", padding: "60px" }}>
              <div className="spinner" />
            </div>
          ) : exams.length === 0 ? (
            <div
              style={{
                background: "var(--bg-panel)",
                border: "1px solid var(--border-muted)",
                borderRadius: "12px",
                padding: "60px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "var(--bg-deep)",
                  margin: "0 auto 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                🔒
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px" }}>No Exams Scheduled</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", maxWidth: "400px", margin: "0 auto" }}>
                Create a secure surprise exam token. Students will receive instant notifications in their client dashboard.
              </p>
            </div>
          ) : (
            <div className="data-table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Duration</th>
                    <th>Geo Center</th>
                    <th>Radius</th>
                    <th>Submissions</th>
                    <th>Date Generated</th>
                    <th style={{ textAlign: "right" }}>Monitor</th>
                  </tr>
                </thead>
                <tbody>
                  {exams.map((exam) => (
                    <tr key={exam.id}>
                      <td style={{ fontWeight: 600 }}>{exam.title}</td>
                      <td>{exam.durationMins} Mins</td>
                      <td style={{ fontFamily: "monospace", fontSize: "0.8rem" }}>
                        {exam.latitude.toFixed(4)}, {exam.longitude.toFixed(4)}
                      </td>
                      <td>{exam.radiusMeters}m</td>
                      <td>
                        <span className="badge active" style={{ fontSize: "0.7rem", fontWeight: "bold" }}>
                          {exam._count?.submissions || 0} Joined
                        </span>
                      </td>
                      <td>{new Date(exam.createdAt).toLocaleDateString()}</td>
                      <td style={{ textAlign: "right" }}>
                        <button
                          className="btn-outline"
                          onClick={() => handleStartMonitor(exam)}
                          style={{
                            padding: "6px 12px",
                            fontSize: "0.75rem",
                            borderColor: "var(--faculty-accent)",
                            color: "var(--faculty-accent)",
                            fontWeight: "bold",
                            cursor: "pointer",
                          }}
                        >
                          Monitor Live Stream
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* View 2: Create Exam Form */}
      {view === "CREATE" && (
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ marginBottom: "30px" }}>
            <button
              onClick={() => {
                setView("LIST");
                setCorrectedQuestions(null);
                setCorrectionError(null);
              }}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: "0.85rem",
                color: "var(--text-secondary)",
                marginBottom: "12px",
              }}
            >
              ← Back to List
            </button>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.8rem" }}>
              INITIATE SURPRISE EXAM NODE
            </h1>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>
            {/* Form Column */}
            <div
              className="glass-panel"
              style={{ padding: "30px", borderRadius: "12px", background: "var(--bg-panel)" }}
            >
              <form onSubmit={handleCreateExamSubmit} className="auth-form">
                <div className="form-group">
                  <label className="form-label">Exam Title</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g. Algorithms Surprise Test 4"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Duration (Minutes)</label>
                    <input
                      type="number"
                      required
                      min="1"
                      className="form-input"
                      value={durationMins}
                      onChange={(e) => setDurationMins(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Geofence Radius (Meters)</label>
                    <input
                      type="number"
                      required
                      min="10"
                      className="form-input"
                      value={radiusMeters}
                      onChange={(e) => setRadiusMeters(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <label className="form-label">Exam Center Geopoints</label>
                    <button
                      type="button"
                      onClick={handleAutoDetectLocation}
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "var(--faculty-accent)",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        textTransform: "uppercase",
                      }}
                    >
                      Use Current Geolocation
                    </button>
                  </div>
                  <div className="form-row">
                    <input
                      type="text"
                      required
                      placeholder="Latitude"
                      className="form-input"
                      value={latitude}
                      onChange={(e) => setLatitude(e.target.value)}
                    />
                    <input
                      type="text"
                      required
                      placeholder="Longitude"
                      className="form-input"
                      value={longitude}
                      onChange={(e) => setLongitude(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Questions Import (CSV File)</label>
                  <div
                    style={{
                      border: "2px dashed var(--border-muted)",
                      borderRadius: "8px",
                      padding: "20px",
                      textAlign: "center",
                      backgroundColor: "var(--bg-deep)",
                      cursor: "pointer",
                      position: "relative",
                    }}
                  >
                    <input
                      type="file"
                      accept=".csv"
                      onChange={handleCsvUpload}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        opacity: 0,
                        cursor: "pointer",
                      }}
                    />
                    <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                      {csvFile ? csvFile.name : "Select or drag question CSV sheet"}
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "4px" }}>
                      Required headers: question, option_a, option_b, option_c, option_d, correct_option, marks
                    </div>
                  </div>
                </div>

                {isCorrecting && (
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 0" }}>
                    <div className="spinner" style={{ width: "20px", height: "20px" }} />
                    <span style={{ fontSize: "0.8rem", color: "var(--faculty-accent)", fontWeight: "bold" }}>
                      AI validation node running...
                    </span>
                  </div>
                )}

                <div style={{ marginTop: "16px" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: "bold", color: "var(--text-secondary)" }}>
                    Loaded Questions: {formQuestions.length}
                  </span>
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ marginTop: "24px" }}
                  disabled={formQuestions.length === 0}
                >
                  TRANSACT SECURE EXAM
                </button>
              </form>
            </div>

            {/* Smart Gemini correction side-by-side view */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {correctedQuestions ? (
                <div
                  className="glass-panel"
                  style={{
                    padding: "24px",
                    borderRadius: "12px",
                    background: "rgba(79, 70, 229, 0.03)",
                    border: "1px solid rgba(79, 70, 229, 0.2)",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--faculty-accent)",
                      marginBottom: "12px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>GEMINI SMART AUTO-CORRECT</span>
                    <span className="badge active" style={{ backgroundColor: "var(--faculty-accent)" }}>
                      Format Restored
                    </span>
                  </h3>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "20px" }}>
                    {correctionError} Gemini has automatically repaired the column schemas, missing rows, and formatting.
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", flex: 1, overflow: "hidden" }}>
                    {/* Raw input preview */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontSize: "0.7rem", fontWeight: "bold", color: "var(--text-muted)", marginBottom: "6px", textTransform: "uppercase" }}>
                        Raw File Content
                      </span>
                      <pre
                        style={{
                          flex: 1,
                          background: "var(--bg-deep)",
                          border: "1px solid var(--border-muted)",
                          borderRadius: "6px",
                          padding: "12px",
                          fontSize: "0.7rem",
                          color: "var(--text-secondary)",
                          overflow: "auto",
                          margin: 0,
                          maxHeight: "300px",
                          whiteSpace: "pre-wrap",
                          fontFamily: "monospace",
                        }}
                      >
                        {csvText}
                      </pre>
                    </div>

                    {/* Gemini corrected preview */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontSize: "0.7rem", fontWeight: "bold", color: "var(--faculty-accent)", marginBottom: "6px", textTransform: "uppercase" }}>
                        AI Repaired Output
                      </span>
                      <div
                        style={{
                          flex: 1,
                          background: "var(--bg-deep)",
                          border: "1px solid rgba(79, 70, 229, 0.15)",
                          borderRadius: "6px",
                          padding: "12px",
                          overflowY: "auto",
                          maxHeight: "300px",
                        }}
                      >
                        {correctedQuestions.map((q, idx) => (
                          <div
                            key={idx}
                            style={{
                              paddingBottom: "10px",
                              marginBottom: "10px",
                              borderBottom: "1px solid var(--border-muted)",
                            }}
                          >
                            <div style={{ fontSize: "0.75rem", fontWeight: "bold", color: "var(--text-primary)" }}>
                              {idx + 1}. {q.questionText}
                            </div>
                            <div style={{ fontSize: "0.65rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                              A: {q.optionA} | B: {q.optionB} | C: {q.optionC} | D: {q.optionD}
                            </div>
                            <div style={{ fontSize: "0.65rem", color: "var(--success)", fontWeight: "bold", marginTop: "2px" }}>
                              Correct: Option {q.correctOption} (Marks: {q.marks})
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleApproveGemini}
                    className="btn-primary"
                    style={{
                      marginTop: "20px",
                      backgroundColor: "var(--faculty-accent)",
                      boxShadow: "0 0 16px rgba(79, 70, 229, 0.2)",
                    }}
                  >
                    APPROVE AI FORMAT & IMPORT
                  </button>
                </div>
              ) : (
                <div
                  className="glass-panel"
                  style={{
                    padding: "30px",
                    borderRadius: "12px",
                    background: "var(--bg-panel)",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "16px" }}>📄</div>
                  <h4 style={{ fontWeight: 700, marginBottom: "8px" }}>Question Sheet Preview</h4>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.8rem", maxWidth: "300px" }}>
                    Once a valid question CSV is uploaded, a parsed questions list will populate here for review before transactional database lock.
                  </p>
                  {correctionError && !correctedQuestions && (
                    <div
                      style={{
                        marginTop: "16px",
                        background: "var(--error-bg)",
                        border: "1px solid var(--error-border)",
                        borderRadius: "6px",
                        padding: "10px 14px",
                        fontSize: "0.8rem",
                        color: "var(--error)",
                        width: "100%",
                      }}
                    >
                      {correctionError}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* View 3: SSE Live Proctoring Command Monitor */}
      {view === "MONITOR" && activeMonitorExam && (
        <div>
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: monitorConnected ? "var(--success)" : "var(--error)",
                    boxShadow: monitorConnected
                      ? "0 0 10px var(--success)"
                      : "0 0 10px var(--error)",
                  }}
                />
                <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.8rem" }}>
                  LIVE PROCTORING SHELL
                </h1>
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", marginTop: "4px" }}>
                Monitoring exam: <strong style={{ color: "var(--text-primary)" }}>{activeMonitorExam.title}</strong>
              </p>
            </div>
            <button className="btn-outline" onClick={handleCloseMonitor} style={{ width: "auto", cursor: "pointer" }}>
              Close Live Monitor
            </button>
          </div>

          {/* Metrics aggregate board */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-label">CONNECTED STUDENTS</div>
              <div className="stat-value">{submissions.length}</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">ACTIVE TESTING</div>
              <div className="stat-value" style={{ color: "var(--faculty-accent)" }}>
                {activeCount}
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-label">COMPLETED SHEETS</div>
              <div className="stat-value" style={{ color: "var(--success)" }}>
                {completedCount}
              </div>
            </div>
            <div className="stat-card" style={{ borderLeft: "3px solid var(--error)" }}>
              <div className="stat-label">FORCIBLY TERMINATED</div>
              <div className="stat-value" style={{ color: "var(--error)" }}>
                {terminatedCount}
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-label">CLASS AVERAGE</div>
              <div className="stat-value">{avgScore}</div>
            </div>
          </div>

          {/* Grid of Student Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
            {submissions.length === 0 ? (
              <div
                style={{
                  gridColumn: "1 / -1",
                  background: "var(--bg-panel)",
                  border: "1px solid var(--border-muted)",
                  borderRadius: "12px",
                  padding: "60px",
                  textAlign: "center",
                }}
              >
                <div className="spinner" style={{ margin: "0 auto 16px" }} />
                <h4 style={{ fontWeight: 700 }}>Awaiting student connection requests...</h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.8rem", marginTop: "8px" }}>
                  Students launching this exam sheet in their mobile application client will populate here in real-time.
                </p>
              </div>
            ) : (
              submissions.map((sub) => {
                const state = getStudentCardState(sub);
                let outlineColor = "var(--border-muted)";
                let statusBadgeBg = "var(--border-muted)";
                let statusBadgeText = "var(--text-secondary)";
                let statusText = "Active Safe";

                if (state === "TERMINATED") {
                  outlineColor = "var(--error)";
                  statusBadgeBg = "rgba(220, 38, 38, 0.1)";
                  statusBadgeText = "var(--error)";
                  statusText = "Forcibly Terminated";
                } else if (state === "SUBMITTED") {
                  outlineColor = "var(--success)";
                  statusBadgeBg = "rgba(22, 163, 74, 0.1)";
                  statusBadgeText = "var(--success)";
                  statusText = "Submitted";
                } else if (state === "APP_SWITCHING") {
                  outlineColor = "rgba(249, 115, 22, 0.6)";
                  statusBadgeBg = "rgba(249, 115, 22, 0.1)";
                  statusBadgeText = "rgba(249, 115, 22, 1)";
                  statusText = "App Backgrounded";
                } else if (state === "ANOMALY_WARNING") {
                  outlineColor = "rgba(234, 179, 8, 0.6)";
                  statusBadgeBg = "rgba(234, 179, 8, 0.1)";
                  statusBadgeText = "rgba(234, 179, 8, 1)";
                  statusText = `${sub.anomalies[0].type.replace("_", " ")}`;
                } else {
                  outlineColor = "rgba(22, 163, 74, 0.3)";
                  statusBadgeBg = "rgba(22, 163, 74, 0.05)";
                  statusBadgeText = "var(--success)";
                }

                return (
                  <div
                    key={sub.id}
                    className="glass-panel"
                    style={{
                      padding: "20px",
                      borderRadius: "10px",
                      border: `1.5px solid ${outlineColor}`,
                      background: "var(--bg-panel)",
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "200px",
                      boxShadow: state === "APP_SWITCHING" || state === "ANOMALY_WARNING" ? "0 0 12px rgba(234, 179, 8, 0.15)" : "none",
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                        <div>
                          <h4 style={{ fontWeight: 700, fontSize: "0.95rem" }}>{sub.studentName}</h4>
                          <span style={{ fontSize: "0.7rem", color: "var(--text-secondary)", fontFamily: "monospace" }}>
                            {sub.enrollmentNo} · {sub.branch}
                          </span>
                        </div>
                        <span
                          className="badge"
                          style={{
                            backgroundColor: statusBadgeBg,
                            borderColor: "transparent",
                            color: statusBadgeText,
                            fontSize: "0.65rem",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                          }}
                        >
                          {statusText}
                        </span>
                      </div>

                      <div style={{ margin: "14px 0" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-secondary)", marginBottom: "4px" }}>
                          <span>Current Score:</span>
                          <strong style={{ color: "var(--text-primary)" }}>{sub.score} Marks</strong>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                          <span>Infraction Warnings:</span>
                          <strong style={{ color: sub.anomalies.length > 0 ? "var(--error)" : "var(--text-secondary)" }}>
                            {sub.anomalies.length} Flagged
                          </strong>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                        Started: {new Date(sub.startedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                      <button
                        onClick={() => setSelectedStudentLogs(sub)}
                        style={{
                          background: "transparent",
                          border: "none",
                          color: "var(--faculty-accent)",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        Review Anomalies
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* Drawer Overlay for Anomaly Logs */}
      {selectedStudentLogs && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(10, 14, 23, 0.4)",
            backdropFilter: "blur(4px)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {/* Backdrop Click */}
          <div style={{ flex: 1 }} onClick={() => setSelectedStudentLogs(null)} />

          {/* Drawer Body */}
          <div
            style={{
              width: "420px",
              backgroundColor: "var(--bg-panel)",
              borderLeft: "1px solid var(--border-muted)",
              height: "100%",
              padding: "40px 30px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "-10px 0 30px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem" }}>
                SECURE PROCTOR LOGS
              </h3>
              <button
                onClick={() => setSelectedStudentLogs(null)}
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

            <div style={{ marginBottom: "24px" }}>
              <h4 style={{ fontSize: "0.95rem", fontWeight: 700 }}>{selectedStudentLogs.studentName}</h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.8rem", marginTop: "2px" }}>
                Enrollment: {selectedStudentLogs.enrollmentNo} · Branch: {selectedStudentLogs.branch}
              </p>
            </div>

            <div style={{ flex: 1, overflowY: "auto" }}>
              <h5 style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", letterSpacing: 0.5, textTransform: "uppercase", marginBottom: "12px" }}>
                Chronological Infractions Log ({selectedStudentLogs.anomalies.length})
              </h5>

              {selectedStudentLogs.anomalies.length === 0 ? (
                <div style={{ padding: "30px 10px", textAlign: "center", color: "var(--text-muted)", fontSize: "0.85rem" }}>
                  All clear. No anomalies registered for this student.
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {selectedStudentLogs.anomalies.map((log) => {
                    let labelColor = "var(--warning)";
                    if (log.type === "APP_BACKGROUNDED" || log.type === "FACIAL_ABSENCE") {
                      labelColor = "var(--error)";
                    }
                    return (
                      <div
                        key={log.id}
                        style={{
                          border: "1px solid var(--border-muted)",
                          borderRadius: "8px",
                          padding: "12px 14px",
                          backgroundColor: "var(--bg-deep)",
                        }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: labelColor }}>
                            {log.type.replace("_", " ")}
                          </span>
                          <span style={{ fontSize: "0.65rem", color: "var(--text-muted)" }}>
                            {new Date(log.timestamp).toLocaleTimeString()}
                          </span>
                        </div>
                        <p style={{ fontSize: "0.7rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                          Proctor warning flagged automatically by local AI engine shield on student device.
                        </p>
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
