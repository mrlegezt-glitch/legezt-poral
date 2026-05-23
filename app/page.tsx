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
      <div className="portal-landing">
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "800px", marginBottom: "50px" }}>
          <div className="portal-logo">
            Legezt Academic Network
          </div>
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
                  style={{ 
                    fontSize: "1.65rem", 
                    fontWeight: 800, 
                    marginBottom: "12px", 
                    letterSpacing: "-0.5px",
                    color: "var(--text-primary)",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                >
                  {c.shortName}
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{c.name}</div>
              </div>
              <span className="college-dot" style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: `rgb(${c.color})`,
                boxShadow: `0 0 12px rgba(${c.color}, 0.7)`,
              }} />
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="portal-landing">
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", marginBottom: "50px" }}>
        <div className="portal-logo">
          {selectedCollege.shortName} Portal
        </div>
        <div className="portal-college">
          {selectedCollege.name}
        </div>
      </div>

      <div className="portal-cards" style={{ position: "relative", zIndex: 1 }}>
        {/* Student Card */}
        <a 
          href="/student/login" 
          className="portal-card student"
          style={{ width: "350px" }}
        >
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "space-between", pointerEvents: "none" }}>
            <div>
              <h3 className="portal-card-title">Student Hub</h3>
              <p className="portal-card-desc">
                Access your academic records, messages, grading sheets, and download assignments from your faculty.
              </p>
            </div>
            <span className="portal-card-btn">
              Enter Student Portal
            </span>
          </div>
        </a>

        {/* Faculty Card */}
        <a 
          href="/faculty/login" 
          className="portal-card faculty"
          style={{ width: "350px" }}
        >
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "space-between", pointerEvents: "none" }}>
            <div>
              <h3 className="portal-card-title">Faculty Hub</h3>
              <p className="portal-card-desc">
                Orchestrate your assigned students, share document templates, take attendance logs, and communicate.
              </p>
            </div>
            <span className="portal-card-btn">
              Enter Faculty Portal
            </span>
          </div>
        </a>
      </div>

      <div style={{ marginTop: "50px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <button 
          onClick={handleClearCollege} 
          className="btn-sm"
        >
          Change Institution
        </button>
      </div>
    </div>
  );
}
