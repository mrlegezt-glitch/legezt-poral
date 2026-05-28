"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Eye, Share2, X } from "lucide-react";
import EditorStudio from "@/app/components/EditorStudio";
import { BRANCHES, DOCUMENT_CATEGORIES, YEARS } from "@/lib/constants";

type Doc = {
  id: string;
  title: string;
  fileName: string;
  fileSize: number;
  category?: string;
  branch?: string;
  year?: number;
  batch?: string;
  downloadUrl: string;
  createdAt: string;
};

function fileIcon(name: string) {
  if (name.endsWith(".pdf")) return "PDF";
  if (name.match(/\.(doc|docx)$/)) return "DOC";
  if (name.match(/\.(xls|xlsx)$/)) return "XLS";
  if (name.match(/\.(png|jpg|jpeg|webp)$/)) return "IMG";
  return "FILE";
}

export default function FacultyDocumentsPage() {
  const [docs, setDocs] = useState<Doc[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Notes");
  const [isPublic, setIsPublic] = useState(true);
  const [targetYear, setTargetYear] = useState("");
  const [targetBranch, setTargetBranch] = useState("");
  const [batch, setBatch] = useState("");
  const [showEditor, setShowEditor] = useState(false);
  const [activeShareDoc, setActiveShareDoc] = useState<Doc | null>(null);
  const [viewingDoc, setViewingDoc] = useState<Doc | null>(null);
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const load = () =>
    fetch("/api/documents")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => {
        setDocs(d.documents ?? []);
        setError("");
      })
      .catch(() => setError("Failed to load documents. Please refresh."))
      .finally(() => setLoading(false));

  useEffect(() => {
    load();
  }, []);

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    const file = fileRef.current?.files?.[0];
    if (!file || !title.trim()) return;

    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    fd.append("title", title.trim());
    fd.append("category", category);
    fd.append("isPublic", String(isPublic));
    if (!isPublic && targetYear) fd.append("year", targetYear);
    if (!isPublic && targetBranch) fd.append("branch", targetBranch);
    if (!isPublic && batch.trim()) fd.append("batch", batch.trim());

    const res = await fetch("/api/documents", { method: "POST", body: fd });
    setUploading(false);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Upload failed. Please try again.");
      return;
    }

    setTitle("");
    setTargetYear("");
    setTargetBranch("");
    setBatch("");
    if (fileRef.current) fileRef.current.value = "";
    load();
  }

  return (
    <div className="portal-main">
      <div className="portal-topbar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="portal-topbar-title">Documents</div>
        <button
          onClick={() => setShowEditor(true)}
          className="btn-primary faculty"
          style={{ width: "auto", display: "flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", border: "none", outline: "none", fontSize: "0.85rem", padding: "8px 16px", borderRadius: "8px", cursor: "pointer" }}
        >
          PDF Editor Studio
        </button>
      </div>

      <div className="portal-content">
        {error && <div className="form-error" style={{ marginBottom: 16 }}>{error}</div>}

        <form onSubmit={handleUpload} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: 24, marginBottom: 28 }}>
          <div className="section-title" style={{ marginBottom: 16 }}>Upload Document</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: 12, alignItems: "end" }}>
            <div className="form-group">
              <label className="form-label">Title</label>
              <input className="form-input faculty" placeholder="Document title..." value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div className="form-group">
              <label className="form-label">Category</label>
              <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                {DOCUMENT_CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Visibility</label>
              <select className="form-select" value={String(isPublic)} onChange={(e) => setIsPublic(e.target.value === "true")}>
                <option value="true">Public</option>
                <option value="false">Private Target</option>
              </select>
            </div>
          </div>

          {!isPublic && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 12 }}>
              <div className="form-group">
                <label className="form-label">Target Year</label>
                <select className="form-select" value={targetYear} onChange={(e) => setTargetYear(e.target.value)}>
                  <option value="">All Years</option>
                  {YEARS.map((y) => <option key={y} value={y}>Year {y}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Target Branch</label>
                <select className="form-select" value={targetBranch} onChange={(e) => setTargetBranch(e.target.value)}>
                  <option value="">All Branches</option>
                  {BRANCHES.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Batch</label>
                <input className="form-input faculty" placeholder="Optional" value={batch} onChange={(e) => setBatch(e.target.value)} />
              </div>
            </div>
          )}

          <div style={{ display: "flex", gap: 12, marginTop: 12, alignItems: "center" }}>
            <input type="file" ref={fileRef} accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.webp,.txt" required style={{ color: "#94a3b8", fontSize: "0.875rem", flex: 1 }} />
            <button className="btn-primary faculty" type="submit" disabled={uploading} style={{ width: "auto", padding: "12px 24px" }}>{uploading ? "Uploading..." : "Upload"}</button>
          </div>
        </form>

        {loading ? <div className="spinner" /> : docs.length === 0 ? (
          <div className="empty-state"><div>No documents yet</div></div>
        ) : (
          <div className="doc-grid">
            {docs.map((d) => (
              <div key={d.id} className="doc-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", minHeight: "180px" }}>
                <div>
                  <div className="doc-icon">{fileIcon(d.fileName)}</div>
                  <div className="doc-title" style={{ marginTop: 8 }}>{d.title}</div>
                  <div className="doc-meta">{d.category ?? "Other"} - {(d.fileSize / 1024).toFixed(0)} KB</div>
                  {!d.downloadUrl && <div className="form-error" style={{ marginTop: 10 }}>Download link unavailable. Refresh this page.</div>}
                </div>
                <div className="doc-meta" style={{ marginTop: 12, borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: "8px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: "0.75rem", color: "#64748b" }}>
                    {new Date(d.createdAt).toLocaleString("en-IN", { dateStyle: "short", timeStyle: "short" })}
                  </span>
                  <div style={{ display: "flex", gap: 6 }}>
                    <button onClick={() => setViewingDoc(d)} style={{ background: "rgba(208,228,255,0.12)", border: "1px solid rgba(208,228,255,0.15)", borderRadius: "4px", padding: "2px 8px", color: "#D0E4FF", fontSize: "0.75rem", cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
                      <Eye size={11} /> View
                    </button>
                    <button onClick={() => setActiveShareDoc(d)} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "4px", padding: "2px 8px", color: "#cbd5e1", fontSize: "0.75rem", cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
                      <Share2 size={11} /> Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showEditor && <EditorStudio onClose={() => setShowEditor(false)} onUploadSuccess={load} uploaderRole="faculty" />}
      {activeShareDoc && <ShareModal doc={activeShareDoc} onClose={() => setActiveShareDoc(null)} />}
      {viewingDoc && <PdfViewerModal doc={viewingDoc} onClose={() => setViewingDoc(null)} />}
    </div>
  );
}

function PdfViewerModal({ doc, onClose }: { doc: Doc; onClose: () => void }) {
  const [loading, setLoading] = useState(true);
  const isPdf = doc.fileName.endsWith(".pdf");

  return (
    <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)", zIndex: 99999, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(17,19,24,0.95)", flexShrink: 0 }}>
        <div>
          <div style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem" }}>{doc.title}</div>
          <div style={{ color: "#64748b", fontSize: "0.75rem" }}>{doc.category ?? "Document"} - {(doc.fileSize / 1024).toFixed(0)} KB</div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {doc.downloadUrl && (
            <a href={doc.downloadUrl} download={doc.fileName} style={{ display: "flex", alignItems: "center", gap: 6, backgroundColor: "#D0E4FF", color: "#003258", borderRadius: "8px", padding: "8px 14px", fontWeight: 700, fontSize: "0.82rem", textDecoration: "none" }}>
              <Download size={14} /> Download
            </a>
          )}
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "8px 12px", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center" }}>
            <X size={16} />
          </button>
        </div>
      </div>
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        {loading && (
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#94a3b8", gap: 12 }}>
            <div className="spinner" />
            <span>Loading document...</span>
          </div>
        )}
        {isPdf && doc.downloadUrl ? (
          <iframe src={doc.downloadUrl} onLoad={() => setLoading(false)} onError={() => setLoading(false)} style={{ width: "100%", height: "100%", border: "none" }} title={doc.title} />
        ) : doc.downloadUrl ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: 16, color: "#94a3b8" }}>
            <div style={{ fontSize: "0.85rem" }}>Preview not available. Please download to open.</div>
            <a href={doc.downloadUrl} download={doc.fileName} style={{ display: "flex", alignItems: "center", gap: 8, backgroundColor: "#D0E4FF", color: "#003258", borderRadius: "10px", padding: "12px 24px", fontWeight: 700, textDecoration: "none" }}>
              <Download size={16} /> Download File
            </a>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: 12, color: "#94a3b8" }}>
            <div style={{ color: "#cbd5e1", fontWeight: 600 }}>Link expired</div>
            <button onClick={() => window.location.reload()} style={{ backgroundColor: "#D0E4FF", color: "#003258", border: "none", borderRadius: "10px", padding: "10px 20px", fontWeight: 700, cursor: "pointer" }}>Refresh</button>
          </div>
        )}
      </div>
    </div>
  );
}

function ShareModal({ doc, onClose }: { doc: Doc; onClose: () => void }) {
  const absoluteDownloadUrl = doc.downloadUrl.startsWith("http")
    ? doc.downloadUrl
    : typeof window !== "undefined"
      ? `${window.location.origin}${doc.downloadUrl}`
      : doc.downloadUrl;
  const shareMessage = `LIET Portal\n\nDocument: ${doc.title}\nDownload link: ${absoluteDownloadUrl}\n\nStudent portal: https://portal.mrlegezt.me`;

  return (
    <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)", zIndex: 99999, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={onClose}>
      <div style={{ backgroundColor: "#121214", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "24px", width: "360px", maxWidth: "90%", display: "flex", flexDirection: "column", gap: "16px", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: "bold", color: "#fff" }}>Share Document</h3>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#a0aec0", cursor: "pointer", fontSize: "1.2rem" }}>&times;</button>
        </div>
        <p style={{ margin: 0, fontSize: "0.85rem", color: "#718096" }}>Share <strong>{doc.title}</strong> with students or faculty.</p>
        <button onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`, "_blank")} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, backgroundColor: "#25d366", color: "#fff", border: "none", borderRadius: "8px", padding: "12px", fontWeight: "bold", fontSize: "0.9rem", cursor: "pointer" }}>
          Share on WhatsApp
        </button>
        <button
          onClick={async () => {
            if (navigator.share) {
              await navigator.share({ title: doc.title, text: `LIET Portal document: ${doc.title}`, url: absoluteDownloadUrl }).catch(() => undefined);
            } else {
              await navigator.clipboard.writeText(absoluteDownloadUrl);
              alert("Download link copied to clipboard.");
            }
          }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, backgroundColor: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "12px", fontWeight: "bold", fontSize: "0.9rem", cursor: "pointer" }}
        >
          Device Share / Copy Link
        </button>
      </div>
    </div>
  );
}
