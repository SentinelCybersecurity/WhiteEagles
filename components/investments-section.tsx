"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function InvestmentsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()
  const { ref: philosophyRef, isVisible: philosophyVisible } = useScrollReveal()

  const focusAreas = [
    {
      title: "Hybrid Payment Networks",
      description:
        "Investments in payment systems that reconcile the efficiency and security of blockchain with the familiarity and stability of traditional systems. Designed to operate within simplified regulatory spaces and become functional alternatives to existing major international networks.",
      details: [
        "Building bridges between traditional finance and blockchain technology",
        "Focus on regulatory compliance and operational efficiency",
        "Targeting simplified regulatory jurisdictions for rapid deployment",
        "Creating alternatives to existing international payment networks",
      ],
    },
    {
      title: "Cybersecurity & Data Sovereignty",
      description:
        "Cloud platforms pursuing complete technological sovereignty, building every critical component internally to ensure verifiable security. Focus on advanced cryptography, low-power hardware architectures, and proprietary algorithms delivering superior performance at reduced costs.",
      details: [
        "Complete technological stack built in-house for maximum security",
        "Advanced cryptographic implementations for data protection",
        "Energy-efficient hardware architectures for sustainable operations",
        "Proprietary algorithms achieving superior cost-performance ratios",
      ],
    },
    {
      title: "Asset Tokenisation",
      description:
        "Development of systems and protocols for tokenising assets, products, and services, creating new standards for digital ownership and transfer within regulated frameworks.",
      details: [
        "Building infrastructure for secure digital asset representation",
        "Creating standards for tokenized asset management",
        "Ensuring regulatory compliance in digital ownership transfer",
        "Enabling new models of fractional ownership and liquidity",
      ],
    },
    {
      title: "Artificial Intelligence",
      description:
        "Systematic application of AI across all fields related to software production and development, enhancing efficiency and innovation in the development lifecycle.",
      details: [
        "AI-driven software development and optimization tools",
        "Automated code quality and security analysis",
        "Intelligent development workflow enhancement",
        "Next-generation software production methodologies",
      ],
    },
  ]

  return (
    <section id="investments" className="w-full py-20 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-[1100px] mx-auto space-y-12">
          <div
            ref={headerRef}
            className={`space-y-4 transition-all duration-700 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Focus on High-Technology Innovation
            </h2>
            <p className="text-muted-foreground text-lg max-w-[800px] leading-relaxed">
              The Fund directs its capital towards frontier technological initiatives, selected for their potential to
              generate not only financial returns but also significant impact in defining new market standards. Our
              approach is not that of a simple financier, but of a strategic architect building synergistic ecosystems
              where technological innovation and regulatory clarity form the foundation of value.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {focusAreas.map((area, index) => (
              <AnimatedInvestmentCard
                key={index}
                area={area}
                index={index}
                expandedIndex={expandedIndex}
                setExpandedIndex={setExpandedIndex}
              />
            ))}
          </div>

          <div
            ref={philosophyRef}
            className={`mt-12 space-y-6 transition-all duration-700 ${
              philosophyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-bold tracking-tight">Investment Philosophy</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The funded projects share a common philosophy: tackling high technological and regulatory complexity to
                create disruptive solutions that are simple and elegant in the end-user experience, capable of competing
                with established models on a global scale.
              </p>
              <p>
                The investment strategy favors scalable business models that combine deep underlying innovation with a
                clear and sustainable path to commercialisation. The strategic objective is not to promote speculative
                instruments, but to create intuitive and immediate digital means, built on a radically advanced yet
                invisible technological infrastructure for the end user.
              </p>
              <p>
                The value model is based on creating open technological standards, protected by strategic intellectual
                property, and on providing essential and regulated services that enable the ecosystem, generating
                recurring revenue streams and fostering a viral network effect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AnimatedInvestmentCard({ area, index, expandedIndex, setExpandedIndex }: any) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-md h-full">
        <CardHeader>
          <CardTitle className="text-xl">{area.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{area.description}</p>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              expandedIndex === index ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pt-4 border-t space-y-2">
              <h4 className="font-semibold text-sm mb-3">Key Focus Areas:</h4>
              <ul className="space-y-2">
                {area.details.map((detail: string, idx: number) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="mt-4 w-full"
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
          >
            {expandedIndex === index ? "Show Less" : "Learn More"}
            <ChevronDown
              className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                expandedIndex === index ? "rotate-180" : ""
              }`}
            />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
