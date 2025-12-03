import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LegalPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-[900px] mx-auto space-y-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Legal Information</h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Important legal notices, disclaimers, and policies regarding White Eagles Fund ScSp.
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Investment Disclaimer</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The information contained on this website is for informational purposes only and does not constitute
                  an offer to sell or a solicitation of an offer to buy any securities or investment products.
                </p>
                <p>
                  White Eagles Fund ScSp is a Special Limited Partnership (Société en Commandite Spéciale) established
                  under the laws of the Grand Duchy of Luxembourg. Investment in the Fund is restricted to qualified
                  investors as defined under applicable Luxembourg and European regulations.
                </p>
                <p>
                  Past performance is not indicative of future results. All investments involve risk, including the
                  potential loss of principal. Prospective investors should carefully review all offering materials and
                  consult with their own legal, tax, and financial advisors before making any investment decision.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Regulatory Information</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  White Eagles Fund ScSp operates under Luxembourg law and complies with all applicable regulatory
                  requirements for investment vehicles in the Grand Duchy of Luxembourg.
                </p>
                <p>
                  The Fund is designed for professional and institutional investors who meet specific qualification
                  criteria. Investment in the Fund may not be suitable for all investors.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Privacy Policy</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  White Eagles Fund ScSp respects the privacy of all website visitors and potential investors. We
                  collect only the information necessary to respond to inquiries and provide information about the Fund.
                </p>
                <p>
                  Any personal information provided through this website is used solely for the purpose for which it was
                  provided and is not shared with third parties except as required by law or as necessary to fulfill
                  your request.
                </p>
                <p>
                  This website may use cookies to enhance user experience and analyze site traffic. By using this
                  website, you consent to the use of cookies in accordance with standard industry practices.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Intellectual Property</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  All content on this website, including text, graphics, logos, images, and software, is the property of
                  White Eagles Fund ScSp or its content suppliers and is protected by international copyright and
                  intellectual property laws.
                </p>
                <p>
                  No part of this website may be reproduced, distributed, or transmitted in any form without the prior
                  written permission of White Eagles Fund ScSp.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Limitation of Liability</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  While we strive to provide accurate and up-to-date information, White Eagles Fund ScSp makes no
                  representations or warranties of any kind, express or implied, about the completeness, accuracy,
                  reliability, or availability of the information contained on this website.
                </p>
                <p>
                  In no event will White Eagles Fund ScSp be liable for any loss or damage including without limitation,
                  indirect or consequential loss or damage, arising from or in connection with the use of this website
                  or reliance on information provided herein.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Governing Law</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  This website and its contents are governed by and construed in accordance with the laws of the Grand
                  Duchy of Luxembourg. Any disputes arising from or related to the use of this website shall be subject
                  to the exclusive jurisdiction of the courts of Luxembourg.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Contact for Legal Inquiries</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  For legal inquiries or questions regarding these terms and policies, please contact White Eagles Fund
                  ScSp at:
                </p>
                <p className="font-medium text-foreground">
                  White Eagles Fund ScSp
                  <br />2 Rue Ste Zithe
                  <br />
                  L-2763 Luxembourg
                  <br />
                  Grand Duchy of Luxembourg
                </p>
              </div>
            </section>

            <div className="pt-8 border-t">
              <p className="text-sm text-muted-foreground">Last updated: December 2024</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
