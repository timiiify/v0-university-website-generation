"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { type Language, translations } from "@/lib/translations"

interface NavbarProps {
  currentLanguage: Language
  onLanguageChange: (lang: Language) => void
}

export function Navbar({ currentLanguage, onLanguageChange }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = translations[currentLanguage]

  const navLinks = [
    { href: "/", label: t.home },
    { href: "/news", label: t.news },
    { href: "/admissions", label: t.admissions },
    { href: "/about", label: t.about },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="Yenisei Bishkek University Logo" className="size-12" />
            <div className="hidden md:block">
              <div className="font-bold text-foreground leading-tight">
                {currentLanguage === "en"
                  ? "Yenisei Bishkek"
                  : currentLanguage === "zh"
                    ? "叶尼塞比什凯克"
                    : "Енисей Бишкек"}
              </div>
              <div className="text-xs text-muted-foreground">
                {currentLanguage === "en" ? "University" : currentLanguage === "zh" ? "大学" : "Университети"}
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
