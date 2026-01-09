"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { type Language, translations } from "@/lib/translations"
import { Calendar, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function NewsPage() {
  const [language, setLanguage] = useState<Language>("ky")
  const t = translations[language]

  const newsItems = [
    {
      id: 1,
      image: "/modern-university-laboratory-with-students.jpg",
      date: "2026-01-05",
      category: { ky: "Илим", zh: "科学", en: "Science" },
      title: {
        ky: "Жаңы илимий лаборатория ачылды",
        zh: "新科学实验室开放",
        en: "New Scientific Laboratory Opened",
      },
      excerpt: {
        ky: "Университет заманбап жабдууларга ээ жаңы илимий лабораторияны ачты. Бул студенттерге өз билимдерин тереңдетүүгө жана илимий изилдөөлөрдү жүргүзүүгө мүмкүндүк берет. Лаборатория 50 студентти бир учурда кабыл алат.",
        zh: "大学开设了配备现代化设备的新科学实验室。这将使学生能够深化他们的知识并进行科学研究。实验室可同时容纳50名学生。",
        en: "The university opened a new scientific laboratory equipped with modern equipment. This will allow students to deepen their knowledge and conduct scientific research. The lab can accommodate 50 students at once.",
      },
    },
    {
      id: 2,
      image: "/international-student-conference-multicultural.jpg",
      date: "2025-12-28",
      category: { ky: "Окуялар", zh: "活动", en: "Events" },
      title: {
        ky: "Эл аралык студенттик конференция",
        zh: "国际学生会议",
        en: "International Student Conference",
      },
      excerpt: {
        ky: "Биздин университет 15 өлкөдөн студенттерди чогултуучу эл аралык конференцияны өткөрдү. Конференцияда илим, технология жана инновация боюнча маанилүү маселелер талкууланды.",
        zh: "我们大学举办了一场国际会议，汇集了来自15个国家的学生。会议讨论了科学、技术和创新方面的重要问题。",
        en: "Our university hosted an international conference bringing together students from 15 countries. The conference discussed important issues in science, technology and innovation.",
      },
    },
    {
      id: 3,
      image: "/university-graduation-ceremony-celebrating.jpg",
      date: "2025-12-15",
      category: { ky: "Жетишкендиктер", zh: "成就", en: "Achievements" },
      title: {
        ky: "Жыл аягынын жыйынтыктары",
        zh: "年终总结",
        en: "End of Year Results",
      },
      excerpt: {
        ky: "2025-жылы 850 студент ийгиликтүү дипломдорду алды жана ишке кабыл алынды. Биздин түгүл тикүүчүлөрдүн 95% жумуш таап, өз кесиптери боюнча иштешүүдө.",
        zh: "2025年，850名学生成功获得文凭并就业。我们95%的毕业生找到了工作，并在他们的专业领域工作。",
        en: "In 2025, 850 students successfully received diplomas and got employed. 95% of our graduates found jobs and are working in their fields.",
      },
    },
    {
      id: 4,
      image: "/modern-university-library.png",
      date: "2025-11-20",
      category: { ky: "Инфраструктура", zh: "基础设施", en: "Infrastructure" },
      title: {
        ky: "Китепкананы жаңыртуу",
        zh: "图书馆更新",
        en: "Library Renovation",
      },
      excerpt: {
        ky: "Китепкана толук жаңыртылып, 50,000 жаңы китептер жана электрондук ресурстар кошулду. Заманбап окуу зоналары жана мультимедиа залдары түзүлдү.",
        zh: "图书馆全面翻新，新增5万本图书和电子资源。创建了现代化的学习区和多媒体室。",
        en: "The library has been completely renovated with 50,000 new books and electronic resources added. Modern study areas and multimedia rooms were created.",
      },
    },
    {
      id: 5,
      image: "/students-working-on-technology-innovation-project.jpg",
      date: "2025-10-30",
      category: { ky: "Жетишкендиктер", zh: "成就", en: "Achievements" },
      title: {
        ky: "Технологиялык инновациялар",
        zh: "技术创新",
        en: "Technological Innovations",
      },
      excerpt: {
        ky: "Биздин студенттер улуттук технологиялык конкурста биринчи орунду алышты. Алардын долбоору жасалма интеллект аркылуу медициналык диагностиканы өркүндөтүүгө багытталган.",
        zh: "我们的学生在全国技术竞赛中获得第一名。他们的项目旨在通过人工智能改进医疗诊断。",
        en: "Our students won first place in the national technology competition. Their project aims to improve medical diagnostics through artificial intelligence.",
      },
    },
    {
      id: 6,
      image: "/university-sports-team-celebrating-victory.jpg",
      date: "2025-10-10",
      category: { ky: "Спорт", zh: "体育", en: "Sports" },
      title: {
        ky: "Спорттук жетишкендиктер",
        zh: "体育成就",
        en: "Sports Achievements",
      },
      excerpt: {
        ky: "Университеттин командасы студенттик олимпиадада 15 медалга ээ болду: 6 алтын, 5 күмүш жана 4 коло медаль. Биз биздин спортчуларыбыз менен сыймыктанабыз!",
        zh: "大学队在学生奥林匹克运动会上获得15枚奖牌：6金、5银、4铜。我们为我们的运动员感到自豪！",
        en: "The university team won 15 medals at the student Olympics: 6 gold, 5 silver and 4 bronze. We are proud of our athletes!",
      },
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentLanguage={language} onLanguageChange={setLanguage} />

      <main className="flex-1">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <Image src="/university-news-and-events-banner.jpg" alt="News Banner" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">{t.latestNews}</h1>
              <p className="text-lg text-white/90 text-pretty">
                {language === "ky"
                  ? "Университеттин жашоосунан акыркы жаңылыктар, окуялар жана жетишкендиктер"
                  : language === "zh"
                    ? "大学生活的最新新闻、事件和成就"
                    : "Latest news, events and achievements from university life"}
              </p>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title[language]}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {item.category[language]}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="size-4" />
                      <time>
                        {new Date(item.date).toLocaleDateString(
                          language === "ky" ? "ky-KG" : language === "zh" ? "zh-CN" : "en-US",
                          { year: "numeric", month: "long", day: "numeric" },
                        )}
                      </time>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 text-balance group-hover:text-primary transition-colors">
                      {item.title[language]}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed text-pretty line-clamp-3">
                      {item.excerpt[language]}
                    </p>
                    <Button variant="ghost" className="gap-2 group-hover:gap-3 transition-all p-0 h-auto text-primary">
                      {t.readMore}
                      <ChevronRight className="size-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {language === "ky" ? "Архив" : language === "zh" ? "档案" : "Archive"}
            </h2>
            <p className="text-muted-foreground mb-8">
              {language === "ky"
                ? "Мурунку жылдардагы жаңылыктарды көрүү үчүн архивди карап чыгыңыз"
                : language === "zh"
                  ? "查看档案以查看往年的新闻"
                  : "Check the archive to see news from previous years"}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="outline">2025</Button>
              <Button variant="outline">2024</Button>
              <Button variant="outline">2023</Button>
              <Button variant="outline">2022</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer currentLanguage={language} />
    </div>
  )
}
