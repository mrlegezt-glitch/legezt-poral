"use client";
import Link from "next/link";

export default function PortalLandingPage() {
  return (
    <div className="portal-landing">
      <div className="portal-logo">🎓 LIET Portal</div>
      <div className="portal-college">Lords Institute of Engineering and Technology</div>
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
    </div>
  );
}
