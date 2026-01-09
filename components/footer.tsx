"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { type Language, translations } from "@/lib/translations"

interface FooterProps {
  currentLanguage: Language
}

export function Footer({ currentLanguage }: FooterProps) {
  const t = translations[currentLanguage]

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="Yenisei Bishkek University Logo" className="size-12" />
              <div className="font-bold text-foreground">
                {currentLanguage === "en"
                  ? "Yenisei Bishkek University"
                  : currentLanguage === "zh"
                    ? "叶尼塞比什凯克大学"
                    : "Енисей Бишкек Университети"}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{t.heroSubtitle}</p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="size-9 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors flex items-center justify-center text-primary"
              >
                <Facebook className="size-4" />
              </Link>
              <Link
                href="#"
                className="size-9 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors flex items-center justify-center text-primary"
              >
                <Instagram className="size-4" />
              </Link>
              <Link
                href="#"
                className="size-9 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors flex items-center justify-center text-primary"
              >
                <Twitter className="size-4" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.quickLinks}</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t.home}
              </Link>
              <Link href="/news" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t.news}
              </Link>
              <Link
                href="/admissions"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.admissions}
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t.about}
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.contact}</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="size-4 mt-0.5 shrink-0" />
                <span>{t.address}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="size-4 shrink-0" />
                <span>+996 (550) 847-7625</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="size-4 shrink-0" />
                <span>info@ybu.edu.kg</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2026 Yenisei Bishkek University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
