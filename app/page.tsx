"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const COLLEGES = [
  { id: "liet", name: "Lords Institute of Engineering and Technology", shortName: "LIET", icon: "🎓", color: "14, 165, 233" }, // Sky blue
  { id: "mjcet", name: "Muffakham Jah College of Engineering and Technology", shortName: "MJCET", icon: "🏛️", color: "16, 185, 129" }, // Emerald green
  { id: "cbit", name: "Chaitanya Bharathi Institute of Technology", shortName: "CBIT", icon: "🏫", color: "244, 63, 94" }, // Rose red
  { id: "vce", name: "Vasavi College of Engineering", shortName: "VCE", icon: "📚", color: "139, 92, 246" } // Violet
] as const;

const APK_DRIVE_LINK = "https://drive.google.com/file/d/16AIqV0cCbOjIHUMn6lpVRV2nK_V_g3HO/view?usp=sharing";
const APK_DIRECT_DOWNLOAD = "https://drive.google.com/uc?export=download&id=16AIqV0cCbOjIHUMn6lpVRV2nK_V_g3HO";

export default function PortalLandingPage() {
  const [selectedCollege, setSelectedCollege] = useState<{ id: string; name: string; shortName: string; icon: string; color: string } | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [showAppBanner, setShowAppBanner] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const stored = localStorage.getItem("selectedCollege");
    if (stored) {
      const match = COLLEGES.find(c => c.name === stored || c.id === stored);
      if (match) {
        setSelectedCollege(match);
      }
    }
    const t = setTimeout(() => setShowAppBanner(true), 1500);
    return () => clearTimeout(t);
  }, []);

  function handleSelectCollege(college: typeof COLLEGES[number]) {
    setSelectedCollege(college);
    localStorage.setItem("selectedCollege", college.name);
  }

  function handleClearCollege() {
    setSelectedCollege(null);
    localStorage.removeItem("selectedCollege");
  }

  if (!isMounted) {
    return (
      <div className="portal-landing" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="spinner" />
      </div>
    );
  }

  return (
    <>
      {showAppBanner && (
        <div style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
          maxWidth: "360px",
          width: "calc(100vw - 48px)",
          background: "linear-gradient(135deg, rgba(14,165,233,0.15) 0%, rgba(37,99,235,0.18) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1.5px solid rgba(14,165,233,0.35)",
          borderRadius: "18px",
          padding: "22px 24px",
          boxShadow: "0 8px 40px rgba(14,165,233,0.18), 0 2px 8px rgba(0,0,0,0.4)",
          animation: "slideUp 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}>
          <style>{`
            @keyframes slideUp {
              from { transform: translateY(30px); opacity: 0; }
              to   { transform: translateY(0);    opacity: 1; }
            }
            .apk-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(14,165,233,0.45) !important; }
            .apk-btn { transition: all 0.2s ease; }
          `}</style>
          <button
            onClick={() => setShowAppBanner(false)}
            style={{ position: "absolute", top: "12px", right: "14px", background: "none", border: "none", color: "rgba(255,255,255,0.4)", fontSize: "18px", cursor: "pointer", lineHeight: 1 }}
            aria-label="Close"
          >✕</button>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <div style={{
              width: "40px", height: "40px", borderRadius: "12px",
              background: "linear-gradient(135deg,#0ea5e9,#2563eb)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "20px", flexShrink: 0,
            }}>📱</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#fff" }}>LeGeZt Student App</div>
              <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", marginTop: "1px" }}>Android • v1.0.0 • Free</div>
            </div>
          </div>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, margin: "0 0 16px 0" }}>
            Surprise exams, notifications, documents aur results — sab kuch ek jagah. Abhi install karo! 🚀
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
            <a
              href={APK_DIRECT_DOWNLOAD}
              target="_blank"
              rel="noopener noreferrer"
              className="apk-btn"
              style={{
                flex: 1,
                display: "block",
                textAlign: "center",
                background: "linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)",
                color: "#fff",
                padding: "10px 16px",
                borderRadius: "10px",
                fontWeight: 700,
                fontSize: "0.82rem",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(14,165,233,0.3)",
              }}
            >
              ⬇ Download APK
            </a>
            <a
              href={APK_DRIVE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="apk-btn"
              style={{
                display: "block",
                textAlign: "center",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.7)",
                padding: "10px 14px",
                borderRadius: "10px",
                fontWeight: 600,
                fontSize: "0.82rem",
                textDecoration: "none",
              }}
            >
              Drive
            </a>
          </div>
        </div>
      )}

      <div className="portal-landing">
        {!selectedCollege ? (
          <>
            <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "800px", marginBottom: "50px" }}>
              <div className="portal-logo">Legezt Academic Network</div>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
                Select your institution to access assignments, grading systems, course documents, and classroom communication hubs.
              </p>
            </div>
            <div className="portal-cards" style={{ position: "relative", zIndex: 1 }}>
              {COLLEGES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleSelectCollege(c)}
                  className="portal-card"
                  style={{
                    textAlign: "left",
                    alignItems: "flex-start",
                    padding: "36px",
                    width: "270px",
                    borderColor: `rgba(${c.color}, 0.25)`,
                    ['--hover-color' as any]: `rgba(${c.color}, 1)`,
                    ['--hover-bg-glow' as any]: `rgba(${c.color}, 0.06)`,
                  }}
                >
                  <div style={{ position: "relative", zIndex: 1, pointerEvents: "none" }}>
                    <div
                      className="portal-card-shortname"
                      style={{ fontSize: "1.65rem", fontWeight: 800, marginBottom: "12px", letterSpacing: "-0.5px", color: "var(--text-primary)", transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
                    >
                      {c.shortName}
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{c.name}</div>
                  </div>
                  <span className="college-dot" style={{ position: 'absolute', top: '24px', right: '24px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: `rgb(${c.color})`, boxShadow: `0 0 12px rgba(${c.color}, 0.7)` }} />
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <div style={{ position: "relative", zIndex: 1, textAlign: "center", marginBottom: "50px" }}>
              <div className="portal-logo">{selectedCollege.shortName} Portal</div>
              <div className="portal-college">{selectedCollege.name}</div>
            </div>
            <div className="portal-cards" style={{ position: "relative", zIndex: 1 }}>
              <a href="/student/login" className="portal-card student" style={{ width: "350px" }}>
                <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "space-between", pointerEvents: "none" }}>
                  <div>
                    <h3 className="portal-card-title">Student Hub</h3>
                    <p className="portal-card-desc">Access your academic records, messages, grading sheets, and download assignments from your faculty.</p>
                  </div>
                  <span className="portal-card-btn">Enter Student Portal</span>
                </div>
              </a>
              <a href="/faculty/login" className="portal-card faculty" style={{ width: "350px" }}>
                <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "space-between", pointerEvents: "none" }}>
                  <div>
                    <h3 className="portal-card-title">Faculty Hub</h3>
                    <p className="portal-card-desc">Orchestrate your assigned students, share document templates, take attendance logs, and communicate.</p>
                  </div>
                  <span className="portal-card-btn">Enter Faculty Portal</span>
                </div>
              </a>
            </div>
            <div
              style={{
                marginTop: "48px",
                borderRadius: "20px",
                padding: "32px 36px",
                maxWidth: "730px",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "24px",
                background: "linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(37,99,235,0.1) 100%)",
                border: "1.5px solid rgba(14, 165, 233, 0.2)",
                boxShadow: "0 0 40px rgba(14, 165, 233, 0.06)",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div style={{ position: "absolute", top: "-1px", left: "40px", right: "40px", height: "2px", background: "linear-gradient(90deg, transparent, #0ea5e9, transparent)", borderRadius: "2px" }} />
              <div style={{ flex: 1, minWidth: "260px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: "bold", background: "rgba(14,165,233,0.15)", color: "#0ea5e9", padding: "2px 8px", borderRadius: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>
                    📱 Mobile App
                  </span>
                  <span style={{ fontSize: "0.72rem", color: "var(--success)", fontWeight: "bold" }}>✓ Stable v1.0.0</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700, margin: "0 0 8px 0" }}>
                  Install LeGeZt Student App
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.83rem", lineHeight: 1.6, margin: 0 }}>
                  Surprise exam alerts 🔔, live results, documents aur notifications — seedha phone par. Android ke liye free download.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", minWidth: "160px" }}>
                <a
                  href={APK_DIRECT_DOWNLOAD}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portal-card-btn"
                  style={{
                    background: "linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)",
                    color: "#ffffff",
                    border: "none",
                    padding: "13px 28px",
                    boxShadow: "0 4px 20px rgba(14, 165, 233, 0.35)",
                    fontWeight: "bold",
                    cursor: "pointer",
                    textAlign: "center",
                    borderRadius: "10px",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    display: "block",
                  }}
                >
                  ⬇ Download APK
                </a>
                <a
                  href={APK_DRIVE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textAlign: "center",
                    color: "rgba(255,255,255,0.45)",
                    fontSize: "0.75rem",
                    textDecoration: "none",
                  }}
                >
                  Open in Google Drive ↗
                </a>
              </div>
            </div>
            <div style={{ marginTop: "40px", textAlign: "center", position: "relative", zIndex: 1 }}>
              <button onClick={handleClearCollege} className="btn-sm">Change Institution</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
