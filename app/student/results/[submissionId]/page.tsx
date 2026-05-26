"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Question {
  id: string;
  questionText: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctOption: string;
  marks: number;
}

interface StudentAnswer {
  questionId: string;
  selectedKey: string;
  isCorrect: boolean;
}

interface ExamSubmissionDetail {
  id: string;
  examId: string;
  score: number;
  status: string;
  submittedAt: string | null;
  exam: {
    title: string;
    durationMins: number;
    questions: Question[];
  };
  answers: StudentAnswer[];
}

export default function ResultDetailPage() {
  const { submissionId } = useParams();
  const [detail, setDetail] = useState<ExamSubmissionDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!submissionId) return;

    fetch(`/api/student/exams/results/${submissionId}`)
      .then((r) => {
        if (!r.ok) {
          if (r.status === 404) {
            throw new Error("Result details not found or not published by faculty yet.");
          }
          throw new Error("Failed to load result details.");
        }
        return r.json();
      })
      .then((data) => {
        if (data.success) {
          setDetail(data.submission);
        } else {
          throw new Error(data.error || "Failed to load details.");
        }
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [submissionId]);

  if (loading) {
    return (
      <div style={containerStyle}>
        <div style={{ display: "flex", justifyContent: "center", padding: "80px" }}>
          <div className="spinner" />
        </div>
      </div>
    );
  }

  if (error || !detail) {
    return (
      <div style={containerStyle}>
        <div style={errorCardStyle}>
          <div style={{ fontSize: "3rem", marginBottom: "20px" }}>⚠️</div>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "10px" }}>Access Denied / Error</h3>
          <p style={{ color: "#a6adc8", fontSize: "0.85rem", lineHeight: "1.6", marginBottom: "20px" }}>
            {error || "Submission record details could not be found."}
          </p>
          <a href="/student/results" style={backButtonStyle}>
            &larr; Go Back to Performance Sheet
          </a>
        </div>
      </div>
    );
  }

  const exam = detail.exam;
  const questions = exam.questions;
  const maxScore = questions.reduce((acc, q) => acc + q.marks, 0);
  const pct = maxScore > 0 ? Math.round((detail.score / maxScore) * 100) : 0;
  const isPass = pct >= 50;

  return (
    <div style={containerStyle}>
      {/* Header section */}
      <div style={headerStyle}>
        <div>
          <a href="/student/results" style={backLinkStyle}>
            &larr; Back to Results
          </a>
          <h1 style={titleStyle}>{exam.title.toUpperCase()} - REVIEW</h1>
          <p style={{ color: "#a6adc8", fontSize: "0.85rem", marginTop: "6px" }}>
            Check correct options and review errors.
          </p>
        </div>

        <div style={scoreBoxStyle(isPass)}>
          <span style={{ fontSize: "0.75rem", textTransform: "uppercase", fontWeight: "bold", color: "#a6adc8" }}>
            Your Score
          </span>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, margin: "5px 0 0 0", color: "#ffffff" }}>
            {detail.score} <span style={{ fontSize: "1rem", color: "#a6adc8" }}>/ {maxScore}</span>
          </h2>
          <span style={{ fontSize: "0.8rem", fontWeight: 700, color: isPass ? "#a6e3a1" : "#f38ba8" }}>
            {pct}% ({isPass ? "Passed" : "Needs Improvement"})
          </span>
        </div>
      </div>

      {/* Main Review Section */}
      <div style={mainContentStyle}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {questions.map((q, index) => {
            const studentAns = detail.answers.find((ans) => ans.questionId === q.id);
            const selectedKey = studentAns?.selectedKey || "N/A";
            const correctKey = q.correctOption.toUpperCase();
            const isCorrect = selectedKey === correctKey;

            const options = [
              { key: "A", val: q.optionA },
              { key: "B", val: q.optionB },
              { key: "C", val: q.optionC },
              { key: "D", val: q.optionD }
            ];

            return (
              <div key={q.id} style={questionCardStyle(isCorrect, selectedKey === "N/A")}>
                {/* Question Info Header */}
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "10px" }}>
                  <strong style={{ color: "#ffffff", fontSize: "0.95rem" }}>
                    Question {index + 1}
                  </strong>
                  <span style={{
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                    color: selectedKey === "N/A" ? "#f38ba8" : isCorrect ? "#a6e3a1" : "#f38ba8",
                    backgroundColor: selectedKey === "N/A" ? "rgba(243,139,168,0.1)" : isCorrect ? "rgba(166,227,161,0.1)" : "rgba(243,139,168,0.1)",
                    padding: "4px 10px",
                    borderRadius: "6px"
                  }}>
                    {selectedKey === "N/A" ? "UNANSWERED (0 pts)" : isCorrect ? `CORRECT (+${q.marks} pts)` : "INCORRECT (0 pts)"}
                  </span>
                </div>

                {/* Question Text */}
                <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#cdd6f4", marginBottom: "20px" }}>
                  {q.questionText}
                </p>

                {/* Options List */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {options.map((opt) => {
                    const isOptionCorrect = opt.key === correctKey;
                    const isOptionSelected = opt.key === selectedKey;

                    let optBg = "rgba(255, 255, 255, 0.02)";
                    let optBorder = "1px solid rgba(255, 255, 255, 0.05)";
                    let optBadge = null;

                    if (isOptionCorrect) {
                      optBg = "rgba(166, 227, 161, 0.1)";
                      optBorder = "1px solid rgba(166, 227, 161, 0.4)";
                      optBadge = <span style={{ color: "#a6e3a1", fontWeight: "bold", fontSize: "0.75rem", marginLeft: "auto" }}>✓ Correct Option</span>;
                    } else if (isOptionSelected) {
                      optBg = "rgba(243, 139, 168, 0.1)";
                      optBorder = "1px solid rgba(243, 139, 168, 0.4)";
                      optBadge = <span style={{ color: "#f38ba8", fontWeight: "bold", fontSize: "0.75rem", marginLeft: "auto" }}>✗ Your Incorrect Choice</span>;
                    }

                    return (
                      <div key={opt.key} style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "14px 18px",
                        borderRadius: "10px",
                        background: optBg,
                        border: optBorder,
                        transition: "all 0.2s ease"
                      }}>
                        <span style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          backgroundColor: isOptionCorrect ? "#a6e3a1" : isOptionSelected ? "#f38ba8" : "rgba(255,255,255,0.05)",
                          color: isOptionCorrect || isOptionSelected ? "#07080d" : "#cdd6f4",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.8rem",
                          fontWeight: "bold",
                          marginRight: "14px"
                        }}>
                          {opt.key}
                        </span>
                        <span style={{ fontSize: "0.9rem", color: "#cdd6f4" }}>{opt.val}</span>
                        {optBadge}
                      </div>
                    );
                  })}
                </div>

                {/* Natural Hinglish Explanatory Card */}
                <div style={{
                  marginTop: "16px",
                  background: "rgba(255, 255, 255, 0.02)",
                  borderRadius: "8px",
                  padding: "12px 16px",
                  borderLeft: `3px solid ${isCorrect ? "#a6e3a1" : "#f38ba8"}`,
                  fontSize: "0.8rem",
                  color: "#a6adc8"
                }}>
                  {selectedKey === "N/A" ? (
                    <span>Aapne is question ka answer nahi diya tha. Sahi option <strong>{correctKey}</strong> hai.</span>
                  ) : isCorrect ? (
                    <span style={{ color: "#a6e3a1" }}>🎉 Shabash! Aapka select kiya hua option <strong>{selectedKey}</strong> bilkul sahi hai.</span>
                  ) : (
                    <span>Aapne option <strong>{selectedKey}</strong> choose kiya tha jo galat hai. Iska sahi answer option <strong>{correctKey}</strong> hai.</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Styling Variables (Glassmorphic dark theme matches page.tsx)
const containerStyle: React.CSSProperties = {
  padding: "30px 40px",
  backgroundColor: "#07080d",
  minHeight: "100vh",
  color: "#cdd6f4",
  fontFamily: "'Outfit', 'Inter', system-ui, sans-serif",
};

const headerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "35px",
  borderBottom: "1px solid rgba(255,255,255,0.05)",
  paddingBottom: "20px",
};

const backLinkStyle: React.CSSProperties = {
  fontSize: "0.8rem",
  color: "#89b4fa",
  textDecoration: "none",
  fontWeight: "bold",
  display: "inline-block",
  marginBottom: "10px",
};

const titleStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontWeight: 800,
  fontSize: "1.8rem",
  letterSpacing: "-0.5px",
  background: "linear-gradient(90deg, #89b4fa, #f38ba8)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  margin: 0,
};

const scoreBoxStyle = (isPass: boolean): React.CSSProperties => ({
  background: "rgba(255, 255, 255, 0.02)",
  border: `1.5px solid ${isPass ? "rgba(166, 227, 161, 0.2)" : "rgba(243, 139, 168, 0.2)"}`,
  padding: "12px 24px",
  borderRadius: "14px",
  textAlign: "right",
  display: "flex",
  flexDirection: "column",
  gap: "2px",
});

const mainContentStyle: React.CSSProperties = {
  maxWidth: "800px",
  margin: "0 auto 50px auto",
};

const questionCardStyle = (isCorrect: boolean, isUnanswered: boolean): React.CSSProperties => ({
  background: "#0f111a",
  borderRadius: "16px",
  padding: "24px",
  border: `1.5px solid ${isUnanswered ? "rgba(243, 139, 168, 0.15)" : isCorrect ? "rgba(166, 227, 161, 0.15)" : "rgba(243, 139, 168, 0.15)"}`,
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
});

const errorCardStyle: React.CSSProperties = {
  background: "#0f111a",
  border: "1px dashed rgba(255,255,255,0.1)",
  borderRadius: "16px",
  padding: "50px 30px",
  textAlign: "center",
  maxWidth: "500px",
  margin: "80px auto 0 auto",
};

const backButtonStyle: React.CSSProperties = {
  background: "rgba(137, 180, 250, 0.1)",
  border: "1px solid rgba(137, 180, 250, 0.3)",
  color: "#89b4fa",
  padding: "10px 20px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "0.85rem",
  display: "inline-block",
};
