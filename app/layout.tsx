import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ganesh Borole",
  description:
    "Personal portfolio of Ganesh Borole - Full-Stack Developer specializing in React, Next.js, and modern web technologies. View my projects and experience.",
  generator: "v0.app",
  keywords: ["Full-Stack Developer", "React", "Next.js", "Web Development", "Portfolio"],
  authors: [{ name: "Ganesh Borole" }],
  openGraph: {
    title: "Ganesh Borole- Full-Stack Developer",
    description: "Personal portfolio showcasing web development projects and experience",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
