"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

type Student = { id: string; fullName: string; username: string; email: string; year: number; branch: string; enrollmentNo: string; collegeName: string; profilePhotoUrl?: string; status: string; };

const navItems = [
  { href: "/student/dashboard", label: "Dashboard" },
  { href: "/student/messages", label: "Messages" },
  { href: "/student/documents", label: "Documents" },
  { href: "/student/exams", label: "Surprise Exams" },
  { href: "/student/results", label: "Results" },
  { href: "/student/profile", label: "Profile" },
];

export default function StudentShell({ children }: { children: React.ReactNode }) {
  const [student, setStudent] = useState<Student | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    fetch("/api/student/me")
      .then((r) => r.ok ? r.json() : Promise.reject())
      .then((d) => setStudent(d.student))
      .catch(() => router.push("/student/login"));
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
              {item.label}
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
            href="https://drive.google.com/uc?export=download&id=1mAtzZHAN-5uGVAhGjVR9ThKzNdplOGiF"
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
            <span style={{ fontSize: "16px" }}>📱</span>
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
          <div style={{ fontFamily: "var(--font-display)", fontWeight: "bold", letterSpacing: "1px" }}>LIET PORTAL</div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
          {children}
        </div>
      </main>
    </div>
  );
}
