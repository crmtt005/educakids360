import Image from "next/image"
import { Sparkles, Brain, Zap, Clock } from "lucide-react"

const methodPoints = [
  {
    icon: Brain,
    title: "Neuroplasticidade",
    description: "Aproveita a capacidade natural do cérebro infantil de formar novas conexões neurais."
  },
  {
    icon: Zap,
    title: "Micro Estímulos Diários",
    description: "Atividades curtas e frequentes são mais eficazes que sessões longas e cansativas."
  },
  {
    icon: Sparkles,
    title: "Estímulo Multissensorial",
    description: "Engaja visão, audição e tato para um aprendizado completo e duradouro."
  },
  {
    icon: Clock,
    title: "Apenas 15 Minutos",
    description: "Tempo ideal para manter a atenção da criança sem causar frustração ou cansaço."
  }
]

export function MethodSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            MÉTODO EXCLUSIVO
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Conheça o Método Desenvolvimento 360°
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Um sistema completo baseado em neurociência infantil, desenvolvido para estimular todas as áreas do desenvolvimento cognitivo do seu filho.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <Image
              src="/images/product-mockup.jpg"
              alt="Materiais do Método Desenvolvimento 360°"
              width={500}
              height={400}
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>

          <div className="flex-1 space-y-6">
            {methodPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-primary/5 rounded-2xl p-6 md:p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
            Por que é diferente da escola tradicional?
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Enquanto a escola foca em conteúdo, o Método 360° foca no desenvolvimento das habilidades cognitivas que permitem a criança aprender qualquer coisa. É como fortalecer o motor antes de acelerar o carro.
          </p>
        </div>
      </div>
    </section>
  )
}
