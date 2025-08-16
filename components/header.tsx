"use client"

import { useState } from "react"
import { Home, Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#listings", label: "Featured Listings" },
    { href: "#about", label: "Why Marci" },
    { href: "#search", label: "Search" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ]

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="border-b border-border/30 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/90 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Left: Wordmark */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center space-x-4 hover:opacity-80 transition-all duration-300 group"
          >
            <div className="bg-accent/10 p-3 rounded-xl group-hover:bg-accent/20 transition-colors">
              <Home className="h-8 w-8 text-accent" />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-serif font-bold text-primary leading-tight">Marci Metzger</h1>
              <p className="text-sm text-muted-foreground leading-tight font-mono font-medium">
                The Ridge Realty Group
              </p>
            </div>
          </button>

          {/* Middle: Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-foreground hover:text-accent transition-all duration-300 font-medium text-sm tracking-wide relative group font-mono"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Right: Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 text-foreground hover:text-accent transition-all duration-300 hover:bg-accent/10 rounded-lg"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-border/30 bg-background/98 backdrop-blur-sm rounded-b-2xl">
            <nav className="flex flex-col space-y-2 pt-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-foreground hover:text-accent hover:bg-accent/5 transition-all duration-300 font-medium py-4 px-6 rounded-lg font-mono"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
