"use client"

import { ArrowRight, Heart } from "lucide-react"

export function FinalCtaSection() {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-12 md:py-20 bg-primary">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Heart className="w-8 h-8 text-primary-foreground" />
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4 text-balance">
          Não Deixe Para Amanhã o Futuro do Seu Filho
        </h2>

        <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
          Cada dia que passa é uma oportunidade perdida de desenvolvimento. A janela de ouro da primeira infância não espera. Comece hoje e veja a transformação acontecer.
        </p>

        <button
          onClick={scrollToOffer}
          className="animate-pulse-cta inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-4 px-8 rounded-xl text-lg shadow-lg transition-all"
        >
          QUERO TRANSFORMAR MEU FILHO AGORA
          <ArrowRight className="w-5 h-5" />
        </button>

        <p className="mt-6 text-primary-foreground/70 text-sm">
          Acesso imediato | Garantia de 7 dias | Pagamento seguro
        </p>
      </div>
    </section>
  )
}
