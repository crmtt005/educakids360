"use client"

import { TrendingDown, BookX, Frown, Monitor } from "lucide-react"

const consequences = [
  {
    icon: Frown,
    title: "Baja autoestima",
    description: "Los niños sin el estímulo adecuado pueden desarrollar inseguridad y dificultad para socializar."
  },
  {
    icon: BookX,
    title: "Dificultad en la alfabetización",
    description: "Sin preparación cognitiva, la alfabetización se convierte en un proceso frustrante y lento."
  },
  {
    icon: TrendingDown,
    title: "Retraso escolar",
    description: "Lo que podría prevenirse a tiempo se convierte en años de recuperación y refuerzo."
  },
  {
    icon: Monitor,
    title: "Dependencia de las pantallas",
    description: "Cuanto más tiempo pasa, más difícil es sustituir las pantallas por actividades productivas."
  }
]

export function AgitationSection() {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-12 md:py-20 bg-destructive/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            ¿Qué pasa cuando no actuamos a tiempo?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            La falta de estímulo cognitivo en la primera infancia puede tener consecuencias duraderas...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {consequences.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-foreground font-medium mb-6 max-w-2xl mx-auto">
            Pero la buena noticia es que puedes cambiar esa realidad hoy, de forma simple y accesible.
          </p>
          <button
            onClick={scrollToOffer}
            className="animate-pulse-cta bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 rounded-xl text-lg shadow-lg transition-all"
          >
            QUIERO TRANSFORMAR A MI HIJO
          </button>
        </div>
      </div>
    </section>
  )
}
