import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Business Assistant",
  description: "Chat-centric assistant"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="rtl">
      <body className="bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}
