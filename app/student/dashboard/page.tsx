"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Bot,
  ClipboardCheck,
  FileText,
  MessageCircle,
  Megaphone,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";

type Student = { fullName: string; email: string; year: number; branch: string; enrollmentNo: string; collegeName: string; assignedFacultyId?: string; status: string; lastLoginAt?: string; };
type Announcement = { id: string; title: string; content: string; createdAt: string; faculty: { fullName: string } };

const quickActions = [
  {
    href: "/student/ai-studio",
    label: "Ask AI Studio",
    desc: "Get help with notes, code, emails, and revision.",
    icon: Bot,
    tone: "violet",
  },
  {
    href: "/student/documents",
    label: "Open Documents",
    desc: "Read notes, PDFs, and shared class material.",
    icon: FileText,
    tone: "cyan",
  },
  {
    href: "/student/messages",
    label: "Message Advisor",
    desc: "Chat with faculty or approved classmates.",
    icon: MessageCircle,
    tone: "green",
  },
  {
    href: "/student/exams",
    label: "Check Exams",
    desc: "See live surprise exams and proctored rooms.",
    icon: ClipboardCheck,
    tone: "amber",
  },
];

export default function StudentDashboard() {
  const [student, setStudent] = useState<Student | null>(null);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    fetch("/api/student/me").then((r) => r.json()).then((d) => setStudent(d.student));
    fetch("/api/announcements").then((r) => r.ok ? r.json() : { announcements: [] }).then((d) => setAnnouncements(d.announcements ?? []));
  }, []);

  if (!student) return <div className="portal-content"><div className="spinner" /></div>;

  const firstName = student.fullName.split(" ")[0] || "Student";
  const lastLogin = student.lastLoginAt
    ? new Date(student.lastLoginAt).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })
    : "First login";

  return (
    <div className="portal-content student-workspace">
      {/* Status Banner */}
      {student.status === "pending" && (
        <div className="form-error" style={{ marginBottom: 24 }}>
          Your account is pending admin approval. Some features may be limited.
        </div>
      )}

      <section className="workspace-hero">
        <div>
          <div className="workspace-kicker">
            <Sparkles size={15} />
            Student workspace
          </div>
          <h1>Good to see you, {firstName}</h1>
          <p>
            Everything important is one tap away: documents, AI help, advisor messages,
            exams, and your academic progress.
          </p>
          <div className="workspace-meta-row">
            <span>{student.branch}</span>
            <span>Year {student.year}</span>
            <span>{student.enrollmentNo}</span>
          </div>
        </div>
        <div className="workspace-status-card">
          <div className="workspace-status-top">
            <ShieldCheck size={18} />
            Account status
          </div>
          <strong>{student.status}</strong>
          <span>Last active: {lastLogin}</span>
        </div>
      </section>

      <section className="quick-actions-grid" aria-label="Quick actions">
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <Link key={action.href} href={action.href} className={`quick-action-card ${action.tone}`}>
              <span className="quick-action-icon">
                <Icon size={20} />
              </span>
              <span>
                <strong>{action.label}</strong>
                <small>{action.desc}</small>
              </span>
            </Link>
          );
        })}
      </section>

      <div className="workspace-grid">
        <section className="workspace-panel">
          <div className="workspace-section-head">
            <div>
              <span className="section-eyebrow">Your profile</span>
              <h2>Academic snapshot</h2>
            </div>
            <Link href="/student/profile" className="workspace-link">View profile</Link>
          </div>
          <div className="stats-grid compact">
            <div className="stat-card">
              <div className="stat-label">Year</div>
              <div className="stat-value">Year {student.year}</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Branch</div>
              <div className="stat-value">{student.branch}</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Enrollment</div>
              <div className="stat-value small">{student.enrollmentNo}</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Faculty Advisor</div>
              <div className="stat-value small">{student.assignedFacultyId ? "Assigned" : "Pending"}</div>
            </div>
          </div>
        </section>

        <aside className="workspace-panel next-steps-panel">
          <div className="workspace-section-head">
            <div>
              <span className="section-eyebrow">Start here</span>
              <h2>Simple next steps</h2>
            </div>
          </div>
          <div className="next-step-list">
            <Link href="/student/documents">
              <FileText size={17} />
              <span>Review newly shared class documents</span>
            </Link>
            <Link href="/student/messages">
              <UserCheck size={17} />
              <span>Contact your advisor for support</span>
            </Link>
            <Link href="/student/results">
              <ClipboardCheck size={17} />
              <span>Check test scores and feedback</span>
            </Link>
          </div>
        </aside>
      </div>

      <section className="workspace-panel">
        <div className="workspace-section-head">
          <div>
            <span className="section-eyebrow">College updates</span>
            <h2>Latest announcements</h2>
          </div>
          <Megaphone size={20} />
        </div>
        {announcements.length === 0 ? (
          <div className="empty-state workspace-empty">No announcements yet</div>
        ) : (
          <div className="announcement-list">
            {announcements.slice(0, 5).map((a) => (
              <article key={a.id} className="announcement-card">
                <div>
                  <h3>{a.title}</h3>
                  <p>{a.content}</p>
                </div>
                <div className="announcement-meta">
                  <span>{a.faculty?.fullName ?? "Faculty"}</span>
                  <span>{new Date(a.createdAt).toLocaleDateString("en-IN")}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
