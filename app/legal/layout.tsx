import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal Information | White Eagles Fund",
  description:
    "Legal notices, disclaimers, privacy policy, and terms for White Eagles Fund ScSp - Luxembourg investment vehicle.",
}

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return children
}
