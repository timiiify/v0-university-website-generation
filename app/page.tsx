"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { type Language, translations } from "@/lib/translations"
import { GraduationCap, Users, BookOpen, TrendingUp, ArrowRight, Award, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("ky")
  const t = translations[language]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentLanguage={language} onLanguageChange={setLanguage} />

      <main className="flex-1">
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
          <Image src="/modern-university-campus-building-with-students.jpg" alt="University Campus" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
                  {t.heroTitle}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-4 text-balance">{t.heroSubtitle}</p>
                <p className="text-base md:text-lg text-white/80 mb-8 text-pretty">{t.heroDescription}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="secondary" className="gap-2">
                    <Link href="/admissions">
                      {t.applyNow}
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    <Link href="/about">{t.learnMore}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 border-y border-border bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Users className="size-8 md:size-10 text-primary mx-auto mb-3" />
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5,000+</div>
                <div className="text-sm md:text-base text-muted-foreground">{t.students}</div>
              </div>
              <div className="text-center">
                <GraduationCap className="size-8 md:size-10 text-secondary mx-auto mb-3" />
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">300+</div>
                <div className="text-sm md:text-base text-muted-foreground">{t.faculty}</div>
              </div>
              <div className="text-center">
                <BookOpen className="size-8 md:size-10 text-accent mx-auto mb-3" />
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm md:text-base text-muted-foreground">{t.programs}</div>
              </div>
              <div className="text-center">
                <Award className="size-8 md:size-10 text-primary mx-auto mb-3" />
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm md:text-base text-muted-foreground">{t.years}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                  {language === "ky"
                    ? "Енисей Бишкек Университетине кош келиңиздер"
                    : language === "zh"
                      ? "欢迎来到叶尼塞比什凯克大学"
                      : "Welcome to Yenisei Bishkek University"}
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    {language === "ky"
                      ? "Енисей Бишкек Университети - Борбордук Азиянын жетекчи билим берүү мекемеси, жогорку академиялык стандарттарды жана инновацияларды камсыз кылат."
                      : language === "zh"
                        ? "叶尼塞比什凯克大学是中亚地区领先的教育机构，确保最高的学术标准和创新。"
                        : "Yenisei Bishkek University is a leading educational institution in Central Asia, ensuring the highest academic standards and innovation."}
                  </p>
                  <p>
                    {language === "ky"
                      ? "Биз студенттерге келечекте ийгиликке жетүү үчүн керектүү билимдерди жана көндүмдөрдү беребiz."
                      : language === "zh"
                        ? "我们为学生提供在未来取得成功所需的知识和技能。"
                        : "We provide students with the knowledge and skills necessary to succeed in the future."}
                  </p>
                </div>
                <Button asChild size="lg" className="mt-6 gap-2">
                  <Link href="/about">
                    {t.learnMore}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/university-students-in-modern-classroom.jpg" alt="Students" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4 text-balance">
              {t.programsTitle}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
              {language === "ky"
                ? "Биздин заманбап окуу программаларыбыз менен келечегиңизди куруңуз"
                : language === "zh"
                  ? "通过我们的现代化学习项目构建您的未来"
                  : "Build your future with our modern study programs"}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <GraduationCap className="size-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{t.engineering}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {language === "ky"
                    ? "Заманбап инженердик чечимдер жана технологиялар. Практикалык тажрыйба жана теориялык билим."
                    : language === "zh"
                      ? "现代工程解决方案和技术。实践经验和理论知识。"
                      : "Modern engineering solutions and technologies. Practical experience and theoretical knowledge."}
                </p>
                <Button variant="ghost" className="gap-2 p-0 h-auto">
                  {t.learnMore}
                  <ArrowRight className="size-4" />
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                <div className="size-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                  <TrendingUp className="size-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{t.business}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {language === "ky"
                    ? "Лидерлик жана башкаруу көндүмдөрүн өркүндөтүү. Бизнес аналитика жана стратегия."
                    : language === "zh"
                      ? "培养领导力和管理技能。商业分析和策略。"
                      : "Develop leadership and management skills. Business analytics and strategy."}
                </p>
                <Button variant="ghost" className="gap-2 p-0 h-auto">
                  {t.learnMore}
                  <ArrowRight className="size-4" />
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                <div className="size-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <BookOpen className="size-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{t.sciences}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {language === "ky"
                    ? "Изилдөөлөр жана илимий ачылыштар. Инновациялык лабораториялар жана долбоорлор."
                    : language === "zh"
                      ? "研究和科学发现。创新实验室和项目。"
                      : "Research and scientific discoveries. Innovation labs and projects."}
                </p>
                <Button variant="ghost" className="gap-2 p-0 h-auto">
                  {t.learnMore}
                  <ArrowRight className="size-4" />
                </Button>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">{t.latestNews}</h2>
              <Button asChild variant="outline" className="gap-2 bg-transparent">
                <Link href="/news">
                  {language === "ky" ? "Баардык жаңылыктар" : language === "zh" ? "所有新闻" : "All News"}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/university-laboratory-with-modern-equipment.jpg"
                    alt="News 1"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">2026-01-05</div>
                  <h3 className="text-lg font-semibold mb-2 text-balance">
                    {language === "ky"
                      ? "Жаңы илимий лаборатория ачылды"
                      : language === "zh"
                        ? "新科学实验室开放"
                        : "New Scientific Laboratory Opened"}
                  </h3>
                  <p className="text-sm text-muted-foreground text-pretty">
                    {language === "ky"
                      ? "Университет заманбап жабдууларга ээ жаңы илимий лабораторияны ачты..."
                      : language === "zh"
                        ? "大学开设了配备现代化设备的新科学实验室..."
                        : "The university opened a new scientific laboratory..."}
                  </p>
                </div>
              </Card>
              <Card className="overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/international-students-conference.jpg"
                    alt="News 2"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">2025-12-28</div>
                  <h3 className="text-lg font-semibold mb-2 text-balance">
                    {language === "ky"
                      ? "Эл аралык студенттик конференция"
                      : language === "zh"
                        ? "国际学生会议"
                        : "International Student Conference"}
                  </h3>
                  <p className="text-sm text-muted-foreground text-pretty">
                    {language === "ky"
                      ? "Биздин университет 15 өлкөдөн студенттерди чогултту..."
                      : language === "zh"
                        ? "我们大学举办了一场国际会议..."
                        : "Our university hosted an international conference..."}
                  </p>
                </div>
              </Card>
              <Card className="overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/graduation-ceremony.png"
                    alt="News 3"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">2025-12-15</div>
                  <h3 className="text-lg font-semibold mb-2 text-balance">
                    {language === "ky"
                      ? "Жыл аягынын жыйынтыктары"
                      : language === "zh"
                        ? "年终总结"
                        : "End of Year Results"}
                  </h3>
                  <p className="text-sm text-muted-foreground text-pretty">
                    {language === "ky"
                      ? "2025-жылы 850 студент ийгиликтүү дипломдорду алды..."
                      : language === "zh"
                        ? "2025年，850名学生成功获得文凭..."
                        : "In 2025, 850 students successfully received diplomas..."}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <Image src="/diverse-university-students-studying-together.jpg" alt="Join us" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-secondary/90" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <Globe className="size-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-white">
              {language === "ky"
                ? "Биздин академиялык коомчулукка кошулуңуз"
                : language === "zh"
                  ? "加入我们的学术社区"
                  : "Join Our Academic Community"}
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty text-white/90">
              {language === "ky"
                ? "Бүгүн эле келечектин лидери болуу жолуңузду баштаңыз. Өзүңүздүн потенциалыңызды ачыңыз жана дүйнөнү өзгөртүңүз."
                : language === "zh"
                  ? "今天就开始您成为未来领导者的旅程。释放您的潜力，改变世界。"
                  : "Start your journey to becoming a leader of tomorrow today. Unlock your potential and change the world."}
            </p>
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link href="/admissions">
                {t.applyNow}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer currentLanguage={language} />
    </div>
  )
}
