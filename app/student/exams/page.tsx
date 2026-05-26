"use client";
import { useEffect, useState, useRef } from "react";

interface Exam {
  id: string;
  title: string;
  durationMins: number;
  latitude: number;
  longitude: number;
  radiusMeters: number;
  createdAt: string;
}

interface Question {
  id: string;
  questionText: string;
  options: {
    originalKey: string;
    displayKey: string;
    optionText: string;
  }[];
  marks: number;
}

export default function StudentExamsPage() {
  const [activeExams, setActiveExams] = useState<Exam[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeExam, setActiveExam] = useState<Exam | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [submissionId, setSubmissionId] = useState<string | null>(null);

  // Exam taking state
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeftSec, setTimeLeftSec] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [examConcluded, setExamConcluded] = useState<"submitted" | "terminated" | null>(null);

  // Proctor state
  const [infractions, setInfractions] = useState(0);
  const [isTabSwitched, setIsTabSwitched] = useState(false);
  const [switchCountdown, setSwitchCountdown] = useState(40);
  const [isWithinFence, setIsWithinFence] = useState<boolean | null>(null);
  const [gpsDistance, setGpsDistance] = useState<number | null>(null);

  // Media references
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const countdownTimerRef = useRef<NodeJS.Timeout | null>(null);
  const examTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Load active exams list
  useEffect(() => {
    fetchActiveExams();
    return () => {
      stopCamera();
      clearIntervals();
    };
  }, []);

  const fetchActiveExams = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/student/exams/active");
      if (res.ok) {
        const data = await res.json();
        setActiveExams(data.exams || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const clearIntervals = () => {
    if (countdownTimerRef.current) clearInterval(countdownTimerRef.current);
    if (examTimerRef.current) clearInterval(examTimerRef.current);
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  };

  // Haversine GPS formula to compute distance
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371e3; // metres
    const phi1 = (lat1 * Math.PI) / 180;
    const phi2 = (lat2 * Math.PI) / 180;
    const deltaPhi = ((lat2 - lat1) * Math.PI) / 180;
    const deltaLambda = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
      Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // in metres
  };

  // Launch camera device preview
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (e) {
      alert("Proctoring Lens Required. Please enable webcam permissions to proceed.");
      throw e;
    }
  };

  // Validate geofence & launch exam
  const handleLaunchExam = async (exam: Exam) => {
    if (!navigator.geolocation) {
      alert("GPS positioning services required to take exams.");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const distance = calculateDistance(
          position.coords.latitude,
          position.coords.longitude,
          exam.latitude,
          exam.longitude
        );

        setGpsDistance(distance);

        if (distance > exam.radiusMeters) {
          setIsWithinFence(false);
          setLoading(false);
          alert(
            `Geofence validation failed. You are currently ${Math.round(
              distance
            )} meters away from the center coordinate. Walk closer than ${exam.radiusMeters}m to enter.`
          );
          return;
        }

        setIsWithinFence(true);

        try {
          // Attempt camera start
          await startCamera();

          // Fetch exam questions
          const res = await fetch(`/api/student/exams/${exam.id}`);
          const data = await res.json();

          if (res.ok) {
            setActiveExam(exam);
            setQuestions(data.exam.questions || []);
            setSubmissionId(data.submissionId);
            setTimeLeftSec(exam.durationMins * 60);

            // Enable fullscreen
            try {
              if (document.documentElement.requestFullscreen) {
                await document.documentElement.requestFullscreen();
              }
            } catch (err) {
              console.warn("Fullscreen request bypassed:", err);
            }

            // Start Exam clocks & active proctors
            startExamClock();
            setupWebProctorObservers(exam.id);
          } else {
            alert(data.error || "Failed to initiate exam sheet.");
          }
        } catch (e) {
          console.error(e);
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        setLoading(false);
        alert("Failed to resolve GPS coordinates. Please allow location tracking.");
      },
      { enableHighAccuracy: true }
    );
  };

  // Setup browsers window focus listeners for proctoring
  const setupWebProctorObservers = (examId: string) => {
    const handleBlur = () => {
      triggerInfractionAlert(examId);
    };

    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        triggerInfractionAlert(examId);
      }
    };

    const handleFullscreenExit = () => {
      if (!document.fullscreenElement) {
        alert("CRITICAL WARNING: Exam must remain in fullscreen! Please request fullscreen again.");
      }
    };

    window.addEventListener("blur", handleBlur);
    document.addEventListener("visibilitychange", handleVisibility);
    document.addEventListener("fullscreenchange", handleFullscreenExit);

    // Save cleaner methods on window object
    (window as any)._cleanProctorListeners = () => {
      window.removeEventListener("blur", handleBlur);
      document.removeEventListener("visibilitychange", handleVisibility);
      document.removeEventListener("fullscreenchange", handleFullscreenExit);
    };
  };

  const triggerInfractionAlert = async (examId: string) => {
    setIsTabSwitched(true);
    setSwitchCountdown(40);
    setInfractions((prev) => {
      const nextCount = prev + 1;

      // Report anomaly
      fetch(`/api/student/exams/${examId}/anomaly`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "APP_BACKGROUNDED" }),
      }).catch(console.error);

      // Infraction Threshold Exceeded -> Force Terminate!
      if (nextCount >= 2) {
        clearIntervals();
        handleForceSubmitExam(examId, true);
      }

      return nextCount;
    });

    // Start 40-sec grace countdown
    if (countdownTimerRef.current) clearInterval(countdownTimerRef.current);
    countdownTimerRef.current = setInterval(() => {
      setSwitchCountdown((curr) => {
        if (curr <= 1) {
          clearInterval(countdownTimerRef.current!);
          handleForceSubmitExam(examId, true);
          return 0;
        }
        return curr - 1;
      });
    }, 1000);
  };

  const handleReturnToExam = () => {
    setIsTabSwitched(false);
    if (countdownTimerRef.current) clearInterval(countdownTimerRef.current);
  };

  const startExamClock = () => {
    if (examTimerRef.current) clearInterval(examTimerRef.current);
    examTimerRef.current = setInterval(() => {
      setTimeLeftSec((time) => {
        if (time <= 1) {
          clearInterval(examTimerRef.current!);
          handleForceSubmitExam(activeExam!.id, false);
          return 0;
        }
        return time - 1;
      });
    }, 1000);
  };

  // Submit Exam Answers controller
  const handleForceSubmitExam = async (examId: string, forceTerminate: boolean) => {
    setIsSubmitting(true);
    clearIntervals();
    stopCamera();

    if ((window as any)._cleanProctorListeners) {
      (window as any)._cleanProctorListeners();
    }

    // Exit fullscreen
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(console.error);
    }

    const answersList = Object.entries(answers).map(([qId, sKey]) => ({
      questionId: qId as string,
      selectedKey: sKey as string,
    }));

    try {
      const res = await fetch(`/api/student/exams/${examId}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answers: answersList,
          forceTerminate,
        }),
      });

      if (res.ok) {
        setExamConcluded(forceTerminate ? "terminated" : "submitted");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padLeft(2, "0")}:${secs.toString().padLeft(2, "0")}`;
  };

  const handleOptionSelect = (qId: string, optionKey: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: optionKey }));
  };

  if (examConcluded) {
    return (
      <div className="portal-main" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
        <div className="glass-panel" style={{ padding: "40px", maxWidth: "500px", width: "90%", textAlign: "center", background: "var(--bg-panel)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-muted)" }}>
          {examConcluded === "terminated" ? (
            <>
              <div style={{ fontSize: "3rem", color: "var(--error)", marginBottom: "16px" }}>🔒</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", color: "var(--error)", marginBottom: "12px" }}>SESSION TERMINATED</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                Your exam session was forcibly concluded due to security focus infractions. 
                Please contact the assigned faculty administrator to review your logs and unlock this exam room.
              </p>
            </>
          ) : (
            <>
              <div style={{ fontSize: "3rem", color: "var(--success)", marginBottom: "16px" }}>✔️</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", color: "var(--text-primary)", marginBottom: "12px" }}>SHEET SUBMITTED</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                Your exam sheet answers have been securely uploaded to the institutional database block. 
                Your score will be logged in your academic history drawer once faculty closes the proctor monitors.
              </p>
            </>
          )}
          <button className="btn-primary" onClick={() => { setActiveExam(null); setExamConcluded(null); fetchActiveExams(); }} style={{ marginTop: "24px" }}>
            Return to Exams
          </button>
        </div>
      </div>
    );
  }

  if (activeExam) {
    const q = questions[currentIdx];
    return (
      <div className="portal-main" style={{ position: "relative", minHeight: "90vh", background: "#f8fafc" }}>
        {/* Top bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", background: "var(--bg-panel)", borderBottom: "1px solid var(--border-muted)" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem" }}>{activeExam.title}</h2>
            <span style={{ fontSize: "0.7rem", color: "var(--student-accent)", fontWeight: "bold", letterSpacing: 0.5 }}>
              PROCTORING MONITOR ONLINE
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "0.65rem", color: "var(--text-secondary)", fontWeight: "bold" }}>TIME REMAINING</div>
              <span style={{ fontFamily: "monospace", fontWeight: "bold", fontSize: "1.2rem", color: timeLeftSec < 60 ? "var(--error)" : "var(--text-primary)" }}>
                {formatTime(timeLeftSec)}
              </span>
            </div>
            <button className="btn-outline" onClick={() => handleForceSubmitExam(activeExam.id, false)} style={{ borderColor: "var(--error)", color: "var(--error)" }}>
              Finish Sheet
            </button>
          </div>
        </div>

        {/* Layout split */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "24px", padding: "24px" }}>
          {/* Main Question console */}
          <div>
            {q && (
              <div className="glass-panel" style={{ padding: "30px", background: "var(--bg-panel)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-muted)", marginBottom: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", fontWeight: "bold", color: "var(--text-muted)", marginBottom: "16px" }}>
                  <span>QUESTION {currentIdx + 1} OF {questions.length}</span>
                  <span style={{ color: "var(--student-accent)" }}>{q.marks} Mark(s)</span>
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.5, marginBottom: "24px" }}>{q.questionText}</h3>
                
                {/* Options List */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {q.options.map((opt) => {
                    const isSelected = answers[q.id] === opt.originalKey;
                    return (
                      <button
                        key={opt.originalKey}
                        onClick={() => handleOptionSelect(q.id, opt.originalKey)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          textAlign: "left",
                          padding: "16px 20px",
                          background: isSelected ? "var(--bg-hover)" : "var(--bg-panel)",
                          border: `1.5px solid ${isSelected ? "var(--student-accent)" : "var(--border-muted)"}`,
                          borderRadius: "var(--radius-md)",
                          cursor: "pointer",
                          transition: "all 0.15s ease",
                        }}
                      >
                        <span style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          border: `1.5px solid ${isSelected ? "var(--student-accent)" : "var(--border-muted)"}`,
                          background: isSelected ? "var(--student-accent)" : "transparent",
                          color: isSelected ? "#ffffff" : "var(--text-secondary)",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.75rem",
                          fontWeight: "bold",
                          marginRight: "14px",
                        }}>
                          {opt.displayKey}
                        </span>
                        <span style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontWeight: isSelected ? 600 : 400 }}>
                          {opt.optionText}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Nav controls */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button className="btn-outline" disabled={currentIdx === 0} onClick={() => setCurrentIdx((c) => c - 1)}>
                Previous Question
              </button>
              <button className="btn-primary" disabled={currentIdx === questions.length - 1} onClick={() => setCurrentIdx((c) => c + 1)} style={{ width: "auto" }}>
                Next Question
              </button>
            </div>
          </div>

          {/* Proctor Sidebar */}
          <div>
            <div className="glass-panel" style={{ padding: "20px", background: "var(--bg-panel)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-muted)" }}>
              <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: 0.5, marginBottom: "12px", color: "var(--text-secondary)" }}>PROCTOR LENS</h4>
              
              {/* Webcam preview */}
              <div style={{ width: "100%", height: "180px", borderRadius: "var(--radius-md)", background: "#000", border: "1px solid var(--border-muted)", overflow: "hidden", marginBottom: "16px", position: "relative" }}>
                <video ref={videoRef} autoPlay playsInline muted style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", bottom: "10px", left: "10px", background: "rgba(0, 240, 255, 0.1)", border: "1px solid var(--student-accent)", color: "#2563eb", fontSize: "0.6rem", fontWeight: "bold", padding: "4px 8px", borderRadius: "4px" }}>
                  AI LENS CONNECTED
                </div>
              </div>

              {/* Stats & Infractions */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", borderBottom: "1px solid var(--border-muted)", paddingBottom: "8px" }}>
                  <span style={{ color: "var(--text-secondary)" }}>Focus Infractions:</span>
                  <span style={{ fontWeight: "bold", color: infractions > 0 ? "var(--error)" : "var(--success)" }}>{infractions} / 2</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem" }}>
                  <span style={{ color: "var(--text-secondary)" }}>Geofence Radius:</span>
                  <span style={{ fontWeight: "bold", color: "var(--success)" }}>Safe Inside</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab switch infraction overlay warning */}
        {isTabSwitched && (
          <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(15, 23, 42, 0.95)", backdropFilter: "blur(6px)", zIndex: 9999, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="glass-panel" style={{ padding: "40px", maxWidth: "500px", width: "90%", background: "var(--bg-panel)", borderRadius: "var(--radius-lg)", border: "1.5px solid var(--error)", textAlign: "center", boxShadow: "0 10px 40px rgba(220, 38, 38, 0.1)" }}>
              <div style={{ fontSize: "3rem", color: "var(--error)", marginBottom: "16px" }}>⚠️</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", color: "var(--error)", marginBottom: "12px", letterSpacing: 1.5 }}>SECURITY BREACH ATTEMPTED</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                You have lost page focus. Do not switch tabs, minimize, or navigate away from this exam chamber window! 
                Return to the interface immediately before the grace timer terminates your session forcibly.
              </p>
              <div style={{ fontSize: "3.5rem", fontFamily: "monospace", fontWeight: "bold", color: "var(--error)", margin: "24px 0" }}>
                {switchCountdown}s
              </div>
              <button className="btn-primary" onClick={handleReturnToExam} style={{ backgroundColor: "var(--text-primary)", color: "#ffffff" }}>
                Return to Exam Chamber
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="portal-main" style={{ padding: "30px 40px" }}>
      <div style={{ marginBottom: "30px" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.8rem" }}>SURPRISE EXAM PORTAL</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", marginTop: "4px" }}>
          Active secure examination rooms listed below. Double geofence and WebRTC active proctor shields are active.
        </p>
      </div>

      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", padding: "60px" }}>
          <div className="spinner" />
        </div>
      ) : activeExams.length === 0 ? (
        <div style={{ background: "var(--bg-panel)", border: "1px solid var(--border-muted)", borderRadius: "var(--radius-lg)", padding: "60px", textAlign: "center" }}>
          <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "var(--bg-deep)", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            🔒
          </div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px" }}>No Surprise Exams Live</h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", maxWidth: "400px", margin: "0 auto" }}>
            All clear. There are currently no active surprise test sessions scheduled for your branch and year. Check back when notified!
          </p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
          {activeExams.map((exam) => (
            <div key={exam.id} className="glass-panel" style={{ padding: "24px", background: "var(--bg-panel)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-muted)", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "200px" }}>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--text-primary)", marginBottom: "6px" }}>{exam.title}</h3>
                <span className="badge active" style={{ fontSize: "0.65rem", padding: "4px 8px", backgroundColor: "rgba(37, 99, 235, 0.08)", color: "var(--student-accent)", fontWeight: "bold" }}>
                  {exam.durationMins} Mins Duration
                </span>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.75rem", marginTop: "12px" }}>
                  Geofence radius center: <strong style={{ color: "var(--text-primary)" }}>{exam.radiusMeters}m</strong> perimeter lock.
                </div>
              </div>
              <button className="btn-primary" onClick={() => handleLaunchExam(exam)}>
                Launch Secure Exam Room
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
