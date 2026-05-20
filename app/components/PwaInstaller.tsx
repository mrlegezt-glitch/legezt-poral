"use client";
import { useEffect, useState } from "react";

export default function PwaInstaller() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    // Register service worker
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js")
        .then((reg) => console.log("Service Worker registered successfully:", reg.scope))
        .catch((err) => console.error("Service Worker registration failed:", err));
    }

    // Check if app is already running in standalone mode (installed)
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches || (navigator as any).standalone;
    if (isStandalone) return;

    // Check if user dismissed the prompt in this session
    const isDismissed = sessionStorage.getItem("pwa_install_dismissed");
    if (isDismissed) return;

    // Detect mobile device
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    const isMobile = mobileRegex.test(navigator.userAgent);
    if (!isMobile) return;

    // Detect iOS specifically
    const iosDetected = /iPhone|iPad|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIos(iosDetected);

    if (iosDetected) {
      // For iOS, show prompt after a short delay
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 3000);
      return () => clearTimeout(timer);
    }

    // Listen for the beforeinstallprompt event (Android/Chrome)
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to install prompt: ${outcome}`);
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    sessionStorage.setItem("pwa_install_dismissed", "true");
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
        maxWidth: "400px",
        background: "rgba(13, 13, 13, 0.95)",
        backdropFilter: "blur(16px)",
        border: "1px solid #222",
        borderRadius: "12px",
        padding: "20px",
        zIndex: 99999,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.9)",
        animation: "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <style>{`
        @keyframes slideUp {
          from { transform: translate(-50%, 100px); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
      `}</style>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src="/logo.png"
            alt="App Logo"
            style={{ width: "40px", height: "40px", borderRadius: "8px" }}
          />
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: "bold",
                fontSize: "1rem",
                color: "#fff",
                textTransform: "uppercase",
              }}
            >
              Install LIET Portal
            </div>
            <div style={{ fontSize: "0.75rem", color: "#a3a3a3" }}>
              Add to Home Screen for native experience
            </div>
          </div>
        </div>

        {isIos ? (
          <div
            style={{
              fontSize: "0.85rem",
              color: "#a3a3a3",
              lineHeight: "1.5",
              background: "#080808",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #161616",
            }}
          >
            To install this app on your device: tap the{" "}
            <span style={{ color: "#fff", fontWeight: "bold" }}>Share</span> icon in
            Safari, then select{" "}
            <span style={{ color: "#fff", fontWeight: "bold" }}>Add to Home Screen</span>.
          </div>
        ) : (
          <div style={{ fontSize: "0.85rem", color: "#a3a3a3", lineHeight: "1.5" }}>
            Install this portal on your phone for easy access, notifications, and an offline-ready interface.
          </div>
        )}

        <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
          {isIos ? (
            <button
              onClick={handleDismiss}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "6px",
                border: "none",
                background: "#fff",
                color: "#000",
                fontWeight: "bold",
                fontSize: "0.85rem",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              Got It
            </button>
          ) : (
            <>
              <button
                onClick={handleDismiss}
                style={{
                  flex: 1,
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #222",
                  background: "transparent",
                  color: "#a3a3a3",
                  fontWeight: "bold",
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  textTransform: "uppercase",
                }}
              >
                Dismiss
              </button>
              <button
                onClick={handleInstall}
                style={{
                  flex: 1.5,
                  padding: "10px",
                  borderRadius: "6px",
                  border: "none",
                  background: "#fff",
                  color: "#000",
                  fontWeight: "bold",
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  textTransform: "uppercase",
                }}
              >
                Install Now
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
