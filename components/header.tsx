"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="White Eagles Fund" width={180} height={54} className="h-9 w-auto" />
          <div className="flex items-center">
            <span className="text-xl font-semibold tracking-tight">White Eagles Fund</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("overview")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Overview
          </button>
          <button
            onClick={() => scrollToSection("structure")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Structure
          </button>
          <button
            onClick={() => scrollToSection("investments")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Investments
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </button>
          <Link
            href="/legal"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Legal
          </Link>
        </nav>

        <Button size="sm" className="hidden md:inline-flex" onClick={() => scrollToSection("contact")}>
          Get in Touch
        </Button>
      </div>
    </header>
  )
}
