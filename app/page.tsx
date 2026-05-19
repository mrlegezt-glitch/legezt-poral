"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const COLLEGES = [
  { id: "liet", name: "Lords Institute of Engineering and Technology", shortName: "LIET", icon: "🎓", color: "14, 165, 233" }, // Sky blue
  { id: "mjcet", name: "Muffakham Jah College of Engineering and Technology", shortName: "MJCET", icon: "🏛️", color: "16, 185, 129" }, // Emerald green
  { id: "cbit", name: "Chaitanya Bharathi Institute of Technology", shortName: "CBIT", icon: "🏫", color: "244, 63, 94" }, // Rose red
  { id: "vce", name: "Vasavi College of Engineering", shortName: "VCE", icon: "📚", color: "139, 92, 246" } // Violet
] as const;

export default function PortalLandingPage() {
  const [selectedCollege, setSelectedCollege] = useState<{ id: string; name: string; shortName: string; icon: string; color: string } | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const stored = localStorage.getItem("selectedCollege");
    if (stored) {
      const match = COLLEGES.find(c => c.name === stored || c.id === stored);
      if (match) {
        setSelectedCollege(match);
      }
    }
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

  if (!selectedCollege) {
    return (
      <div className="portal-landing" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "60px 20px", position: "relative", overflow: "hidden" }}>
        {/* Glow Effects */}
        <div style={{ position: "absolute", top: "10%", left: "15%", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)", filter: "blur(40px)", zIndex: 0 }} />
        <div style={{ position: "absolute", bottom: "15%", right: "10%", width: "350px", height: "350px", background: "radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)", filter: "blur(50px)", zIndex: 0 }} />
        
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "800px", marginBottom: "50px" }}>
          <div className="portal-logo" style={{ fontSize: "3rem", fontWeight: 800, background: "linear-gradient(135deg, #ffffff 30%, #a5b4fc 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-1.5px", marginBottom: "16px" }}>
            🎓 Legezt Academic Network
          </div>
          <p style={{ color: "#94a3b8", fontSize: "1.2rem", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
            Select your institution to access assignments, grading systems, course documents, and classroom communication hubs.
          </p>
        </div>

        <div className="portal-college-grid" style={{ position: "relative", zIndex: 1 }}>
          {COLLEGES.map((c) => (
            <button 
              key={c.id} 
              onClick={() => handleSelectCollege(c)}
              className="portal-college-card"
              style={{
                background: "rgba(15, 23, 42, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "24px",
                padding: "40px 32px",
                cursor: "pointer",
                textAlign: "left",
                color: "#f4f4f5",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(16px)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = `rgba(${c.color}, 0.5)`;
                e.currentTarget.style.boxShadow = `0 20px 40px rgba(${c.color}, 0.15)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.2)";
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100%", background: `radial-gradient(circle at 10% 10%, rgba(${c.color}, 0.08), transparent 50%)`, zIndex: 0, pointerEvents: "none" }} />
              
              <div style={{ position: "relative", zIndex: 1, pointerEvents: "none" }}>
                <div style={{ fontSize: "3rem", marginBottom: "24px", display: "inline-block" }}>{c.icon}</div>
                <div style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "10px", letterSpacing: "-0.5px" }}>{c.shortName}</div>
                <div style={{ fontSize: "0.95rem", color: "#94a3b8", lineHeight: 1.6 }}>{c.name}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="portal-landing" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", padding: "40px 20px", overflow: "hidden" }}>
      {/* Background Glow */}
      <div style={{ position: "absolute", top: "25%", left: "50%", transform: "translate(-50%, -50%)", width: "500px", height: "500px", background: `radial-gradient(circle, rgba(${selectedCollege.color}, 0.12) 0%, transparent 70%)`, filter: "blur(60px)", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", marginBottom: "50px" }}>
        <div className="portal-logo" style={{ fontSize: "2.8rem", fontWeight: 800, letterSpacing: "-1px", marginBottom: "8px" }}>
          {selectedCollege.icon} {selectedCollege.shortName} Portal
        </div>
        <div className="portal-college" style={{ fontSize: "1.05rem", color: "#94a3b8", fontWeight: 500 }}>
          {selectedCollege.name}
        </div>
      </div>

      <div className="portal-cards" style={{ position: "relative", zIndex: 1 }}>
        {/* Student Card */}
        <a 
          href="/student/login" 
          className="portal-card student"
          style={{
            background: "rgba(15, 23, 42, 0.4)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "24px",
            padding: "48px 40px",
            width: "350px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            backdropFilter: "blur(16px)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.borderColor = "rgba(14, 165, 233, 0.4)";
            e.currentTarget.style.boxShadow = "0 25px 50px rgba(14, 165, 233, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100%", background: "radial-gradient(circle at 50% 10%, rgba(14, 165, 233, 0.08), transparent 60%)", pointerEvents: "none" }} />
          
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "space-between", pointerEvents: "none" }}>
            <div>
              <div className="portal-card-icon" style={{ fontSize: "3.5rem", marginBottom: "24px", textAlign: "center" }}>👨‍🎓</div>
              <h3 className="portal-card-title" style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 700, color: "var(--student-primary)", marginBottom: "12px", textAlign: "center" }}>Student Hub</h3>
              <p className="portal-card-desc" style={{ fontSize: "0.95rem", color: "#94a3b8", lineHeight: 1.6, textAlign: "center", marginBottom: "32px" }}>
                Access your academic records, messages, grading sheets, and download assignments from your faculty.
              </p>
            </div>
            <span className="portal-card-btn" style={{ background: "var(--student-primary)", color: "#fff", display: "inline-block", padding: "14px 32px", borderRadius: "999px", fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.5px", transition: "transform 0.2s" }}>
              Enter Student Portal
            </span>
          </div>
        </a>

        {/* Faculty Card */}
        <a 
          href="/faculty/login" 
          className="portal-card faculty"
          style={{
            background: "rgba(15, 23, 42, 0.4)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "24px",
            padding: "48px 40px",
            width: "350px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            backdropFilter: "blur(16px)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.4)";
            e.currentTarget.style.boxShadow = "0 25px 50px rgba(16, 185, 129, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100%", background: "radial-gradient(circle at 50% 10%, rgba(16, 185, 129, 0.08), transparent 60%)", pointerEvents: "none" }} />
          
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "space-between", pointerEvents: "none" }}>
            <div>
              <div className="portal-card-icon" style={{ fontSize: "3.5rem", marginBottom: "24px", textAlign: "center" }}>👨‍🏫</div>
              <h3 className="portal-card-title" style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 700, color: "var(--faculty-primary)", marginBottom: "12px", textAlign: "center" }}>Faculty Hub</h3>
              <p className="portal-card-desc" style={{ fontSize: "0.95rem", color: "#94a3b8", lineHeight: 1.6, textAlign: "center", marginBottom: "32px" }}>
                Orchestrate your assigned students, share document templates, take attendance logs, and communicate.
              </p>
            </div>
            <span className="portal-card-btn" style={{ background: "var(--faculty-primary)", color: "#fff", display: "inline-block", padding: "14px 32px", borderRadius: "999px", fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.5px", transition: "transform 0.2s" }}>
              Enter Faculty Portal
            </span>
          </div>
        </a>
      </div>

      <div style={{ marginTop: "50px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <button 
          onClick={handleClearCollege} 
          style={{ 
            background: "rgba(255, 255, 255, 0.03)", 
            border: "1px solid rgba(255, 255, 255, 0.08)", 
            color: "#94a3b8", 
            borderRadius: "12px",
            padding: "10px 20px",
            cursor: "pointer", 
            fontSize: "0.9rem",
            fontWeight: 500,
            transition: "all 0.2s"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#94a3b8";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
          }}
        >
          ← Change Institution
        </button>
      </div>
    </div>
  );
}
