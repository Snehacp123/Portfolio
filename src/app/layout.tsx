import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sneha Mohanan — Full-Stack Developer",
  description: "Full-Stack Developer specializing in microservices, AI-powered apps, Go, Next.js & cloud infrastructure. AWS & Oracle Certified.",
  keywords: ["Full-Stack Developer", "Golang", "Next.js", "Microservices", "AI", "Kerala", "India"],
  authors: [{ name: "Sneha Mohanan" }],
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Sneha Mohanan — Full-Stack Developer",
    description: "Architect of enterprise AI-powered microservice platforms. AWS & Oracle Certified.",
    type: "website",
    url: "https://snehacp.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
