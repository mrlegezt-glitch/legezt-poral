"use client";

import { useEffect, useState, useRef } from "react";

interface ExamResult {
  id: string;
  examId: string;
  examTitle: string;
  score: number;
  maxScore: number;
  status: string;
  submittedAt: string | null;
}

export default function StudentResultsPage() {
  const [results, setResults] = useState<ExamResult[]>([]);
  const [loading, setLoading] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    fetch("/api/student/exams/results")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        if (data.success) {
          setResults(data.results || []);
        }
      })
      .catch((e) => console.error("Failed to load student results:", e))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (loading || results.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle high DPI displays
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;

    // Clear Canvas
    ctx.clearRect(0, 0, width, height);

    // Sort results chronologically for the graph
    const chronologicalResults = [...results]
      .filter((r) => r.submittedAt)
      .sort((a, b) => new Date(a.submittedAt!).getTime() - new Date(b.submittedAt!).getTime());

    if (chronologicalResults.length === 0) return;

    // Styling configurations
    const paddingLeft = 50;
    const paddingRight = 30;
    const paddingTop = 30;
    const paddingBottom = 40;
    const chartWidth = width - paddingLeft - paddingRight;
    const chartHeight = height - paddingTop - paddingBottom;

    // Draw Grid Lines & Y Axis Labels
    ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
    ctx.lineWidth = 1;
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.font = "11px Inter, sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";

    for (let i = 0; i <= 5; i++) {
      const pct = i * 20;
      const y = paddingTop + chartHeight - (pct / 100) * chartHeight;
      ctx.beginPath();
      ctx.moveTo(paddingLeft, y);
      ctx.lineTo(width - paddingRight, y);
      ctx.stroke();
      ctx.fillText(`${pct}%`, paddingLeft - 10, y);
    }

    // Map data points
    const points = chronologicalResults.map((r, idx) => {
      const percentage = r.maxScore > 0 ? (r.score / r.maxScore) * 100 : 0;
      const x =
        chronologicalResults.length > 1
          ? paddingLeft + (idx / (chronologicalResults.length - 1)) * chartWidth
          : paddingLeft + chartWidth / 2;
      const y = paddingTop + chartHeight - (percentage / 100) * chartHeight;
      return { x, y, label: r.examTitle, pct: percentage };
    });

    // Draw gradient fill under the line
    if (points.length > 1) {
      const fillGradient = ctx.createLinearGradient(0, paddingTop, 0, paddingTop + chartHeight);
      fillGradient.addColorStop(0, "rgba(79, 70, 229, 0.25)");
      fillGradient.addColorStop(1, "rgba(79, 70, 229, 0.0)");

      ctx.fillStyle = fillGradient;
      ctx.beginPath();
      ctx.moveTo(points[0].x, paddingTop + chartHeight);
      points.forEach((p) => ctx.lineTo(p.x, p.y));
      ctx.lineTo(points[points.length - 1].x, paddingTop + chartHeight);
      ctx.closePath();
      ctx.fill();
    }

    // Draw the main trend line
    ctx.strokeStyle = "#6366f1";
    ctx.lineWidth = 3;
    ctx.beginPath();
    points.forEach((p, idx) => {
      if (idx === 0) {
        ctx.moveTo(p.x, p.y);
      } else {
        ctx.lineTo(p.x, p.y);
      }
    });
    ctx.stroke();

    // Draw point nodes & labels
    points.forEach((p) => {
      // Glow dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, 6, 0, 2 * Math.PI);
      ctx.fillStyle = "#6366f1";
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#ffffff";
      ctx.stroke();

      // Tooltip/label above dot
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 10px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`${Math.round(p.pct)}%`, p.x, p.y - 12);
    });

    // Draw X Axis labels
    ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
    ctx.font = "9px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    points.forEach((p, idx) => {
      const truncatedLabel =
        p.label.length > 12 ? p.label.substring(0, 10) + "..." : p.label;
      ctx.fillText(truncatedLabel, p.x, paddingTop + chartHeight + 10);
    });
  }, [loading, results]);

  const avgPercentage =
    results.length > 0
      ? Math.round(
          (results.reduce(
            (acc, curr) => acc + (curr.maxScore > 0 ? (curr.score / curr.maxScore) * 100 : 0),
            0
          ) /
            results.length)
        )
      : 0;

  const performanceFeedback = () => {
    if (avgPercentage >= 85) return { status: "Excellent", msg: "Aapka performance bohot badhiya hai! Keep maintaining this level.", color: "var(--success)" };
    if (avgPercentage >= 65) return { status: "Good Effort", msg: "Aap achha kar rahe hain, thodi aur regular practice se grades aur behtar ho sakte hain.", color: "var(--faculty-accent)" };
    return { status: "Focus Needed", msg: "Aapko concepts par thoda aur dhyan dene ki zaroorat hai. Faculty advisory se zaroor consult karein.", color: "var(--error)" };
  };

  const feedback = performanceFeedback();

  return (
    <div className="portal-content" style={{ padding: "30px 40px" }}>
      <div style={{ marginBottom: "30px" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.8rem" }}>
          SURPRISE EXAM RESULTS
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", marginTop: "4px" }}>
          Analyze your performance metrics, auto-graded scores, and cumulative trend analysis.
        </p>
      </div>

      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", padding: "60px" }}>
          <div className="spinner" />
        </div>
      ) : results.length === 0 ? (
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
            📊
          </div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px" }}>No Published Results</h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", maxWidth: "450px", margin: "0 auto" }}>
            Aapne abhi tak koi test submit nahi kiya hai ya fir faculty ne abhi tak results upload/publish nahi kiye hain.
          </p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "30px", alignItems: "start" }}>
          {/* Main List and Graph */}
          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            {/* Graph Card */}
            <div
              className="glass-panel"
              style={{
                background: "var(--bg-panel)",
                borderRadius: "12px",
                padding: "24px",
                border: "1px solid var(--border-muted)",
              }}
            >
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "20px" }}>
                Performance Trend Chart
              </h3>
              <div style={{ width: "100%", height: "240px", position: "relative" }}>
                <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
              </div>
            </div>

            {/* Results Table */}
            <div className="data-table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Exam Name</th>
                    <th>Score Obtained</th>
                    <th>Percentage</th>
                    <th>Infraction Status</th>
                    <th>Submission Date</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((r) => {
                    const pct = r.maxScore > 0 ? Math.round((r.score / r.maxScore) * 100) : 0;
                    return (
                      <tr key={r.id}>
                        <td style={{ fontWeight: 600 }}>{r.examTitle}</td>
                        <td>
                          {r.score} / {r.maxScore}
                        </td>
                        <td>
                          <span style={{ fontWeight: 700, color: pct >= 50 ? "var(--success)" : "var(--error)" }}>
                            {pct}%
                          </span>
                        </td>
                        <td>
                          <span
                            className="badge"
                            style={{
                              backgroundColor: r.status === "terminated" ? "rgba(220, 38, 38, 0.1)" : "rgba(22, 163, 74, 0.1)",
                              color: r.status === "terminated" ? "var(--error)" : "var(--success)",
                              borderColor: "transparent",
                              fontSize: "0.65rem",
                              fontWeight: "bold",
                            }}
                          >
                            {r.status === "terminated" ? "TERMINATED" : "SAFE"}
                          </span>
                        </td>
                        <td>{r.submittedAt ? new Date(r.submittedAt).toLocaleDateString() : "-"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Performance Summary Sidebar */}
          <div
            className="glass-panel"
            style={{
              background: "var(--bg-panel)",
              borderRadius: "12px",
              padding: "30px",
              border: "1px solid var(--border-muted)",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Summary</h3>

            {/* Score Ring Metric */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 0" }}>
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  border: "8px solid var(--bg-deep)",
                  borderTopColor: "var(--faculty-accent)",
                  borderRightColor: "var(--faculty-accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <span style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)" }}>
                  {avgPercentage}%
                </span>
                <span style={{ fontSize: "0.65rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: "bold" }}>
                  Average Score
                </span>
              </div>
            </div>

            <div style={{ borderTop: "1px solid var(--border-muted)", paddingTop: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "0.8rem" }}>
                <span style={{ color: "var(--text-secondary)" }}>Total Surprise Exams:</span>
                <strong style={{ color: "var(--text-primary)" }}>{results.length}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
                <span style={{ color: "var(--text-secondary)" }}>Academic Standing:</span>
                <strong style={{ color: feedback.color }}>{feedback.status}</strong>
              </div>
            </div>

            {/* Hinglish Feedback */}
            <div
              style={{
                backgroundColor: "var(--bg-deep)",
                borderRadius: "8px",
                padding: "16px",
                borderLeft: `4px solid ${feedback.color}`,
              }}
            >
              <h4 style={{ fontSize: "0.8rem", fontWeight: 700, marginBottom: "4px", color: "var(--text-primary)" }}>
                FACULTY FEEDBACK
              </h4>
              <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", lineHeight: "1.4", margin: 0 }}>
                {feedback.msg}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
