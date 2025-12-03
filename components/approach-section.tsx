"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function ApproachSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal()
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal()

  return (
    <section className="w-full py-20 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-[900px] mx-auto space-y-8">
          <h2
            ref={titleRef}
            className={`text-3xl font-bold tracking-tight sm:text-4xl text-balance transition-all duration-700 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Strategic Approach
          </h2>

          <div
            ref={contentRef}
            className={`space-y-6 text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${
              contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p>
              The common characteristic of our investments is the ability to identify and exploit strategic
              intersections between advanced technology, regulatory frameworks, and unmet market demand. The Fund does
              not merely provide liquidity but plays an active role in guiding governance and development strategy,
              ensuring each project maintains operational rigor and a long-term vision aligned with our value-creation
              standards.
            </p>

            <p>
              We invest in projects operating in critical sectors of digital transformation, such as payments and
              cybersecurity—fields where trust, security, and efficiency are non-negotiable parameters. These projects
              are designed to challenge the status quo by using cutting-edge architectures and algorithms to deliver
              superior performance, transforming efficiency into a structural competitive advantage.
            </p>

            <p>
              The goal is to create integrated, trustless-by-design digital ecosystems where information protection and
              user autonomy are founding principles, targeting an enterprise market increasingly sensitive to issues of
              resilience, data control, and environmental responsibility.
            </p>

            <p className="font-medium text-foreground">
              This targeted and qualified approach allows the Fund to position itself as a specialised investment
              vehicle, capable of identifying, supporting, and valorising initiatives with very high technological
              potential, transforming complex innovation into robust, competitive market solutions ready for global
              scale growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
