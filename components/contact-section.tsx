"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Send } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function ContactSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()
  const { ref: newsletterRef, isVisible: newsletterVisible } = useScrollReveal()
  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal()

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsSubmitting(false)
    setEmail("")

    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="w-full py-20 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-[700px] mx-auto space-y-8">
          <div
            ref={headerRef}
            className={`space-y-4 text-center transition-all duration-700 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Information</h2>
          </div>

          <Card
            ref={newsletterRef}
            className={`border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 transition-all duration-700 delay-150 ${
              newsletterVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <CardContent className="pt-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-center">Stay Informed</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Subscribe to receive updates on fund developments and investment opportunities.
                </p>

                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting || isSubmitted}
                    className="flex-1"
                  />
                  <Button type="submit" disabled={isSubmitting || isSubmitted}>
                    {isSubmitted ? "Subscribed!" : isSubmitting ? "Subscribing..." : "Subscribe"}
                  </Button>
                </form>

                {isSubmitted && (
                  <p className="text-sm text-center text-green-600 dark:text-green-400">
                    Thank you for subscribing to our updates!
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card
            ref={infoRef}
            className={`border-border/50 transition-all duration-700 delay-300 ${
              infoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">White Eagles Fund ScSp</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    2 Rue Ste Zithe
                    <br />
                    L-2763 Luxembourg
                    <br />
                    Grand Duchy of Luxembourg
                  </p>
                </div>

                <div className="pt-4 border-t">
                  <a
                    href="https://t.me/MMCH201"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
                  >
                    <Send className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span className="font-medium">Contact us on Telegram</span>
                  </a>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    Special Limited Partnership (Société en Commandite Spéciale)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
