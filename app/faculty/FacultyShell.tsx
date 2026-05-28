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
        <div className="sidebar-logo" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Image src="/logo.png" alt="Portal Logo" width={32} height={32} style={{ borderRadius: "50%" }} />
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
          <button onClick={logout} className="btn-outline" style={{ marginTop: 12, width: "100%", padding: "8px", borderRadius: 6, fontSize: "0.8rem", cursor: "pointer" }}>
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
