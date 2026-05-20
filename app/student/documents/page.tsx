"use client";
import { useEffect, useState } from "react";
import { Share2, Download, Eye, FileText, X } from "lucide-react";

type Doc = {
  id: string;
  title: string;
  fileName: string;
  fileSize: number;
  category?: string;
  branch?: string;
  batch?: string;
  year?: number;
  downloadUrl: string;
  createdAt: string;
};

function fileIcon(name: string) {
  if (name.endsWith(".pdf")) return "📄";
  if (name.match(/\.(doc|docx)$/)) return "📝";
  if (name.match(/\.(xls|xlsx)$/)) return "📊";
  if (name.match(/\.(png|jpg|jpeg|webp)$/)) return "🖼️";
  return "📁";
}

// PDF Viewer Modal — shows PDF inline via iframe (works with Azure SAS URLs)
function PdfViewerModal({ doc, onClose }: { doc: Doc; onClose: () => void }) {
  const [loading, setLoading] = useState(true);
  const isPdf = doc.fileName.endsWith(".pdf");

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.92)",
        backdropFilter: "blur(12px)",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 20px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(17,19,24,0.95)",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: "1.4rem" }}>{fileIcon(doc.fileName)}</span>
          <div>
            <div style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem" }}>{doc.title}</div>
            <div style={{ color: "#64748b", fontSize: "0.75rem" }}>
              {doc.category ?? "Document"} · {(doc.fileSize / 1024).toFixed(0)} KB
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {doc.downloadUrl && (
            <a
              href={doc.downloadUrl}
              download={doc.fileName}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                backgroundColor: "#D0E4FF",
                color: "#003258",
                border: "none",
                borderRadius: "8px",
                padding: "8px 14px",
                fontWeight: 700,
                fontSize: "0.82rem",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              <Download size={14} /> Download
            </a>
          )}
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              padding: "8px 12px",
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Viewer body */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        {loading && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#94a3b8",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                border: "3px solid rgba(208,228,255,0.2)",
                borderTop: "3px solid #D0E4FF",
                borderRadius: "50%",
                animation: "spin 0.8s linear infinite",
              }}
            />
            <span style={{ fontSize: "0.9rem" }}>Loading document...</span>
          </div>
        )}

        {isPdf && doc.downloadUrl ? (
          <iframe
            src={doc.downloadUrl}
            onLoad={() => setLoading(false)}
            onError={() => setLoading(false)}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              display: "block",
            }}
            title={doc.title}
          />
        ) : doc.downloadUrl ? (
          // Non-PDF: show download prompt
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              gap: 16,
              color: "#94a3b8",
            }}
          >
            <span style={{ fontSize: "4rem" }}>{fileIcon(doc.fileName)}</span>
            <div style={{ fontSize: "1rem", color: "#cbd5e1", fontWeight: 600 }}>{doc.title}</div>
            <div style={{ fontSize: "0.85rem" }}>This file type cannot be previewed. Please download to open.</div>
            <a
              href={doc.downloadUrl}
              download={doc.fileName}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "#D0E4FF",
                color: "#003258",
                borderRadius: "10px",
                padding: "12px 24px",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "0.9rem",
              }}
            >
              <Download size={16} /> Download File
            </a>
          </div>
        ) : (
          // No download URL — link expired or not generated
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              gap: 12,
              color: "#94a3b8",
            }}
          >
            <span style={{ fontSize: "3rem" }}>⏳</span>
            <div style={{ color: "#cbd5e1", fontWeight: 600 }}>Link Expired</div>
            <div style={{ fontSize: "0.85rem", textAlign: "center", maxWidth: 300 }}>
              The secure download link has expired. Please refresh the page to generate a new link.
            </div>
            <button
              onClick={() => window.location.reload()}
              style={{
                backgroundColor: "#D0E4FF",
                color: "#003258",
                border: "none",
                borderRadius: "10px",
                padding: "10px 20px",
                fontWeight: 700,
                cursor: "pointer",
                fontSize: "0.9rem",
              }}
            >
              🔄 Refresh Page
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

// Share Modal
function ShareModal({ doc, onClose }: { doc: Doc; onClose: () => void }) {
  const absoluteUrl = doc.downloadUrl.startsWith("http")
    ? doc.downloadUrl
    : typeof window !== "undefined"
    ? `${window.location.origin}${doc.downloadUrl}`
    : doc.downloadUrl;

  const shareMsg = `*LIET Portal* 📂\n\nDocument: *${doc.title}*\nDownload: ${absoluteUrl}\n\nJoin LIET Student Portal: https://portal.mrlegezt.me`;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(8px)",
        zIndex: 99998,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: "bold", color: "#fff" }}>Share Document</h3>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#a0aec0", cursor: "pointer", fontSize: "1.2rem" }}>
            &times;
          </button>
        </div>
        <p style={{ margin: 0, fontSize: "0.85rem", color: "#718096" }}>
          Share <strong>{doc.title}</strong> with credits and invite link.
        </p>
        <button
          onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareMsg)}`, "_blank")}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            backgroundColor: "#25d366", color: "#fff", border: "none", borderRadius: "8px",
            padding: "12px", fontWeight: "bold", fontSize: "0.9rem", cursor: "pointer",
          }}
        >
          💬 Share on WhatsApp
        </button>
        <button
          onClick={async () => {
            if (navigator.share) {
              try { await navigator.share({ title: doc.title, url: absoluteUrl }); } catch {}
            } else {
              navigator.clipboard.writeText(absoluteUrl);
              alert("Link copied!");
            }
          }}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            backgroundColor: "rgba(255,255,255,0.08)", color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px",
            padding: "12px", fontWeight: "bold", fontSize: "0.9rem", cursor: "pointer",
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
  const [viewingDoc, setViewingDoc] = useState<Doc | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/documents")
      .then((r) => r.json())
      .then((d) => {
        if (d.error) { setError(d.error); } 
        else { setDocs(d.documents ?? []); }
        setLoading(false);
      })
      .catch(() => { setError("Failed to load documents. Please refresh."); setLoading(false); });
  }, []);

  const categories = ["All", ...Array.from(new Set(docs.map((d) => d.category ?? "Other")))];
  const filtered = filter === "All" ? docs : docs.filter((d) => d.category === filter);

  return (
    <div className="portal-main">
      <div className="portal-topbar">
        <div className="portal-topbar-title">Documents</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {categories.map((c) => (
            <button key={c} onClick={() => setFilter(c)} className={`btn-sm ${filter === c ? "active" : ""}`}>{c}</button>
          ))}
        </div>
      </div>

      <div className="portal-content">
        {loading ? (
          <div className="spinner" />
        ) : error ? (
          <div className="empty-state" style={{ color: "#f87171" }}>⚠️ {error}</div>
        ) : filtered.length === 0 ? (
          <div className="empty-state">No documents shared yet</div>
        ) : (
          <div className="doc-grid">
            {filtered.map((d) => (
              <div
                key={d.id}
                className="doc-card"
                style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "180px", cursor: "pointer" }}
                onClick={() => setViewingDoc(d)}
              >
                <div>
                  <div className="doc-icon" style={{ fontSize: "1.6rem" }}>{fileIcon(d.fileName)}</div>
                  <div className="doc-title" style={{ marginTop: 8 }}>{d.title}</div>
                  <div className="doc-meta">{d.category ?? "Other"} · {(d.fileSize / 1024).toFixed(0)} KB</div>

                  {/* Distribution tags */}
                  <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", marginTop: "8px" }}>
                    <span style={{ fontSize: "0.7rem", backgroundColor: "rgba(255,255,255,0.06)", padding: "2px 6px", borderRadius: "4px", color: "#94a3b8" }}>
                      {d.year ? `Year ${d.year}` : "All Years"}
                    </span>
                    <span style={{ fontSize: "0.7rem", backgroundColor: "rgba(255,255,255,0.06)", padding: "2px 6px", borderRadius: "4px", color: "#94a3b8" }}>
                      {d.branch ?? "All Branches"}
                    </span>
                    {d.batch && (
                      <span style={{ fontSize: "0.7rem", backgroundColor: "rgba(255,255,255,0.06)", padding: "2px 6px", borderRadius: "4px", color: "#94a3b8" }}>
                        Batch {d.batch}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer row */}
                <div style={{ marginTop: 12, borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: "8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.75rem", color: "#64748b" }}>
                    📅 {new Date(d.createdAt).toLocaleString("en-IN", { dateStyle: "short", timeStyle: "short" })}
                  </span>
                  <div style={{ display: "flex", gap: 6 }}>
                    <button
                      onClick={(e) => { e.stopPropagation(); setViewingDoc(d); }}
                      title="View PDF"
                      style={{ background: "rgba(208,228,255,0.12)", border: "1px solid rgba(208,228,255,0.15)", borderRadius: "4px", padding: "2px 8px", color: "#D0E4FF", fontSize: "0.72rem", cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}
                    >
                      <Eye size={11} /> View
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setActiveShareDoc(d); }}
                      title="Share"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "4px", padding: "2px 8px", color: "#cbd5e1", fontSize: "0.72rem", cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}
                    >
                      <Share2 size={11} /> Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {viewingDoc && <PdfViewerModal doc={viewingDoc} onClose={() => setViewingDoc(null)} />}
      {activeShareDoc && <ShareModal doc={activeShareDoc} onClose={() => setActiveShareDoc(null)} />}
    </div>
  );
}
