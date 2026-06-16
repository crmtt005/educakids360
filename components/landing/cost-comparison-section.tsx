"use client"

import { X, Check } from "lucide-react"

const alternatives = [
  {
    name: "Refuerzo Escolar",
    price: "R$ 200-400/mes",
    monthly: true
  },
  {
    name: "Psicopedagogo",
    price: "R$ 150-300/sesión",
    monthly: true
  },
  {
    name: "Escuela Privada",
    price: "R$ 800-2.000/mes",
    monthly: true
  },
  {
    name: "Cursos de Estimulación",
    price: "R$ 500-1.500",
    monthly: false
  }
]

export function CostComparisonSection() {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            ¿Cuánto Cuesta No Actuar Ahora?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compara la inversión de Educakids360 con otras alternativas
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-xl overflow-hidden mb-8">
            {alternatives.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 md:p-6 ${
                  index !== alternatives.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-foreground font-medium">{item.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-destructive font-bold">{item.price}</span>
                  {item.monthly && (
                    <span className="text-muted-foreground text-sm block">mensual</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary/10 border-2 border-primary rounded-xl p-6 md:p-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-foreground font-bold text-lg">Educakids360</span>
                  <span className="text-muted-foreground block text-sm">Acceso de por vida</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-primary font-bold text-2xl">Desde R$ 27,90</span>
                <span className="text-muted-foreground block text-sm">pago único</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={scrollToOffer}
              className="animate-pulse-cta bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 rounded-xl text-lg shadow-lg transition-all"
            >
              QUIERO APROVECHARLO AHORA
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
