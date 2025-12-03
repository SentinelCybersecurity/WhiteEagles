import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { OverviewSection } from "@/components/overview-section"
import { StructureSection } from "@/components/structure-section"
import { InfographicSection } from "@/components/infographic-section"
import { InvestmentsSection } from "@/components/investments-section"
import { ApproachSection } from "@/components/approach-section"
import { DocumentsSection } from "@/components/documents-section"
import { NewsSection } from "@/components/news-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { MaintenanceOverlay } from "@/components/maintenance-overlay"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MaintenanceOverlay />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <OverviewSection />
        <StructureSection />
        <InfographicSection />
        <InvestmentsSection />
        <ApproachSection />
        <DocumentsSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
