"use client";
import { useEffect, useState } from "react";
import { Share2 } from "lucide-react";

type Doc = { id: string; title: string; fileName: string; fileSize: number; category?: string; branch?: string; batch?: string; year?: number; downloadUrl: string; createdAt: string; };

function fileIcon(name: string) {
  if (name.endsWith(".pdf")) return "PDF";
  if (name.match(/\.(doc|docx)$/)) return "DOC";
  if (name.match(/\.(xls|xlsx)$/)) return "XLS";
  if (name.match(/\.(png|jpg|jpeg|webp)$/)) return "IMG";
  return "FILE";
}

interface ShareModalProps {
  doc: Doc;
  onClose: () => void;
}

function ShareModal({ doc, onClose }: ShareModalProps) {
  // Construct absolute download URL if not already absolute
  const getAbsoluteUrl = (url: string) => {
    if (url.startsWith("http")) return url;
    if (typeof window !== "undefined") {
      return `${window.location.origin}${url}`;
    }
    return url;
  };

  const absoluteDownloadUrl = getAbsoluteUrl(doc.downloadUrl);
  const shareMessage = `*Mr. Legezt Portal* 📂\n\nHey! Check out this document: *${doc.title}*\nDownload link: ${absoluteDownloadUrl}\n\nJoin our LIET student portal to access syllabus, notes, assignments and more: https://portal.mrlegezt.me`;
  
  const handleWhatsAppShare = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
    window.open(url, "_blank");
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: doc.title,
          text: `Check out this document on LIET Portal: ${doc.title}`,
          url: absoluteDownloadUrl
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      navigator.clipboard.writeText(absoluteDownloadUrl);
      alert("Download link copied to clipboard!");
    }
  };

  return (
    <div 
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(8px)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }} 
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: "#121214",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "14px",
          padding: "24px",
          width: "360px",
          maxWidth: "90%",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
        }} 
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: "bold", color: "#fff" }}>Share Document</h3>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#a0aec0", cursor: "pointer", fontSize: "1.2rem" }}>&times;</button>
        </div>
        
        <p style={{ margin: 0, fontSize: "0.85rem", color: "#718096" }}>
          Share <strong>{doc.title}</strong> with credits and invite link.
        </p>

        <button 
          onClick={handleWhatsAppShare} 
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            backgroundColor: "#25d366",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "12px",
            fontWeight: "bold",
            fontSize: "0.9rem",
            cursor: "pointer"
          }}
        >
          💬 Share on WhatsApp
        </button>

        <button 
          onClick={handleNativeShare} 
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            backgroundColor: "rgba(255,255,255,0.08)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            padding: "12px",
            fontWeight: "bold",
            fontSize: "0.9rem",
            cursor: "pointer"
          }}
        >
          📱 Device Share / Copy Link
        </button>
      </div>
    </div>
  );
}

export default function StudentDocumentsPage() {
  const [docs, setDocs] = useState<Doc[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [activeShareDoc, setActiveShareDoc] = useState<Doc | null>(null);

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

                <div className="doc-meta" style={{ marginTop: 12, borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: "8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.75rem", color: "#64748b" }}>
                    📅 {new Date(d.createdAt).toLocaleString("en-IN", { dateStyle: "short", timeStyle: "short" })}
                  </span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setActiveShareDoc(d);
                    }}
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "4px",
                      padding: "2px 8px",
                      color: "#cbd5e1",
                      fontSize: "0.75rem",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 4
                    }}
                  >
                    <Share2 size={11} /> Share
                  </button>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
      {activeShareDoc && (
        <ShareModal 
          doc={activeShareDoc} 
          onClose={() => setActiveShareDoc(null)} 
        />
      )}
    </div>
  );
}
