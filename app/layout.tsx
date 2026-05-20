import type { Metadata } from "next";
import "./globals.css";
import PwaInstaller from "@/app/components/PwaInstaller";

export const metadata: Metadata = {
  title: "LIET Portal — Lords Institute of Engineering and Technology",
  description: "Student & Faculty Academic Portal — Lords Institute of Engineering and Technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="LIET Portal" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#050505" />
      </head>
      <body>
        {children}
        <PwaInstaller />
      </body>
    </html>
  );
}
