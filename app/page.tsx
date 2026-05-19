"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const COLLEGES = [
  { id: "liet", name: "Lords Institute of Engineering and Technology", shortName: "LIET", icon: "🎓" },
  { id: "mjcet", name: "Muffakham Jah College of Engineering and Technology", shortName: "MJCET", icon: "🏛️" },
  { id: "cbit", name: "Chaitanya Bharathi Institute of Technology", shortName: "CBIT", icon: "🏫" },
  { id: "vce", name: "Vasavi College of Engineering", shortName: "VCE", icon: "📚" }
] as const;

export default function PortalLandingPage() {
  const [selectedCollege, setSelectedCollege] = useState<{ id: string; name: string; shortName: string; icon: string } | null>(null);
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
      <div className="portal-landing" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "40px 20px" }}>
        <div className="portal-logo" style={{ fontSize: "2.5rem", marginBottom: 12, textAlign: "center" }}>🎓 Legezt Academic Network</div>
        <div style={{ color: "#94a3b8", fontSize: "1.1rem", marginBottom: 40, textAlign: "center", maxWidth: 600 }}>
          Select your institution to access assignments, grading, shared documents, and class communication channels.
        </div>
        <div className="portal-college-grid">
          {COLLEGES.map((c) => (
            <button 
              key={c.id} 
              onClick={() => handleSelectCollege(c)}
              className="portal-college-card"
            >
              <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>{c.icon}</div>
              <div style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: 8 }}>{c.shortName}</div>
              <div style={{ fontSize: "0.9rem", color: "#a1a1aa", lineHeight: 1.5 }}>{c.name}</div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="portal-landing">
      <div className="portal-logo">{selectedCollege.icon} {selectedCollege.shortName} Portal</div>
      <div className="portal-college">{selectedCollege.name}</div>
      <div className="portal-cards">
        <div className="portal-card student">
          <div className="portal-card-icon">👨‍🎓</div>
          <div className="portal-card-title">Student Portal</div>
          <div className="portal-card-desc">
            Access your academic records, messages, documents, and assignments from your faculty.
          </div>
          <Link href="/student/login" className="portal-card-btn">Enter Student Portal</Link>
        </div>
        <div className="portal-card faculty">
          <div className="portal-card-icon">👨‍🏫</div>
          <div className="portal-card-title">Faculty Portal</div>
          <div className="portal-card-desc">
            Monitor your assigned students, share documents, take attendance, and communicate.
          </div>
          <Link href="/faculty/login" className="portal-card-btn">Enter Faculty Portal</Link>
        </div>
      </div>
      <div style={{ marginTop: 40, textAlign: "center" }}>
        <button onClick={handleClearCollege} style={{ background: "none", border: "none", color: "#94a3b8", textDecoration: "underline", cursor: "pointer", fontSize: "0.9rem" }}>
          Change College
        </button>
      </div>
    </div>
  );
}
