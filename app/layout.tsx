import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PillID — Identify Pills from Photos",
  description: "Take a photo of any pill to instantly identify medication, check drug interactions, and track your dosage schedule."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fc0d3c17-44ec-4c8a-a898-67ce26bc7c59"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
