import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Montserrat, Inter } from "next/font/google"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700", "800"],
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Shiery Tendilla",
  description:
    "Find your dream home in Pahrump with Shiery Tendilla—local expertise, 3 decades of experience, featured listings, and trusted guidance.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${montserrat.variable} ${inter.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
