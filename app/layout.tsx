import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "White Eagles Fund | High-Technology Innovation Investment",
  description:
    "White Eagles Fund ScSp - A Luxembourg-based investment vehicle dedicated to supporting and capitalising on high-potential technological innovation in payments, cybersecurity, and blockchain.",
  keywords: [
    "investment fund",
    "venture capital",
    "technology investment",
    "blockchain",
    "cybersecurity",
    "fintech",
    "payments",
    "Luxembourg",
    "high-tech innovation",
    "asset tokenization",
  ],
  authors: [{ name: "White Eagles Fund ScSp" }],
  creator: "White Eagles Fund ScSp",
  publisher: "White Eagles Fund ScSp",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://whiteeaglesfund.com"),
  openGraph: {
    title: "White Eagles Fund | High-Technology Innovation Investment",
    description:
      "A Luxembourg-based investment vehicle focused on payments, cybersecurity, blockchain, and AI innovation.",
    url: "https://whiteeaglesfund.com",
    siteName: "White Eagles Fund",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "White Eagles Fund - High-Technology Innovation Investment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "White Eagles Fund | High-Technology Innovation Investment",
    description:
      "A Luxembourg-based investment vehicle focused on payments, cybersecurity, blockchain, and AI innovation.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon-32x32.jpg",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.jpg",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/logo.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-touch-icon.jpg",
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#4a5a8a",
      },
    ],
  },
  manifest: "/site.webmanifest",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1f2e" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "White Eagles Fund ScSp",
              description:
                "A Luxembourg-based investment vehicle dedicated to supporting and capitalising on high-potential technological innovation in payments, cybersecurity, and blockchain.",
              url: "https://whiteeaglesfund.com",
              logo: "https://whiteeaglesfund.com/logo.svg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2 Rue Ste Zithe",
                addressLocality: "Luxembourg",
                postalCode: "L-2763",
                addressCountry: "LU",
              },
              areaServed: {
                "@type": "Place",
                name: "Global",
              },
              slogan: "Strategic Investment in High-Technology Innovation",
              knowsAbout: [
                "Investment Management",
                "Venture Capital",
                "Blockchain Technology",
                "Cybersecurity",
                "Payment Systems",
                "Asset Tokenization",
                "Artificial Intelligence",
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
