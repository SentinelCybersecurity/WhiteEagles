"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function StructureSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()

  const operationalAreas = [
    {
      number: "1",
      title: "Capital Management",
      description:
        "The core of our operations, focusing on strategic allocation of financial resources towards projects selected for their innovation and scalability potential. This function ensures the financial sustainability of the entire structure, optimising the deployment of liquidity to support the often lengthy and high-risk development cycles typical of advanced technologies.",
    },
    {
      number: "2",
      title: "Research & Development",
      description:
        "Dedicated to R&D carried out exclusively through controlled and highly specialised IT companies. These companies operate as distinct centres of excellence, each focused on specific technological domains including asset tokenisation, innovative payment circuits, high-tech patents, cybersecurity, Electronic Money Institution solutions, and systematic application of artificial intelligence in software production.",
    },
    {
      number: "3",
      title: "Financial & Commercial Business",
      description:
        "Managed through a network of companies and platforms holding necessary market authorisations and licences. These entities transform prototypes and patented innovations into marketable products and services, managing customer interfaces and operating in full regulatory compliance. This separation between development and commercial entities optimises both research efficiency and commercialisation effectiveness.",
    },
  ]

  return (
    <section id="structure" className="w-full py-20 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-[1000px] mx-auto space-y-12">
          <div
            ref={headerRef}
            className={`space-y-4 text-center transition-all duration-700 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">Operational Structure</h2>
            <p className="text-muted-foreground text-lg max-w-[700px] mx-auto leading-relaxed">
              Three synergistic operational areas integrated to maximise return on investment
            </p>
          </div>

          <div className="grid gap-8 md:gap-10">
            {operationalAreas.map((area, index) => (
              <AnimatedCard key={area.number} area={area} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AnimatedCard({ area, index }: { area: any; index: number }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="border-border/50">
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground text-xl font-bold">
              {area.number}
            </div>
            <div className="space-y-1">
              <CardTitle className="text-2xl">{area.title}</CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base leading-relaxed">{area.description}</CardDescription>
        </CardContent>
      </Card>
    </div>
  )
}
