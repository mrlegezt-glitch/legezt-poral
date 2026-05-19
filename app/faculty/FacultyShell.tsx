"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

type Faculty = { id: string; fullName: string; username: string; workEmail: string; designation: string; department: string; profilePhotoUrl?: string; studentCount?: number; };

const navItems = [
  { href: "/faculty/dashboard", icon: "🏠", label: "Dashboard" },
  { href: "/faculty/students", icon: "👥", label: "My Students" },
  { href: "/faculty/messages", icon: "💬", label: "Messages" },
  { href: "/faculty/documents", icon: "📂", label: "Documents" },
  { href: "/faculty/profile", icon: "👤", label: "Profile" },
];

export default function FacultyShell({ children }: { children: React.ReactNode }) {
  const [faculty, setFaculty] = useState<Faculty | null>(null);
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
      <aside className="portal-sidebar faculty">
        <div className="sidebar-logo"><span className="faculty">👨‍🏫</span> LIET</div>
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`sidebar-item ${pathname === item.href ? "active faculty" : ""}`}>
              <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
              {item.label}
              {item.label === "My Students" && faculty.studentCount ? (
                <span className="sidebar-badge">{faculty.studentCount}</span>
              ) : null}
            </Link>
          ))}
        </nav>
        <div className="sidebar-user">
          <div className="sidebar-user-info">
            <div className="sidebar-avatar" style={{ background: "#10b981", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {faculty.fullName.charAt(0)}
            </div>
            <div>
              <div className="sidebar-username">{faculty.fullName}</div>
              <div className="sidebar-role">{faculty.designation}</div>
            </div>
          </div>
          <button onClick={logout} style={{ marginTop: 12, width: "100%", padding: "8px", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 8, color: "#fca5a5", fontSize: "0.8rem", cursor: "pointer" }}>
            Sign Out
          </button>
        </div>
      </aside>
      <main className="portal-main">{children}</main>
    </div>
  );
}
