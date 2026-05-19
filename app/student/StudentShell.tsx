"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

type Student = { id: string; fullName: string; username: string; email: string; year: number; branch: string; enrollmentNo: string; collegeName: string; profilePhotoUrl?: string; status: string; };

const navItems = [
  { href: "/student/dashboard", label: "Dashboard" },
  { href: "/student/messages", label: "Messages" },
  { href: "/student/documents", label: "Documents" },
  { href: "/student/profile", label: "Profile" },
];

export default function StudentShell({ children }: { children: React.ReactNode }) {
  const [student, setStudent] = useState<Student | null>(null);
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
      <aside className="portal-sidebar student">
        <div className="sidebar-logo">
          LIET PORTAL
        </div>
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`sidebar-item ${pathname === item.href ? "active" : ""}`}>
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
          <button onClick={logout} className="btn-outline" style={{ marginTop: 12, width: "100%", padding: "8px", borderRadius: 6, fontSize: "0.8rem", cursor: "pointer" }}>
            Sign Out
          </button>
        </div>
      </aside>
      <main className="portal-main">{children}</main>
    </div>
  );
}
