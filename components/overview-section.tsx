"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function OverviewSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal()
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal()

  return (
    <section id="overview" className="w-full py-20 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-[900px] mx-auto space-y-12">
          <div
            ref={titleRef}
            className={`space-y-4 transition-all duration-700 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">About White Eagles Fund</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Located at 2 Rue Ste Zithe L-2763 Luxembourg, Grand Duchy of Luxembourg, White Eagles Fund ScSp is a
              special limited partnership (société en commandite spéciale) that operates as a financial vehicle
              dedicated to supporting and capitalising on high-potential technological innovation.
            </p>
          </div>

          <div
            ref={contentRef}
            className={`prose prose-gray max-w-none space-y-6 transition-all duration-700 delay-200 ${
              contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-muted-foreground leading-relaxed">
              Our activities are structured across three synergistic operational areas, integrated to maximise return on
              investment and transform pioneering research into commercial products and services. The fund does not
              conduct research and development directly but acts as a financial architect and coordinator, directing
              capital towards strategic initiatives and creating value through an ecosystem of specialised controlled
              companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
