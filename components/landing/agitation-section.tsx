"use client"

import { TrendingDown, BookX, Frown, Monitor } from "lucide-react"

const consequences = [
  {
    icon: Frown,
    title: "Baixa autoestima",
    description: "Crianças sem estímulo adequado podem desenvolver insegurança e dificuldade de socialização."
  },
  {
    icon: BookX,
    title: "Dificuldade na alfabetização",
    description: "Sem preparação cognitiva, a alfabetização se torna um processo frustrante e demorado."
  },
  {
    icon: TrendingDown,
    title: "Atraso escolar",
    description: "O que poderia ser prevenido cedo se transforma em anos de recuperação e reforço."
  },
  {
    icon: Monitor,
    title: "Dependência de telas",
    description: "Quanto mais tempo passa, mais difícil fica substituir as telas por atividades produtivas."
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
            O que acontece quando não agimos a tempo?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A falta de estímulo cognitivo na primeira infância pode ter consequências duradouras...
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
            Mas a boa notícia é que você pode mudar essa realidade hoje, de forma simples e acessível.
          </p>
          <button
            onClick={scrollToOffer}
            className="animate-pulse-cta bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 rounded-xl text-lg shadow-lg transition-all"
          >
            QUERO TRANSFORMAR MEU FILHO
          </button>
        </div>
      </div>
    </section>
  )
}
