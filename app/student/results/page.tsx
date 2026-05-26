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
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
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
    const paddingLeft = 60;
    const paddingRight = 40;
    const paddingTop = 45;
    const paddingBottom = 40;
    const chartWidth = width - paddingLeft - paddingRight;
    const chartHeight = height - paddingTop - paddingBottom;

    // Draw Grid Lines & Y Axis Labels
    ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
    ctx.lineWidth = 1.5;
    ctx.fillStyle = "rgba(205, 214, 244, 0.4)";
    ctx.font = "bold 11px Inter, system-ui, sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";

    for (let i = 0; i <= 5; i++) {
      const pct = i * 20;
      const y = paddingTop + chartHeight - (pct / 100) * chartHeight;
      ctx.beginPath();
      ctx.moveTo(paddingLeft, y);
      ctx.lineTo(width - paddingRight, y);
      ctx.stroke();
      ctx.fillText(`${pct}%`, paddingLeft - 15, y);
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
      fillGradient.addColorStop(0, "rgba(99, 102, 241, 0.25)");
      fillGradient.addColorStop(1, "rgba(99, 102, 241, 0.0)");

      ctx.fillStyle = fillGradient;
      ctx.beginPath();
      ctx.moveTo(points[0].x, paddingTop + chartHeight);
      points.forEach((p) => ctx.lineTo(p.x, p.y));
      ctx.lineTo(points[points.length - 1].x, paddingTop + chartHeight);
      ctx.closePath();
      ctx.fill();
    }

    // Draw the main trend line
    ctx.strokeStyle = "#89b4fa"; // TextSecondary color from Android Theme
    ctx.lineWidth = 4;
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
      ctx.arc(p.x, p.y, 7, 0, 2 * Math.PI);
      ctx.fillStyle = "#89b4fa";
      ctx.fill();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = "#0f111a"; // SurfaceDark background
      ctx.stroke();

      // Tooltip/label above dot
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 10px Inter, system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`${Math.round(p.pct)}%`, p.x, p.y - 14);
    });

    // Draw X Axis labels
    ctx.fillStyle = "rgba(205, 214, 244, 0.4)";
    ctx.font = "bold 9px Inter, system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    points.forEach((p, idx) => {
      const truncatedLabel =
        p.label.length > 12 ? p.label.substring(0, 10) + "..." : p.label;
      ctx.fillText(truncatedLabel, p.x, paddingTop + chartHeight + 12);
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

  const totalPointsScored = results.reduce((acc, curr) => acc + curr.score, 0);
  const totalMaxPoints = results.reduce((acc, curr) => acc + curr.maxScore, 0);

  const performanceFeedback = () => {
    if (avgPercentage >= 85) return { status: "Excellent", msg: "Aapka performance bohot badhiya hai! Keep maintaining this level.", color: "#a6e3a1", bg: "rgba(166, 227, 161, 0.1)" };
    if (avgPercentage >= 65) return { status: "Good Effort", msg: "Aap achha kar rahe hain, thodi aur regular practice se grades aur behtar ho sakte hain.", color: "#89b4fa", bg: "rgba(137, 180, 250, 0.1)" };
    return { status: "Focus Needed", msg: "Aapko concepts par thoda aur dhyan dene ki zaroorat hai. Faculty advisory se zaroor consult karein.", color: "#f38ba8", bg: "rgba(243, 139, 168, 0.1)" };
  };

  const feedback = performanceFeedback();

  // Proctor status score (how many terminated vs total)
  const terminatedCount = results.filter((r) => r.status === "terminated").length;
  const proctorSafetyRating =
    results.length > 0 ? Math.round(((results.length - terminatedCount) / results.length) * 100) : 100;

  return (
    <div
      style={{
        padding: "30px 40px",
        backgroundColor: "#07080d",
        minHeight: "100vh",
        color: "#cdd6f4",
        fontFamily: "'Outfit', 'Inter', system-ui, sans-serif",
      }}
    >
      {/* Header section with profile analytics vibe */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "35px",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          paddingBottom: "20px",
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "2rem",
              letterSpacing: "-0.5px",
              background: "linear-gradient(90deg, #89b4fa, #f38ba8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: 0,
            }}
          >
            ACADEMIC PERFORMANCE SHEET
          </h1>
          <p style={{ color: "#a6adc8", fontSize: "0.85rem", marginTop: "6px" }}>
            Real-time surprise test analytics, score progression, and faculty feedback records.
          </p>
        </div>

        {results.length > 0 && (
          <div
            style={{
              background: "rgba(137, 180, 250, 0.08)",
              border: "1px solid rgba(137, 180, 250, 0.2)",
              padding: "10px 20px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: feedback.color, boxShadow: `0 0 10px ${feedback.color}` }} />
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#89b4fa" }}>
              ACADEMIC STANDING: {feedback.status.toUpperCase()}
            </span>
          </div>
        )}
      </div>

      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", padding: "80px" }}>
          <div className="spinner" />
        </div>
      ) : results.length === 0 ? (
        <div
          style={{
            background: "#0f111a",
            border: "1px dashed rgba(255,255,255,0.1)",
            borderRadius: "16px",
            padding: "80px 40px",
            textAlign: "center",
            maxWidth: "600px",
            margin: "40px auto 0",
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "20px" }}>📊</div>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "10px" }}>No Surprise Test Results</h3>
          <p style={{ color: "#a6adc8", fontSize: "0.85rem", lineHeight: "1.6" }}>
            Aapne abhi tak koi test submit nahi kiya hai ya fir faculty ne abhi tak surprise exams ke results upload/publish nahi kiye hain. Jaise hi results release honge, wahi data yahan display ho jayega.
          </p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr", gap: "30px", alignItems: "start" }}>
          {/* Main Content Side: Charts and Individual Test Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            {/* High-End interactive trend chart */}
            <div
              style={{
                background: "#0f111a",
                borderRadius: "16px",
                padding: "24px",
                border: "1.5px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>📈</span> Performance Trend Chart
                </h3>
                <span style={{ fontSize: "0.75rem", color: "#a6adc8" }}>Chronological Progression</span>
              </div>
              <div style={{ width: "100%", height: "250px", position: "relative" }}>
                <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
              </div>
            </div>

            {/* List Header */}
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: "10px 0 0", color: "#ffffff" }}>
              📝 Surprise Tests Taken ({results.length})
            </h3>

            {/* Premium Cards List (matching the app's Results items instead of basic table) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {results.map((r) => {
                const pct = r.maxScore > 0 ? Math.round((r.score / r.maxScore) * 100) : 0;
                const isPass = pct >= 50;
                const isTerminated = r.status === "terminated";
                const isCardHovered = hoveredCard === r.id;

                return (
                  <div
                    key={r.id}
                    onMouseEnter={() => setHoveredCard(r.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      background: "#0f111a",
                      borderRadius: "16px",
                      padding: "20px",
                      border: isCardHovered
                        ? `1.5px solid ${isTerminated ? "#f38ba8" : "#89b4fa"}`
                        : "1.5px solid rgba(255, 255, 255, 0.05)",
                      transform: isCardHovered ? "translateY(-3px)" : "translateY(0)",
                      boxShadow: isCardHovered
                        ? `0 10px 20px rgba(0, 0, 0, 0.3), 0 0 15px ${isTerminated ? "rgba(243, 139, 168, 0.1)" : "rgba(137, 180, 250, 0.1)"}`
                        : "none",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "10px",
                            backgroundColor: isTerminated ? "rgba(243, 139, 168, 0.12)" : "rgba(137, 180, 250, 0.12)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.2rem",
                          }}
                        >
                          📄
                        </div>
                        <div>
                          <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                            {r.examTitle}
                          </h4>
                          <span style={{ fontSize: "0.75rem", color: "#a6adc8", marginTop: "3px", display: "inline-block" }}>
                            Submitted: {r.submittedAt ? new Date(r.submittedAt).toLocaleDateString() : "-"}
                          </span>
                        </div>
                      </div>

                      {/* Status badge matching Android app */}
                      <span
                        style={{
                          backgroundColor: isTerminated
                            ? "rgba(243, 139, 168, 0.12)"
                            : isPass
                            ? "rgba(166, 227, 161, 0.12)"
                            : "rgba(243, 139, 168, 0.12)",
                          color: isTerminated ? "#f38ba8" : isPass ? "#a6e3a1" : "#f38ba8",
                          fontSize: "0.7rem",
                          fontWeight: "bold",
                          textTransform: "uppercase",
                          padding: "6px 14px",
                          borderRadius: "8px",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {isTerminated ? "TERMINATED" : isPass ? "PASSED" : "FAILED"}
                      </span>
                    </div>

                    {/* Progress score bar metric */}
                    <div style={{ marginTop: "4px" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "0.8rem",
                          marginBottom: "6px",
                        }}
                      >
                        <span style={{ color: "#a6adc8" }}>
                          Score: <strong style={{ color: "#ffffff" }}>{r.score}</strong> / {r.maxScore}
                        </span>
                        <strong style={{ color: isPass ? "#a6e3a1" : "#f38ba8" }}>{pct}%</strong>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          height: "6px",
                          backgroundColor: "rgba(255, 255, 255, 0.05)",
                          borderRadius: "3px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: `${pct}%`,
                            height: "100%",
                            borderRadius: "3px",
                            backgroundColor: isTerminated ? "#f38ba8" : isPass ? "#a6e3a1" : "#f38ba8",
                            boxShadow: `0 0 10px ${isTerminated ? "#f38ba8" : isPass ? "#a6e3a1" : "#f38ba8"}`
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sidebar Area: Overall Cumulative Analysis Board */}
          <div style={{ display: "flex", flexDirection: "column", gap: "30px", position: "sticky", top: "30px" }}>
            <div
              style={{
                background: "#0f111a",
                borderRadius: "16px",
                padding: "30px 24px",
                border: "1.5px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff", marginBottom: "24px", alignSelf: "flex-start" }}>
                Cumulative Metrics
              </h3>

              {/* Progress ring UI simulation */}
              <div
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  border: "10px solid rgba(255, 255, 255, 0.03)",
                  borderTopColor: "#89b4fa",
                  borderRightColor: "#89b4fa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginBottom: "24px",
                  boxShadow: "0 0 20px rgba(137, 180, 250, 0.05)",
                }}
              >
                <span style={{ fontSize: "2.2rem", fontWeight: 800, color: "#ffffff" }}>
                  {avgPercentage}%
                </span>
                <span
                  style={{
                    fontSize: "0.65rem",
                    color: "#a6adc8",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    letterSpacing: "0.5px",
                    marginTop: "2px",
                  }}
                >
                  AVG SCORE
                </span>
              </div>

              {/* Stats board lists */}
              <div
                style={{
                  width: "100%",
                  borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                  paddingTop: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
                  <span style={{ color: "#a6adc8" }}>Total Exams Taken:</span>
                  <strong style={{ color: "#ffffff" }}>{results.length}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
                  <span style={{ color: "#a6adc8" }}>Total Points Accumulated:</span>
                  <strong style={{ color: "#ffffff" }}>
                    {totalPointsScored} / {totalMaxPoints}
                  </strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
                  <span style={{ color: "#a6adc8" }}>Proctor Integrity Score:</span>
                  <strong style={{ color: proctorSafetyRating >= 80 ? "#a6e3a1" : "#f38ba8" }}>
                    {proctorSafetyRating}% Safe
                  </strong>
                </div>
              </div>

              {/* Faculty feedback card in natural Hinglish */}
              <div
                style={{
                  marginTop: "24px",
                  backgroundColor: feedback.bg,
                  borderRadius: "12px",
                  padding: "16px",
                  borderLeft: `4px solid ${feedback.color}`,
                  textAlign: "left",
                  width: "100%",
                }}
              >
                <h4 style={{ fontSize: "0.8rem", fontWeight: 800, marginBottom: "6px", color: "#ffffff", letterSpacing: "0.5px" }}>
                  FACULTY FEEDBACK
                </h4>
                <p style={{ fontSize: "0.78rem", color: "#cdd6f4", lineHeight: "1.5", margin: 0 }}>
                  {feedback.msg}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
