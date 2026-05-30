"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Coffee,
  Layers,
  Shield,
  Users,
  BookOpen,
  Smartphone,
  Sparkles,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  ExternalLink,
  Code,
  Lock,
  Cpu
} from "lucide-react";

const COLLEGES = [
  { id: "liet", name: "Lords Institute of Engineering and Technology", shortName: "LIET", icon: "🎓", color: "14, 165, 233" }, // Sky blue
  { id: "mjcet", name: "Muffakham Jah College of Engineering and Technology", shortName: "MJCET", icon: "🏛️", color: "16, 185, 129" }, // Emerald green
  { id: "cbit", name: "Chaitanya Bharathi Institute of Technology", shortName: "CBIT", icon: "🏫", color: "244, 63, 94" }, // Rose red
  { id: "vce", name: "Vasavi College of Engineering", shortName: "VCE", icon: "📚", color: "139, 92, 246" } // Violet
] as const;

const APK_DRIVE_LINK = "https://drive.google.com/file/d/16AIqV0cCbOjIHUMn6lpVRV2nK_V_g3HO/view?usp=sharing";
const APK_DIRECT_DOWNLOAD = "https://drive.google.com/uc?export=download&id=16AIqV0cCbOjIHUMn6lpVRV2nK_V_g3HO";

const PPT_SLIDES = [
  {
    title: "Project Architecture",
    description: "LeGeZt uses an autonomous network topology to link local servers with student devices.",
    points: [
      "Offline-first local DB caching using SQLite/Room structures.",
      "Real-time atomic network sync handlers using Retrofit interface.",
      "Azure Blob Storage cloud bucket integration for heavy documents & pictures.",
      "MongoDB database structure with Prisma ORM layer."
    ],
    icon: <Cpu className="slide-icon" style={{ color: "#38bdf8" }} />
  },
  {
    title: "The Student Experience",
    description: "Designed for frictionless, high-speed campus utility directly on mobile and web.",
    points: [
      "Push alerts & notifications for surprise exam announcements.",
      "Fast PDF caching (< 0.1s render) with atomic temp-rename protocols.",
      "Secure messaging chamber with accepted friendship encryption gates.",
      "Google Gemini layout AI studio with history tracking & text generation."
    ],
    icon: <Smartphone className="slide-icon" style={{ color: "#4ade80" }} />
  },
  {
    title: "Faculty Command Center",
    description: "A streamlined, clean panel for academic control with privacy and compliance structures.",
    points: [
      "Custom class dashboard displaying student active engagement count.",
      "Surprise test dispatcher with geo-coordinates and timed locks.",
      "Targeted document shared folders (year, branch, batch filters).",
      "Dynamic data queries restricted to the faculty's own courses."
    ],
    icon: <Users className="slide-icon" style={{ color: "#a78bfa" }} />
  },
  {
    title: "Security & Autonomy",
    description: "Built to operate independently, free from bloated central administration systems.",
    points: [
      "Sideloaded Android APK distribution via direct links.",
      "No reliance on external app stores or heavy LMS bloatware.",
      "Encrypted JSON authorization keys and session token rotations.",
      "Secure Azure webapp hosting with localized network endpoints."
    ],
    icon: <Lock className="slide-icon" style={{ color: "#fb7185" }} />
  }
];

export default function PortalLandingPage() {
  const [selectedCollege, setSelectedCollege] = useState<{ id: string; name: string; shortName: string; icon: string; color: string } | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [showAppBanner, setShowAppBanner] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

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

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % PPT_SLIDES.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + PPT_SLIDES.length) % PPT_SLIDES.length);
  };

  if (!isMounted) {
    return (
      <div className="portal-landing" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#070913" }}>
        <div className="spinner" />
      </div>
    );
  }

  return (
    <>
      <style>{`
        /* Custom Animations */
        @keyframes flowGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes floatSteam {
          0% { transform: translateY(0) scale(0.9) opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-16px) scale(1.2) opacity: 0; }
        }
        @keyframes slideInUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes bgPulse {
          0%, 100% { transform: scale(1); opacity: 0.12; }
          50% { transform: scale(1.1); opacity: 0.18; }
        }
        
        .animated-bg-pulse {
          position: absolute;
          top: 10%;
          left: 50%;
          transform: translateX(-50%);
          width: 80vw;
          height: 60vh;
          background: radial-gradient(circle, rgba(79,70,229,0.22) 0%, rgba(139,92,246,0.06) 50%, transparent 100%);
          pointer-events: none;
          z-index: 0;
          filter: blur(80px);
          animation: bgPulse 10s ease-in-out infinite;
        }

        .ppt-container {
          border: 1px solid var(--border-muted);
          background: rgba(11, 14, 31, 0.7);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 900px;
          margin-top: 40px;
          box-shadow: var(--shadow-lg);
        }

        .slide-icon {
          width: 48px;
          height: 48px;
          margin-bottom: 20px;
        }

        .coffee-steam {
          width: 2px;
          height: 12px;
          background: rgba(255,255,255,0.4);
          margin: 0 2px;
          display: inline-block;
          border-radius: 1px;
        }
        .steam-1 { animation: floatSteam 2s infinite ease-in-out; }
        .steam-2 { animation: floatSteam 2s infinite ease-in-out 0.6s; }
        .steam-3 { animation: floatSteam 2s infinite ease-in-out 1.2s; }

        .vision-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          max-width: 1100px;
          width: 100%;
          margin-top: 80px;
          align-items: center;
        }

        .features-showcase {
          max-width: 1100px;
          width: 100%;
          margin-top: 80px;
        }

        .feature-box {
          border: 1px solid var(--border-muted);
          background: rgba(11, 14, 31, 0.55);
          border-radius: 16px;
          padding: 30px;
          transition: all 0.3s ease;
        }

        .feature-box:hover {
          border-color: rgba(99, 102, 241, 0.5);
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(99, 102, 241, 0.08);
        }

        .ratio-img-container {
          position: relative;
          width: 100%;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: var(--shadow-lg);
        }

        .ratio-img-16-10 {
          aspect-ratio: 16 / 10;
        }

        .ratio-img-16-9 {
          aspect-ratio: 16 / 9;
        }

        .ratio-img-banner {
          aspect-ratio: 21 / 9;
        }

        @media (max-width: 768px) {
          .vision-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .ppt-container {
            padding: 24px;
          }
          .ratio-img-banner {
            aspect-ratio: 16 / 9;
          }
        }
      `}</style>

      {/* Background Pulse Effect */}
      <div className="animated-bg-pulse" />

      {/* Floating APK Install Banner for Android */}
      {showAppBanner && (
        <div style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
          maxWidth: "360px",
          width: "calc(100vw - 48px)",
          background: "linear-gradient(135deg, rgba(14,165,233,0.18) 0%, rgba(37,99,235,0.22) 100%)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1.5px solid rgba(14,165,233,0.4)",
          borderRadius: "18px",
          padding: "22px 24px",
          boxShadow: "0 12px 50px rgba(14,165,233,0.25), 0 2px 10px rgba(0,0,0,0.5)",
          animation: "slideUp 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}>
          <button
            onClick={() => setShowAppBanner(false)}
            style={{ position: "absolute", top: "12px", right: "14px", background: "none", border: "none", color: "rgba(255,255,255,0.45)", fontSize: "18px", cursor: "pointer", lineHeight: 1 }}
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
              <div style={{ fontWeight: 800, fontSize: "0.95rem", color: "#fff", fontFamily: "var(--font-display)" }}>LeGeZt Student App</div>
              <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", marginTop: "1px", fontWeight: "bold" }}>Android • Stable v1.9.2</div>
            </div>
          </div>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: "0 0 16px 0" }}>
            Surprise exam alerts, live results, documents aur classroom chats — seedha phone par. Direct installer available below.
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

      {/* Main Container */}
      <div className="portal-landing" style={{ position: "relative", zIndex: 1 }}>
        
        {/* Top Navbar */}
        <header style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 8%",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          backdropFilter: "blur(8px)",
          zIndex: 10
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "24px" }}>⚡</span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.3rem", letterSpacing: "-1px" }}>LEGEZT</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <a href="#about" style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: 500 }} className="nav-link">About</a>
            <a href="#vision" style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: 500 }} className="nav-link">Vision</a>
            <a href="#ppt" style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: 500 }} className="nav-link">Architecture Deck</a>
            <a href="#coffee" style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: 500 }} className="nav-link">Appreciate</a>
            <div style={{ height: "16px", width: "1px", background: "rgba(255,255,255,0.15)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "1px" }}>Md Jibran</span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        {!selectedCollege ? (
          <>
            <div style={{ textAlign: "center", maxWidth: "820px", marginBottom: "60px", marginTop: "80px", animation: "slideInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}>
              <div className="portal-logo" style={{
                background: "linear-gradient(135deg, #fff 0%, #94a3b8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "3.2rem",
                lineHeight: 1.1,
                letterSpacing: "-2px",
                marginBottom: "16px"
              }}>Legezt Academic Network</div>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.15rem", lineHeight: 1.7, maxWidth: "660px", margin: "0 auto", fontWeight: 400 }}>
                An autonomous, decentralized dashboard linking students, faculty members, and course records in high-performance private environments.
              </p>
            </div>

            {/* Institution Choice Grid */}
            <div className="portal-cards" style={{ marginBottom: "80px" }}>
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
                    background: "rgba(11, 14, 31, 0.6)",
                    backdropFilter: "blur(10px)",
                    ['--hover-color' as any]: `rgba(${c.color}, 1)`,
                    ['--hover-bg-glow' as any]: `rgba(${c.color}, 0.08)`,
                  }}
                >
                  <div style={{ position: "relative", zIndex: 1, pointerEvents: "none" }}>
                    <div
                      className="portal-card-shortname"
                      style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "12px", letterSpacing: "-0.5px", color: "var(--text-primary)", transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
                    >
                      {c.shortName}
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6, fontWeight: 500 }}>{c.name}</div>
                  </div>
                  <span className="college-dot" style={{ position: 'absolute', top: '24px', right: '24px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: `rgb(${c.color})`, boxShadow: `0 0 12px rgba(${c.color}, 0.7)` }} />
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <div style={{ textAlign: "center", marginBottom: "50px", marginTop: "80px", animation: "slideInUp 0.5s ease" }}>
              <div className="portal-logo" style={{
                background: "linear-gradient(135deg, #fff 0%, #94a3b8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "2.8rem"
              }}>{selectedCollege.shortName} Portal</div>
              <div className="portal-college" style={{ letterSpacing: "3px", fontWeight: 600 }}>{selectedCollege.name}</div>
            </div>
            
            {/* Student & Faculty Login Gate */}
            <div className="portal-cards" style={{ marginBottom: "40px" }}>
              <a href="/student/login" className="portal-card student" style={{ width: "350px", background: "rgba(11, 14, 31, 0.65)", backdropFilter: "blur(8px)", borderColor: "rgba(99, 102, 241, 0.2)" }}>
                <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "space-between", pointerEvents: "none" }}>
                  <div>
                    <div style={{ fontSize: "28px", marginBottom: "14px" }}>👨‍🎓</div>
                    <h3 className="portal-card-title">Student Hub</h3>
                    <p className="portal-card-desc">Access academic records, exam sheets, results standings, custom college stickers chat chamber, and AI studio assistance.</p>
                  </div>
                  <span className="portal-card-btn" style={{ background: "linear-gradient(135deg, #4f46e5, #8b5cf6)", color: "#fff", border: "none", borderRadius: "8px", fontWeight: "bold" }}>Enter Student Portal</span>
                </div>
              </a>
              <a href="/faculty/login" className="portal-card faculty" style={{ width: "350px", background: "rgba(11, 14, 31, 0.65)", backdropFilter: "blur(8px)", borderColor: "rgba(139, 92, 246, 0.2)" }}>
                <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "space-between", pointerEvents: "none" }}>
                  <div>
                    <div style={{ fontSize: "28px", marginBottom: "14px" }}>👩‍🏫</div>
                    <h3 className="portal-card-title">Faculty Hub</h3>
                    <p className="portal-card-desc">Coordinate course folders, verify student attendance logs, generate surprise tests, and review student grades.</p>
                  </div>
                  <span className="portal-card-btn" style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899)", color: "#fff", border: "none", borderRadius: "8px", fontWeight: "bold" }}>Enter Faculty Portal</span>
                </div>
              </a>
            </div>
            <div style={{ marginTop: "20px", marginBottom: "60px", textAlign: "center" }}>
              <button onClick={handleClearCollege} className="btn-sm" style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "var(--text-secondary)",
                padding: "8px 18px",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "0.8rem"
              }}>Change Institution</button>
            </div>
          </>
        )}

        {/* Section 1: Detailed About Project */}
        <section id="about" className="features-showcase" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, background: "rgba(99,102,241,0.15)", color: "#818cf8", padding: "4px 12px", borderRadius: "6px", textTransform: "uppercase", letterSpacing: "1.5px" }}>
              Project Overview
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 800, marginTop: "14px" }}>Faculty & Student Ecosystem</h2>
          </div>

          <div className="vision-grid" style={{ marginTop: "20px" }}>
            <div className="feature-box">
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(99,102,241,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#818cf8" }}>
                  <Users size={18} />
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, margin: 0 }}>Student Workspace Hub</h3>
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "20px" }}>
                A highly optimized portal built specifically for fast, responsive student utility. Students can track results, communicate securely, and view syllabus materials instantly.
              </p>
              <ul style={{ paddingLeft: "18px", color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "8px" }}>
                <li><strong>Interactive Dashboard</strong>: View active notifications, course standing, and immediate academic alerts.</li>
                <li><strong>Secured Chat Chamber</strong>: Message classmates with interactive custom stickers, self-referential quoted messages, and background polling sync.</li>
                <li><strong>Surprise Examination Engine</strong>: Instantly alerts students on targeted timed test schedules based on GPS verification rules.</li>
                <li><strong>Google Gemini AI Studio</strong>: A dedicated full-screen assistant providing real-time text analysis and layout adjustments.</li>
              </ul>
            </div>

            <div className="feature-box">
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(139,92,246,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#a78bfa" }}>
                  <Layers size={18} />
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, margin: 0 }}>Faculty Command Center</h3>
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "20px" }}>
                A structured control deck that allows professors and advisors to oversee coursework, log student progress, and publish critical examinations.
              </p>
              <ul style={{ paddingLeft: "18px", color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "8px" }}>
                <li><strong>Student Monitoring</strong>: Access and audit student profiles, bio logs, and current academic averages.</li>
                <li><strong>Controlled Exam Publishing</strong>: Easily launch surprise timed tests, verify student logins, and clear submissions.</li>
                <li><strong>Filtered Upload Repository</strong>: Publish notes and syllabus guides, filtered specifically by year, branch, and academic batch.</li>
                <li><strong>Advisory Direct Mail</strong>: Directly connect with assigned advisees without friendship authorization gateways.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Image Showcase: Aspect Ratio Based Visual Layout */}
        <section style={{ maxWidth: "1100px", width: "100%", marginTop: "80px", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, background: "rgba(244,63,94,0.15)", color: "#fb7185", padding: "4px 12px", borderRadius: "6px", textTransform: "uppercase", letterSpacing: "1.5px" }}>
              Visual Showcase
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 800, marginTop: "12px" }}>Platform System Interfaces</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "24px" }}>
            <div>
              <div className="ratio-img-container ratio-img-16-10">
                <img
                  src="/portal_dashboard_mockup.png"
                  alt="Legezt Premium Portal Workspace View"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <p style={{ textAlign: "center", color: "var(--text-secondary)", fontSize: "0.8rem", marginTop: "10px", fontWeight: 500 }}>
                Figure 1: Student Premium Dashboard Workspace Layout (16:10 Ratio)
              </p>
            </div>
            <div>
              <div className="ratio-img-container ratio-img-16-10">
                <img
                  src="/college_portal_mockup.png"
                  alt="College Selected Landing Gate View"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <p style={{ textAlign: "center", color: "var(--text-secondary)", fontSize: "0.8rem", marginTop: "10px", fontWeight: 500 }}>
                Figure 2: Selected Institution Academic Selection Hub (16:10 Ratio)
              </p>
            </div>
          </div>

          <div style={{ width: "100%" }}>
            <div className="ratio-img-container ratio-img-banner">
              <img
                src="/legezt_banner.png"
                alt="Legezt Academic Network Banner"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <p style={{ textAlign: "center", color: "var(--text-secondary)", fontSize: "0.8rem", marginTop: "10px", fontWeight: 500 }}>
              Figure 3: Legezt Integrated Academic Architecture Core Concept (Panoramic Ratio)
            </p>
          </div>
        </section>

        {/* Section 2: Deep Vision of the Project */}
        <section id="vision" className="vision-grid" style={{ position: "relative", zIndex: 1 }}>
          <div>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, background: "rgba(16,185,129,0.15)", color: "#34d399", padding: "4px 12px", borderRadius: "6px", textTransform: "uppercase", letterSpacing: "1.5px" }}>
              Core Philosophy
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 800, marginTop: "14px", lineHeight: 1.2 }}>
              The Vision of Md Jibran
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.8, marginTop: "16px" }}>
              Centralized learning management systems (LMS) have become bloated, slow, and overly reliant on invasive external structures. Md Jibran envisioned **LeGeZt** as a completely autonomous academic ecosystem.
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.8, marginTop: "12px" }}>
              Designed to compile directly as local APK packages for mobile and run on lightweight server clusters for web, LeGeZt operates as an offline-first system. It removes third-party store constraints and allows students and faculty members to sync progress directly with zero administrative friction.
            </p>
            <div style={{ display: "flex", gap: "20px", marginTop: "24px" }}>
              <div style={{ flex: 1 }}>
                <h4 style={{ color: "#fff", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem" }}>Local First Architecture</h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.82rem", lineHeight: 1.6, marginTop: "6px" }}>Local caching mechanics guarantee document loads in under 0.1s, bypassing internet lag completely.</p>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ color: "#fff", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem" }}>Zero Administrative Bloat</h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.82rem", lineHeight: 1.6, marginTop: "6px" }}>No advertising, tracking cookies, or bulky frameworks. Lightweight design designed to run on low-resource machines.</p>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className="feature-box" style={{ background: "rgba(11, 14, 31, 0.4)" }}>
              <h4 style={{ color: "#818cf8", fontWeight: 700, fontSize: "1.1rem", marginBottom: "8px" }}>🚀 Offline PDF Caching</h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.6 }}>
                Uses a thread-safe mutex and on-demand lazy page rendering to render vector pages asynchronously, ensuring immediate response even on old tablets.
              </p>
            </div>
            <div className="feature-box" style={{ background: "rgba(11, 14, 31, 0.4)" }}>
              <h4 style={{ color: "#34d399", fontWeight: 700, fontSize: "1.1rem", marginBottom: "8px" }}>🔒 Verified GPS Bounds</h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.6 }}>
                Validates student coordinates relative to target college bounds before enabling exam inputs, eliminating remote test manipulation.
              </p>
            </div>
            <div className="feature-box" style={{ background: "rgba(11, 14, 31, 0.4)" }}>
              <h4 style={{ color: "#a78bfa", fontWeight: 700, fontSize: "1.1rem", marginBottom: "8px" }}>💬 Custom Chat Channels</h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.6 }}>
                Protects student privacy through Accepted Friendship Filters, locking communications until requests are manually validated by receivers.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Interactive PPT Slideshow (Visual Presentation) */}
        <section id="ppt" className="ppt-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <span style={{ fontSize: "0.7rem", fontWeight: 800, background: "rgba(165,180,252,0.15)", color: "#a5b4fc", padding: "3px 10px", borderRadius: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>
                Architecture Deck
              </span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 800, marginTop: "6px", color: "#fff" }}>
                Interactive Pitch Slide
              </h3>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginRight: "10px" }}>
                Slide {activeSlide + 1} of {PPT_SLIDES.length}
              </span>
              <button onClick={prevSlide} style={{
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff",
                width: "36px", height: "36px", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <ChevronLeft size={18} />
              </button>
              <button onClick={nextSlide} style={{
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff",
                width: "36px", height: "36px", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", minHeight: "260px", justifyContent: "space-between" }}>
            <div style={{
              display: "flex", gap: "24px", animation: "slideInUp 0.3s ease",
              flexDirection: "column"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                {PPT_SLIDES[activeSlide].icon}
                <div>
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700, margin: 0, color: "#fff" }}>
                    {PPT_SLIDES[activeSlide].title}
                  </h4>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginTop: "4px", lineHeight: 1.5 }}>
                    {PPT_SLIDES[activeSlide].description}
                  </p>
                </div>
              </div>

              <div style={{
                marginTop: "20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px",
                paddingLeft: "10px"
              }}>
                {PPT_SLIDES[activeSlide].points.map((pt, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <CheckCircle size={16} style={{ color: "#34d399", flexShrink: 0, marginTop: "3px" }} />
                    <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Index Progress bar */}
            <div style={{ display: "flex", gap: "6px", width: "100%", marginTop: "32px" }}>
              {PPT_SLIDES.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  style={{
                    height: "4px", flex: 1, cursor: "pointer", borderRadius: "2px",
                    background: idx === activeSlide ? "linear-gradient(90deg, #4f46e5, #8b5cf6)" : "rgba(255,255,255,0.12)",
                    transition: "all 0.3s ease"
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Buy Me a Coffee Appreciation Option */}
        <section id="coffee" style={{
          maxWidth: "750px", width: "100%", marginTop: "80px", marginBottom: "60px",
          position: "relative", zIndex: 1
        }}>
          <div style={{
            border: "1.5px solid rgba(245, 158, 11, 0.3)",
            background: "linear-gradient(135deg, rgba(245,158,11,0.06) 0%, rgba(217,119,6,0.08) 100%)",
            boxShadow: "0 10px 40px rgba(245,158,11,0.04)",
            borderRadius: "20px",
            padding: "36px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            {/* Animated CSS Coffee Illustration */}
            <div style={{ position: "relative", marginBottom: "16px", display: "inline-block" }}>
              {/* Floating Steam lines */}
              <div style={{ position: "absolute", top: "-18px", left: "14px", whiteSpace: "nowrap" }}>
                <span className="coffee-steam steam-1" />
                <span className="coffee-steam steam-2" />
                <span className="coffee-steam steam-3" />
              </div>
              <div style={{ fontSize: "36px" }}>☕</div>
            </div>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 800, color: "#fff", marginBottom: "8px" }}>
              Support the Development
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6, maxWidth: "520px", marginBottom: "24px" }}>
              LeGeZt was architected and coded independently by **Md Jibran**. If this autonomous network portal or mobile application made campus tracking easier for you, consider showing appreciation.
            </p>

            <a
              href="https://buymeacoffee.com/mdjibran"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#FFDD00",
                color: "#000000",
                padding: "12px 28px",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "0.9rem",
                boxShadow: "0 6px 20px rgba(255, 221, 0, 0.35)",
                transition: "all 0.2s ease",
                border: "none",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(255, 221, 0, 0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 221, 0, 0.35)";
              }}
            >
              <Coffee size={18} fill="#000" />
              <span>Buy Md Jibran a Coffee</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          width: "100%",
          padding: "40px 0 20px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          textAlign: "center",
          color: "var(--text-secondary)",
          fontSize: "0.8rem",
          position: "relative",
          zIndex: 1
        }}>
          <p>© 2026 LeGeZt Academic Network. All rights reserved.</p>
          <p style={{ marginTop: "6px", color: "var(--text-muted)", fontSize: "0.75rem" }}>
            Designed, Architected, and Engineered by <strong style={{ color: "rgba(255,255,255,0.7)" }}>Md Jibran</strong>
          </p>
        </footer>

      </div>
    </>
  );
}
