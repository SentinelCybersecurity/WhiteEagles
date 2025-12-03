"use client"

import type React from "react"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { TrendingUp, Shield, Coins, Brain } from "lucide-react"
import { MetricCard } from "./metric-card"

export function InfographicSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()
  const { ref: chartRef, isVisible: chartVisible } = useScrollReveal()

  const investmentData = [
    {
      icon: Shield,
      label: "Cybersecurity",
      percentage: 30,
      color: "bg-blue-600",
      description: "Data sovereignty & secure infrastructure",
    },
    {
      icon: TrendingUp,
      label: "Payment Networks",
      percentage: 35,
      color: "bg-slate-700",
      description: "Hybrid blockchain-traditional systems",
    },
    {
      icon: Coins,
      label: "Tokenisation",
      percentage: 20,
      color: "bg-blue-500",
      description: "Digital asset protocols & standards",
    },
    {
      icon: Brain,
      label: "AI Development",
      percentage: 15,
      color: "bg-slate-600",
      description: "Software production enhancement",
    },
  ]

  return (
    <section className="w-full py-20 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-[1100px] mx-auto space-y-12">
          <div
            ref={headerRef}
            className={`text-center space-y-4 transition-all duration-700 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Strategic Investment Allocation
            </h2>
            <p className="text-muted-foreground text-lg max-w-[700px] mx-auto leading-relaxed">
              Our capital deployment strategy across high-impact technology sectors
            </p>
          </div>

          <div
            ref={chartRef}
            className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              chartVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Visual Chart */}
            <div className="relative aspect-square max-w-[400px] mx-auto w-full">
              <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
                {investmentData.reduce((acc, item, index) => {
                  const prevPercentage = investmentData.slice(0, index).reduce((sum, d) => sum + d.percentage, 0)
                  const circumference = 2 * Math.PI * 70
                  const offset = circumference - (item.percentage / 100) * circumference
                  const rotation = (prevPercentage / 100) * 360

                  return [
                    ...acc,
                    <circle
                      key={index}
                      cx="100"
                      cy="100"
                      r="70"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="30"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      className={`transition-all duration-1000 delay-${index * 100} ${
                        chartVisible ? "opacity-100" : "opacity-0"
                      }`}
                      style={{
                        transform: `rotate(${rotation}deg)`,
                        transformOrigin: "center",
                        color:
                          item.color === "bg-blue-600"
                            ? "#2563eb"
                            : item.color === "bg-slate-700"
                              ? "#334155"
                              : item.color === "bg-blue-500"
                                ? "#3b82f6"
                                : "#475569",
                      }}
                    />,
                  ]
                }, [] as React.JSX.Element[])}

                {/* Center circle */}
                <circle cx="100" cy="100" r="40" fill="hsl(var(--background))" />
              </svg>

              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center transform rotate-0">
                  <div className="text-3xl font-bold text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground">Capital</div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-6">
              {investmentData.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className={`transition-all duration-700 ${
                      chartVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                  >
                    <div className="flex items-start gap-4 group">
                      <div
                        className={`${item.color} p-3 rounded-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-foreground">{item.label}</h3>
                          <span className="text-2xl font-bold text-foreground">{item.percentage}%</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        {/* Progress bar */}
                        <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full ${item.color} transition-all duration-1000 ease-out`}
                            style={{
                              width: chartVisible ? `${item.percentage}%` : "0%",
                              transitionDelay: `${(index + 1) * 150}ms`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Key Metrics */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t transition-all duration-700 ${
              chartVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <MetricCard title="Technology Focus" value="Deep Tech" delay="900ms" visible={chartVisible} />
            <MetricCard title="Regulatory Approach" value="Compliant" delay="1000ms" visible={chartVisible} />
            <MetricCard title="Market Position" value="Disruptive" delay="1100ms" visible={chartVisible} />
            <MetricCard title="Investment Horizon" value="Long-term" delay="1200ms" visible={chartVisible} />
          </div>
        </div>
      </div>
    </section>
  )
}
