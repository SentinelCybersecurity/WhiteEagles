"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function NewsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()

  const updates = [
    {
      date: "2024 Q4",
      title: "Fund Launch",
      description:
        "White Eagles Fund officially established in Luxembourg as a Special Limited Partnership, focusing on high-technology innovation in payments, cybersecurity, and blockchain.",
    },
    {
      date: "2024 Q4",
      title: "Strategic Focus Defined",
      description:
        "Investment thesis refined to target hybrid payment networks, data sovereignty solutions, asset tokenization, and AI-driven development tools.",
    },
  ]

  return (
    <section className="w-full py-20 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-[900px] mx-auto space-y-8">
          <h2
            ref={headerRef}
            className={`text-3xl font-bold tracking-tight sm:text-4xl text-balance transition-all duration-700 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Fund Updates
          </h2>

          <div className="space-y-6">
            {updates.map((update, index) => (
              <AnimatedNewsItem key={index} update={update} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AnimatedNewsItem({ update, index }: any) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`border-l-2 border-primary/30 pl-6 py-2 transition-all duration-700 hover:border-primary ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
        <span className="text-sm font-medium text-primary">{update.date}</span>
        <span className="hidden sm:inline text-muted-foreground">•</span>
        <h3 className="font-semibold text-lg">{update.title}</h3>
      </div>
      <p className="text-muted-foreground leading-relaxed">{update.description}</p>
    </div>
  )
}
