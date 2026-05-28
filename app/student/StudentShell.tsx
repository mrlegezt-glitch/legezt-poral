"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

type Student = { id: string; fullName: string; username: string; email: string; year: number; branch: string; enrollmentNo: string; collegeName: string; profilePhotoUrl?: string; status: string; };

const navItems = [
  {
    href: "/student/dashboard",
    label: "Dashboard",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <rect x="3" y="3" width="7" height="9" rx="1"/>
        <rect x="14" y="3" width="7" height="5" rx="1"/>
        <rect x="14" y="12" width="7" height="9" rx="1"/>
        <rect x="3" y="16" width="7" height="5" rx="1"/>
      </svg>
    )
  },
  {
    href: "/student/ai-studio",
    label: "AI Studio",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/>
        <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5Z"/>
      </svg>
    )
  },
  {
    href: "/student/messages",
    label: "Messages",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    )
  },
  {
    href: "/student/documents",
    label: "Documents",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>
    )
  },
  {
    href: "/student/exams",
    label: "Surprise Exams",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    )
  },
  {
    href: "/student/results",
    label: "Results",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <circle cx="12" cy="8" r="7"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    )
  },
  {
    href: "/student/profile",
    label: "Profile",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    )
  },
];

export default function StudentShell({ children }: { children: React.ReactNode }) {
  const [student, setStudent] = useState<Student | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isMessagesPage = pathname === "/student/messages" || pathname === "/student/ai-studio";
  const router = useRouter();

  useEffect(() => {
    fetch("/api/student/me")
      .then((r) => r.ok ? r.json() : Promise.reject())
      .then((d) => setStudent(d.student))
      .catch(() => router.push("/student/login"));

    const handleToggle = () => setMobileOpen((prev) => !prev);
    window.addEventListener("toggle-student-sidebar", handleToggle);
    return () => window.removeEventListener("toggle-student-sidebar", handleToggle);
  }, [router]);

  async function logout() {
    await fetch("/api/student/auth/logout", { method: "POST" });
    router.push("/student/login");
  }

  if (!student) return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}><div className="spinner" /></div>;

  return (
    <div className="portal-shell">
      {mobileOpen && <div className="portal-mobile-overlay" onClick={() => setMobileOpen(false)} />}
      <aside className={`portal-sidebar student ${mobileOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-logo" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img src="/logo.png" alt="Portal Logo" style={{ width: "32px", height: "32px", borderRadius: "50%" }} />
          LIET PORTAL
        </div>
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`sidebar-item ${pathname === item.href ? "active" : ""}`} onClick={() => setMobileOpen(false)}>
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="sidebar-user">
          <div className="sidebar-user-info">
            <div className="sidebar-avatar">
              {student.fullName.charAt(0)}
            </div>
            <div>
              <div className="sidebar-username">{student.fullName}</div>
              <div className="sidebar-role">Year {student.year} · {student.branch}</div>
            </div>
          </div>

          {/* Install Mobile App Button */}
          <a
            href="https://portal.mrlegezt.me/update.apk"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "14px",
              padding: "9px 14px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, rgba(14,165,233,0.15), rgba(37,99,235,0.18))",
              border: "1px solid rgba(14,165,233,0.3)",
              color: "#0ea5e9",
              fontSize: "0.78rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s ease",
              boxShadow: "0 0 12px rgba(14,165,233,0.08)",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" stroke-linecap="round" stroke-linejoin="round" style={{ flexShrink: 0 }}>
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
              <line x1="12" y1="18" x2="12.01" y2="18"/>
            </svg>
            <span>Install Student App</span>
          </a>

          <button onClick={logout} className="btn-outline" style={{ marginTop: 10, width: "100%", padding: "8px", borderRadius: 6, fontSize: "0.8rem", cursor: "pointer" }}>
            Sign Out
          </button>
        </div>
      </aside>
      <main className="portal-main">
        {pathname !== "/student/ai-studio" && (
          <div className="portal-mobile-toggle-header" style={{ alignItems: "center", padding: "16px 20px", background: "var(--bg-panel)", borderBottom: "1px solid var(--border-muted)" }}>
            <button onClick={() => setMobileOpen(true)} className="portal-mobile-toggle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: "bold", letterSpacing: "1px" }}>LIET PORTAL</div>
          </div>
        )}
        <div style={{ flex: 1, overflowY: isMessagesPage ? "hidden" : "auto", display: "flex", flexDirection: "column" }}>
          {children}
        </div>
      </main>
    </div>
  );
}
