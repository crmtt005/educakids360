"use client"

import { ListChecks, Play, RefreshCw } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: ListChecks,
    title: "Escolha a Atividade",
    description: "Acesse o material e escolha uma atividade adequada para a idade e momento do seu filho."
  },
  {
    number: "2",
    icon: Play,
    title: "Aplique por 15 Minutos",
    description: "Sente-se com seu filho e realize a atividade de forma leve e divertida, sem pressão."
  },
  {
    number: "3",
    icon: RefreshCw,
    title: "Repetição Progressiva",
    description: "Siga o cronograma estruturado para consolidar o aprendizado com repetição inteligente."
  }
]

export function HowItWorksSection() {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Como Funciona na Prática?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simples, rápido e eficaz. Você não precisa ser especialista para aplicar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToOffer}
            className="animate-pulse-cta bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 rounded-xl text-lg shadow-lg transition-all"
          >
            QUERO COMEÇAR HOJE
          </button>
        </div>
      </div>
    </section>
  )
}
