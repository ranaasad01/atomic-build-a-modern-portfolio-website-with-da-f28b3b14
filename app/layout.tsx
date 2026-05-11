import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Morgan — Full-Stack Developer",
  description:
    "Full-stack developer specializing in React, Next.js, and TypeScript. Building fast, beautiful, and scalable web applications.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Alex Morgan" }],
  openGraph: {
    title: "Alex Morgan — Full-Stack Developer",
    description: "Building fast, beautiful, and scalable web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Morgan — Full-Stack Developer",
    description: "Building fast, beautiful, and scalable web applications.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
