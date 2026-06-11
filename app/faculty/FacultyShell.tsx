"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

type Faculty = { id: string; fullName: string; username: string; workEmail: string; designation: string; department: string; profilePhotoUrl?: string; studentCount?: number; };

const navItems = [
  { href: "/faculty/dashboard", label: "Dashboard" },
  { href: "/faculty/students", label: "My Students" },
  { href: "/faculty/exams", label: "Surprise Exams" },
  { href: "/faculty/messages", label: "Messages" },
  { href: "/faculty/documents", label: "Documents" },
  { href: "/faculty/profile", label: "Profile" },
];

export default function FacultyShell({ children }: { children: React.ReactNode }) {
  const [faculty, setFaculty] = useState<Faculty | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    fetch("/api/faculty/me")
      .then((r) => r.ok ? r.json() : Promise.reject())
      .then((d) => setFaculty(d.faculty))
      .catch(() => router.push("/faculty/login"));
  }, [router]);

  async function logout() {
    await fetch("/api/faculty/auth/logout", { method: "POST" });
    router.push("/faculty/login");
  }

  if (!faculty) return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}><div className="spinner" /></div>;

  return (
    <div className="portal-shell">
      {mobileOpen && <div className="portal-mobile-overlay" onClick={() => setMobileOpen(false)} />}
      <aside className={`portal-sidebar faculty ${mobileOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-logo" style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.35rem" }}>
          <Image src="/logo.png" alt="Portal Logo" width={42} height={42} style={{ borderRadius: "50%" }} />
          LIET FACULTY
        </div>
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`sidebar-item ${pathname === item.href ? "active" : ""}`} onClick={() => setMobileOpen(false)}>
              {item.label}
              {item.label === "My Students" && faculty.studentCount ? (
                <span className="sidebar-badge">{faculty.studentCount}</span>
              ) : null}
            </Link>
          ))}
        </nav>
        <div className="sidebar-user">
          <div className="sidebar-user-info">
            <div className="sidebar-avatar">
              {faculty.fullName.charAt(0)}
            </div>
            <div>
              <div className="sidebar-username">{faculty.fullName}</div>
              <div className="sidebar-role">{faculty.designation}</div>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M12 2a5 5 0 0 1 5 5v5H7V7a5 5 0 0 1 5-5z" />
              <circle cx="9.5" cy="6.5" r="0.5" fill="currentColor" />
              <circle cx="14.5" cy="6.5" r="0.5" fill="currentColor" />
              <line x1="9" y1="2.5" x2="7.5" y2="1" />
              <line x1="15" y1="2.5" x2="16.5" y2="1" />
              <rect x="7" y="13" width="10" height="7" rx="1" />
              <rect x="4.5" y="13" width="1.5" height="5" rx="0.75" />
              <rect x="18" y="13" width="1.5" height="5" rx="0.75" />
              <rect x="9.5" y="20.5" width="1.5" height="2.5" rx="0.75" />
              <rect x="13" y="20.5" width="1.5" height="2.5" rx="0.75" />
            </svg>
            <span>Install Student App</span>
          </a>

          <button onClick={logout} className="btn-outline" style={{ marginTop: 10, width: "100%", padding: "8px", borderRadius: 6, fontSize: "0.8rem", cursor: "pointer" }}>
            Sign Out
          </button>
        </div>
      </aside>
      <main className="portal-main">
        <div className="portal-mobile-toggle-header" style={{ alignItems: "center", padding: "16px 20px", background: "var(--bg-panel)", borderBottom: "1px solid var(--border-muted)" }}>
          <button onClick={() => setMobileOpen(true)} className="portal-mobile-toggle">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: "bold", letterSpacing: "1px" }}>LIET FACULTY</div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
          {children}
        </div>
      </main>
    </div>
  );
}
