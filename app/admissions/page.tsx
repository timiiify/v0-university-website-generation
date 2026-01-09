"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { type Language, translations } from "@/lib/translations"
import { CheckCircle, FileText, Users, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AdmissionsPage() {
  const [language, setLanguage] = useState<Language>("ky")
  const t = translations[language]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentLanguage={language} onLanguageChange={setLanguage} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/10 via-accent/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{t.admissionsTitle}</h1>
              <p className="text-xl text-muted-foreground mb-6 text-balance">{t.admissionsIntro}</p>
              <p className="text-base text-muted-foreground text-pretty">{t.admissionsDescription}</p>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <FileText className="size-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t.requirements}</h2>
                </div>
                <Card className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground leading-relaxed">{t.req1}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground leading-relaxed">{t.req2}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground leading-relaxed">{t.req3}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground leading-relaxed">{t.req4}</span>
                    </li>
                  </ul>
                </Card>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                    <Users className="size-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t.eligibility}</h2>
                </div>
                <Card className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground leading-relaxed">{t.eli1}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground leading-relaxed">{t.eli2}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground leading-relaxed">{t.eli3}</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div className="size-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                <Calendar className="size-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t.applicationProcess}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="p-6 text-center">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <p className="text-foreground font-medium text-pretty">{t.step1}</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <p className="text-foreground font-medium text-pretty">{t.step2}</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <p className="text-foreground font-medium text-pretty">{t.step3}</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mx-auto mb-4">
                  4
                </div>
                <p className="text-foreground font-medium text-pretty">{t.step4}</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary to-secondary text-primary-foreground text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
                {language === "ky"
                  ? "Азыр кабыл алууга өтүнүү беруу"
                  : language === "zh"
                    ? "现在申请入学"
                    : "Apply for Admission Now"}
              </h2>
              <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto opacity-90 text-pretty">
                {language === "ky"
                  ? "Бүгүн эле биздин студенттик коомчулукка кошулуңуз жана келечектеги карьераңызды баштаңыз"
                  : language === "zh"
                    ? "今天就加入我们的学生社区，开启您的未来职业生涯"
                    : "Join our student community today and start your future career"}
              </p>
              <Button size="lg" variant="secondary" className="gap-2">
                <Link href="#" className="flex items-center gap-2">
                  {t.applyNow}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Card>
          </div>
        </section>
      </main>

      <Footer currentLanguage={language} />
    </div>
  )
}
