"use client";
import { useEffect, useState, useRef } from "react";
import EditorStudio from "@/app/components/EditorStudio";

type Doc = { id: string; title: string; fileName: string; fileSize: number; category?: string; branch?: string; year?: number; downloadUrl: string; createdAt: string; };

function fileIcon(name: string) {
  if (name.endsWith(".pdf")) return "📄";
  if (name.match(/\.(doc|docx)$/)) return "📝";
  if (name.match(/\.(xls|xlsx)$/)) return "📊";
  if (name.match(/\.(png|jpg|jpeg|webp)$/)) return "🖼️";
  return "📎";
}

export default function FacultyDocumentsPage() {
  const [docs, setDocs] = useState<Doc[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Notes");
  const [isPublic, setIsPublic] = useState(true);
  const [showEditor, setShowEditor] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const load = () => fetch("/api/documents").then((r) => r.json()).then((d) => { setDocs(d.documents ?? []); setLoading(false); });
  useEffect(() => { load(); }, []);

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    const file = fileRef.current?.files?.[0];
    if (!file || !title) return;
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file); fd.append("title", title);
    fd.append("category", category); fd.append("isPublic", String(isPublic));
    await fetch("/api/documents", { method: "POST", body: fd });
    setTitle(""); if (fileRef.current) fileRef.current.value = "";
    setUploading(false); load();
  }

  return (
    <div className="portal-main">
      <div className="portal-topbar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="portal-topbar-title">📂 Documents</div>
        <button 
          onClick={() => setShowEditor(true)} 
          className="btn-primary faculty" 
          style={{ width: "auto", display: "flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", border: "none", outline: "none", fontSize: "0.85rem", padding: "8px 16px", borderRadius: "8px", cursor: "pointer" }}
        >
          🎨 PDF Editor Studio
        </button>
      </div>
      <div className="portal-content">
        <form onSubmit={handleUpload} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: 24, marginBottom: 28 }}>
          <div className="section-title" style={{ marginBottom: 16 }}>📤 Upload Document</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: 12, alignItems: "end" }}>
            <div className="form-group">
              <label className="form-label">Title</label>
              <input className="form-input faculty" placeholder="Document title..." value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div className="form-group">
              <label className="form-label">Category</label>
              <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                {["Notes","Assignment","Circular","Syllabus","Question Paper","Other"].map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Visibility</label>
              <select className="form-select" value={String(isPublic)} onChange={(e) => setIsPublic(e.target.value === "true")}>
                <option value="true">Public (all students)</option>
                <option value="false">Private</option>
              </select>
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 12, alignItems: "center" }}>
            <input type="file" ref={fileRef} accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.webp,.txt" required style={{ color: "#94a3b8", fontSize: "0.875rem", flex: 1 }} />
            <button className="btn-primary faculty" type="submit" disabled={uploading} style={{ width: "auto", padding: "12px 24px" }}>{uploading ? "Uploading..." : "Upload"}</button>
          </div>
        </form>

        {loading ? <div className="spinner" /> : docs.length === 0 ? (
          <div className="empty-state"><div className="empty-icon">📂</div><div>No documents yet</div></div>
        ) : (
          <div className="doc-grid">
            {docs.map((d) => (
              <a key={d.id} href={d.downloadUrl} target="_blank" rel="noopener" className="doc-card">
                <div className="doc-icon">{fileIcon(d.fileName)}</div>
                <div className="doc-title">{d.title}</div>
                <div className="doc-meta">{d.category} · {(d.fileSize / 1024).toFixed(0)} KB</div>
                <div className="doc-meta" style={{ marginTop: 4 }}>{new Date(d.createdAt).toLocaleDateString("en-IN")}</div>
              </a>
            ))}
          </div>
        )}
      </div>
      {showEditor && (
        <EditorStudio 
          onClose={() => setShowEditor(false)} 
          onUploadSuccess={load} 
          uploaderRole="faculty" 
        />
      )}
    </div>
  );
}
