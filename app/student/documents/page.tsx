"use client";
import { useEffect, useState } from "react";

type Doc = { id: string; title: string; fileName: string; fileSize: number; category?: string; branch?: string; batch?: string; year?: number; downloadUrl: string; createdAt: string; };

function fileIcon(name: string) {
  if (name.endsWith(".pdf")) return "PDF";
  if (name.match(/\.(doc|docx)$/)) return "DOC";
  if (name.match(/\.(xls|xlsx)$/)) return "XLS";
  if (name.match(/\.(png|jpg|jpeg|webp)$/)) return "IMG";
  return "FILE";
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
        <div className="portal-topbar-title">Documents</div>
        <div style={{ display: "flex", gap: 8 }}>
          {categories.map((c) => (
            <button key={c} onClick={() => setFilter(c)} className={`btn-sm ${filter === c ? "active" : ""}`}>{c}</button>
          ))}
        </div>
      </div>
      <div className="portal-content">
        {loading ? <div className="spinner" /> : filtered.length === 0 ? (
          <div className="empty-state">No documents shared yet</div>
        ) : (
          <div className="doc-grid">
            {filtered.map((d) => (
              <a key={d.id} href={d.downloadUrl} target="_blank" rel="noopener" className="doc-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", minHeight: "180px" }}>
                <div>
                  <div className="doc-icon" style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", letterSpacing: "1px" }}>{fileIcon(d.fileName)}</div>
                  <div className="doc-title" style={{ marginTop: 8 }}>{d.title}</div>
                  <div className="doc-meta">{d.category ?? "Other"} · {(d.fileSize / 1024).toFixed(0)} KB</div>
                  
                  {/* Distribution criteria tags */}
                  <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", marginTop: "8px" }}>
                    {d.year ? (
                      <span style={{ fontSize: "0.7rem", backgroundColor: "rgba(255,255,255,0.06)", padding: "2px 6px", borderRadius: "4px", color: "#94a3b8" }}>Year {d.year}</span>
                    ) : (
                      <span style={{ fontSize: "0.7rem", backgroundColor: "rgba(255,255,255,0.06)", padding: "2px 6px", borderRadius: "4px", color: "#94a3b8" }}>All Years</span>
                    )}
                    {d.branch ? (
                      <span style={{ fontSize: "0.7rem", backgroundColor: "rgba(255,255,255,0.06)", padding: "2px 6px", borderRadius: "4px", color: "#94a3b8" }}>{d.branch}</span>
                    ) : (
                      <span style={{ fontSize: "0.7rem", backgroundColor: "rgba(255,255,255,0.06)", padding: "2px 6px", borderRadius: "4px", color: "#94a3b8" }}>All Branches</span>
                    )}
                    {d.batch && (
                      <span style={{ fontSize: "0.7rem", backgroundColor: "rgba(255,255,255,0.06)", padding: "2px 6px", borderRadius: "4px", color: "#94a3b8" }}>Batch {d.batch}</span>
                    )}
                  </div>
                </div>

                <div className="doc-meta" style={{ marginTop: 12, borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: "8px", fontSize: "0.75rem", color: "#64748b" }}>
                  📅 {new Date(d.createdAt).toLocaleString("en-IN", { dateStyle: "short", timeStyle: "short" })}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
