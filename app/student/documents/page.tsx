"use client";
import { useEffect, useState } from "react";

type Doc = { id: string; title: string; fileName: string; fileSize: number; category?: string; branch?: string; year?: number; downloadUrl: string; createdAt: string; };

function fileIcon(name: string) {
  if (name.endsWith(".pdf")) return "📄";
  if (name.match(/\.(doc|docx)$/)) return "📝";
  if (name.match(/\.(xls|xlsx)$/)) return "📊";
  if (name.match(/\.(png|jpg|jpeg|webp)$/)) return "🖼️";
  return "📎";
}

export default function StudentDocumentsPage() {
  const [docs, setDocs] = useState<Doc[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("/api/documents").then((r) => r.json()).then((d) => { setDocs(d.documents ?? []); setLoading(false); });
  }, []);

  const categories = ["All", ...Array.from(new Set(docs.map((d) => d.category ?? "Other")))];
  const filtered = filter === "All" ? docs : docs.filter((d) => d.category === filter);

  return (
    <div className="portal-main">
      <div className="portal-topbar">
        <div className="portal-topbar-title">📂 Documents</div>
        <div style={{ display: "flex", gap: 8 }}>
          {categories.map((c) => (
            <button key={c} onClick={() => setFilter(c)} className="btn-sm" style={{ background: filter === c ? "var(--student-primary)" : "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff", cursor: "pointer" }}>{c}</button>
          ))}
        </div>
      </div>
      <div className="portal-content">
        {loading ? <div className="spinner" /> : filtered.length === 0 ? (
          <div className="empty-state"><div className="empty-icon">📂</div><div>No documents shared yet</div></div>
        ) : (
          <div className="doc-grid">
            {filtered.map((d) => (
              <a key={d.id} href={d.downloadUrl} target="_blank" rel="noopener" className="doc-card">
                <div className="doc-icon">{fileIcon(d.fileName)}</div>
                <div className="doc-title">{d.title}</div>
                <div className="doc-meta">{d.category ?? "Other"} · {(d.fileSize / 1024).toFixed(0)} KB</div>
                {d.year && <div className="doc-meta">Year {d.year} · {d.branch}</div>}
                <div className="doc-meta" style={{ marginTop: 4 }}>{new Date(d.createdAt).toLocaleDateString("en-IN")}</div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
