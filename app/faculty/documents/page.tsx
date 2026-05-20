"use client";
import { useEffect, useState, useRef } from "react";
import { Share2 } from "lucide-react";
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
  const [activeShareDoc, setActiveShareDoc] = useState<Doc | null>(null);
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
              <a key={d.id} href={d.downloadUrl} target="_blank" rel="noopener" className="doc-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", minHeight: "160px" }}>
                <div>
                  <div className="doc-icon">{fileIcon(d.fileName)}</div>
                  <div className="doc-title" style={{ marginTop: 8 }}>{d.title}</div>
                  <div className="doc-meta">{d.category} · {(d.fileSize / 1024).toFixed(0)} KB</div>
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
      {showEditor && (
        <EditorStudio 
          onClose={() => setShowEditor(false)} 
          onUploadSuccess={load} 
          uploaderRole="faculty" 
        />
      )}
      {activeShareDoc && (
        <ShareModal 
          doc={activeShareDoc} 
          onClose={() => setActiveShareDoc(null)} 
        />
      )}
    </div>
  );
}

interface ShareModalProps {
  doc: Doc;
  onClose: () => void;
}

function ShareModal({ doc, onClose }: ShareModalProps) {
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
