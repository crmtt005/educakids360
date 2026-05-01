import { HeroSection } from "@/components/landing/hero-section"
import { PainSection } from "@/components/landing/pain-section"
import { AgitationSection } from "@/components/landing/agitation-section"
import { MethodSection } from "@/components/landing/method-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { BenefitsSection } from "@/components/landing/benefits-section"
import { WhatsIncludedSection } from "@/components/landing/whats-included-section"
import { BonusSection } from "@/components/landing/bonus-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { AuthoritySection } from "@/components/landing/authority-section"
import { CostComparisonSection } from "@/components/landing/cost-comparison-section"
import { OfferSection } from "@/components/landing/offer-section"
import { GuaranteeSection } from "@/components/landing/guarantee-section"
import { FaqSection } from "@/components/landing/faq-section"
import { FinalCtaSection } from "@/components/landing/final-cta-section"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <PainSection />
      <AgitationSection />
      <MethodSection />
      <HowItWorksSection />
      <BenefitsSection />
      <WhatsIncludedSection />
      <BonusSection />
      <TestimonialsSection />
      <AuthoritySection />
      <CostComparisonSection />
      <OfferSection />
      <GuaranteeSection />
      <FinalCtaSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
