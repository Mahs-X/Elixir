import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robin | Senior Full-Stack & Flutter Mobile Architect",
  description:
    "4+ Years experience building high-speed Next.js web platforms and native Flutter mobile apps. Optimized for sub-1.5s loads, zero cloud waste, and 10k+ concurrent users.",
  keywords: [
    "Robin Developer",
    "Senior Full-Stack Developer",
    "Next.js Developer",
    "Flutter App Developer",
    "Tailwind CSS v4",
    "Supabase PostgreSQL",
    "Hire Fullstack Developer Bangladesh",
  ],
  authors: [{ name: "Robin", url: "https://github.com/Mahs-X" }],
  openGraph: {
    title: "Robin | Senior Full-Stack & Flutter Mobile Architect",
    description:
      "I Architect High-Speed Web & Mobile Platforms Engineered to Drive Real Revenue. 4+ Years Experience.",
    url: "https://github.com/Mahs-X",
    siteName: "Robin Portfolio",
    locale: "en_US",
    type: "website",
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#090D16] text-slate-100 antialiased selection:bg-emerald-500/25 selection:text-emerald-300">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
