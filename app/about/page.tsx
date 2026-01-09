"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { type Language, translations } from "@/lib/translations"
import { Users, Building2, FlaskConical, Award, BookOpen, Globe } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const [language, setLanguage] = useState<Language>("ky")
  const t = translations[language]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentLanguage={language} onLanguageChange={setLanguage} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-accent/10 via-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{t.aboutTitle}</h1>
              <p className="text-xl text-muted-foreground mb-6 text-balance">{t.aboutIntro}</p>
              <p className="text-base text-muted-foreground text-pretty">{t.aboutDescription}</p>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image src="/modern-university-building.png" alt="University Campus" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="size-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <Users className="size-8" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">5,247</div>
                <div className="text-sm text-muted-foreground">{t.students}</div>
              </div>

              <div className="text-center">
                <div className="size-16 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-4">
                  <Award className="size-8" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">324</div>
                <div className="text-sm text-muted-foreground">{t.faculty}</div>
              </div>

              <div className="text-center">
                <div className="size-16 rounded-xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-4">
                  <BookOpen className="size-8" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">52</div>
                <div className="text-sm text-muted-foreground">{t.programs}</div>
              </div>

              <div className="text-center">
                <div className="size-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <Globe className="size-8" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">28</div>
                <div className="text-sm text-muted-foreground">
                  {language === "ky" ? "Өнөктөштөр" : language === "zh" ? "合作伙伴" : "Partners"}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8">
                <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Users className="size-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t.facultyTitle}</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{t.facultyDescription}</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {language === "ky" ? "Профессорлор" : language === "zh" ? "教授" : "Professors"}
                      </span>
                      <span className="font-semibold text-foreground">89</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {language === "ky" ? "Докторлор" : language === "zh" ? "博士" : "PhDs"}
                      </span>
                      <span className="font-semibold text-foreground">156</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {language === "ky" ? "Адистер" : language === "zh" ? "专家" : "Specialists"}
                      </span>
                      <span className="font-semibold text-foreground">79</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="size-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                  <Building2 className="size-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t.facilitiesTitle}</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{t.facilitiesDescription}</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {language === "ky" ? "Лабораториялар" : language === "zh" ? "实验室" : "Laboratories"}
                      </span>
                      <span className="font-semibold text-foreground">32</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {language === "ky" ? "Китепканалар" : language === "zh" ? "图书馆" : "Libraries"}
                      </span>
                      <span className="font-semibold text-foreground">4</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {language === "ky" ? "Спорт залдары" : language === "zh" ? "体育馆" : "Sports Halls"}
                      </span>
                      <span className="font-semibold text-foreground">6</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="size-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <FlaskConical className="size-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t.researchTitle}</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{t.researchDescription}</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {language === "ky" ? "Долбоорлор" : language === "zh" ? "项目" : "Projects"}
                      </span>
                      <span className="font-semibold text-foreground">67</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {language === "ky" ? "Жарыяланмалар" : language === "zh" ? "出版物" : "Publications"}
                      </span>
                      <span className="font-semibold text-foreground">234</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {language === "ky" ? "Өнөктөштөр" : language === "zh" ? "合作伙伴" : "Partners"}
                      </span>
                      <span className="font-semibold text-foreground">28</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {language === "ky" ? "Биздин миссия" : language === "zh" ? "我们的使命" : "Our Mission"}
                </h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  {language === "ky"
                    ? "Биздин максат - студенттерге глобалдык рыноктун талаптарына жооп берген жогорку деңгээлдеги билим берүү жана аларды ийгиликке жетүүгө даярдоо."
                    : language === "zh"
                      ? "我们的目标是为学生提供符合全球市场要求的高水平教育，并为他们的成功做好准备。"
                      : "Our goal is to provide students with high-level education that meets global market demands and prepare them for success."}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Award className="size-4" />
                    </div>
                    {language === "ky" ? "Сапат" : language === "zh" ? "质量" : "Quality"}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language === "ky"
                      ? "Биз билим берүүнүн эң жогорку стандарттарына умтулабыз"
                      : language === "zh"
                        ? "我们追求最高的教育标准"
                        : "We strive for the highest standards of education"}
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="size-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                      <Globe className="size-4" />
                    </div>
                    {language === "ky" ? "Эл аралыкчылык" : language === "zh" ? "国际化" : "International"}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language === "ky"
                      ? "Глобалдык өнөктөштөр жана эл аралык программалар"
                      : language === "zh"
                        ? "全球合作伙伴和国际项目"
                        : "Global partnerships and international programs"}
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="size-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      <FlaskConical className="size-4" />
                    </div>
                    {language === "ky" ? "Инновация" : language === "zh" ? "创新" : "Innovation"}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language === "ky"
                      ? "Заманбап окутуу ыкмалары жана технологиялар"
                      : language === "zh"
                        ? "现代教学方法和技术"
                        : "Modern teaching methods and technologies"}
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Users className="size-4" />
                    </div>
                    {language === "ky" ? "Коомчулук" : language === "zh" ? "社区" : "Community"}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language === "ky"
                      ? "Колдоочу жана инклюзивдүү билим берүү чөйрөсү"
                      : language === "zh"
                        ? "支持性和包容性的教育环境"
                        : "Supportive and inclusive educational environment"}
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer currentLanguage={language} />
    </div>
  )
}
