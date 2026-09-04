import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "https://oracleagenthub.com"),
  title: {
    default: "OracleAgentHub — Agentic Intelligence for Oracle Environments",
    template: "%s | OracleAgentHub",
  },
  description:
    "Discover tested Oracle-focused AI agents, agentic skills, workflows and deployment-ready Agent Kits for database administration, performance, security, migration and automation.",
  keywords: [
    "Oracle agents",
    "Oracle AI",
    "agentic AI",
    "Oracle database automation",
    "Oracle DBA tools",
    "Oracle performance",
    "Oracle security",
    "agent kits",
    "Oracle 26 AI",
  ],
  authors: [{ name: "OracleAgentHub" }],
  creator: "OracleAgentHub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL ?? "https://oracleagenthub.com",
    siteName: "OracleAgentHub",
    title: "OracleAgentHub — Agentic Intelligence for Oracle Environments",
    description:
      "Tested Oracle-focused AI agents, skills, workflows and deployment-ready Agent Kits.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OracleAgentHub",
    description: "Agentic intelligence for Oracle environments.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
