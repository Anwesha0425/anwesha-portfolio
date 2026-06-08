import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Anwesha Rani Gouda | Full-Stack Developer",
  description:
    "Portfolio of Anwesha Rani Gouda — B.Tech Electrical Engineering student at NIT Rourkela, Full-Stack Developer specializing in React, Next.js, Node.js, MongoDB & modern web technologies.",
  keywords: [
    "Anwesha Rani Gouda",
    "Full Stack Developer",
    "NIT Rourkela",
    "ReactJS",
    "NodeJS",
    "Portfolio",
    "Web Developer",
    "MERN Stack",
    "Next.js Developer",
    "TypeScript",
  ],
  authors: [{ name: "Anwesha Rani Gouda" }],
  openGraph: {
    title: "Anwesha Rani Gouda | Full-Stack Developer",
    description:
      "Portfolio showcasing full-stack projects, skills, and achievements of Anwesha Rani Gouda — NIT Rourkela.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anwesha Rani Gouda | Full-Stack Developer",
    description:
      "Portfolio showcasing full-stack projects, skills, and achievements of Anwesha Rani Gouda.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
