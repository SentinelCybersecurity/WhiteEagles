"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function DocumentsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()
  const { ref: disclaimerRef, isVisible: disclaimerVisible } = useScrollReveal()

  const documents = [
    {
      title: "Investment Prospectus",
      description: "Comprehensive overview of fund strategy, structure, and investment approach.",
      size: "PDF, 2.4 MB",
    },
    {
      title: "Regulatory Framework",
      description: "Details on regulatory compliance and legal structure of the fund.",
      size: "PDF, 1.8 MB",
    },
    {
      title: "Investment Policy",
      description: "Detailed documentation of investment criteria and decision-making process.",
      size: "PDF, 1.2 MB",
    },
  ]

  return (
    <section className="w-full py-20 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-[900px] mx-auto space-y-8">
          <div
            ref={headerRef}
            className={`space-y-4 transition-all duration-700 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">Investment Materials</h2>
            <p className="text-muted-foreground text-lg max-w-[700px] leading-relaxed">
              Access comprehensive documentation about the fund's structure, strategy, and regulatory framework.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-1">
            {documents.map((doc, index) => (
              <AnimatedDocument key={index} doc={doc} index={index} />
            ))}
          </div>

          <Card
            ref={disclaimerRef}
            className={`border-primary/20 bg-primary/5 transition-all duration-700 ${
              disclaimerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground text-center">
                These documents are provided for informational purposes. For detailed inquiries or investor relations,
                please contact the fund directly.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function AnimatedDocument({ doc, index }: any) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="border-border/50 transition-all duration-300 hover:border-primary/30">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-primary/10 p-3 flex-shrink-0">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg mb-1">{doc.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{doc.description}</p>
              <p className="text-xs text-muted-foreground">{doc.size}</p>
            </div>
            <Button variant="outline" size="sm" className="flex-shrink-0 bg-transparent">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
