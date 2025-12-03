import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image src="/images/hero-tech.jpg" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Logo above hero title */}
          <div className="mb-4">
            <Image src="/logo.svg" alt="White Eagles Fund" width={240} height={72} className="h-16 w-auto" />
          </div>

          <div className="space-y-6 max-w-[900px]">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-balance leading-tight">
              Architecting the Foundations of Tomorrow's Technology
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl leading-relaxed text-pretty">
              White Eagles Fund ScSp is a Luxembourg-based financial vehicle dedicated to supporting and capitalising on
              high-potential technological innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
