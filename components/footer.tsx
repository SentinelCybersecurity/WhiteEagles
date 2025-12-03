import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-muted/20">
      <div className="container py-12 md:py-16 px-6 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Image src="/logo.svg" alt="White Eagles Fund" width={180} height={54} className="h-9 w-auto mb-2" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              A Luxembourg-based investment vehicle dedicated to high-technology innovation.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Structure</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Capital Management</li>
              <li>Research & Development</li>
              <li>Commercial Business</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Focus Areas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Payment Networks</li>
              <li>Cybersecurity</li>
              <li>Asset Tokenisation</li>
              <li>Artificial Intelligence</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>ScSp Luxembourg</li>
              <li>L-2763 Luxembourg</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} White Eagles Fund ScSp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
