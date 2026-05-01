import { Brain, MessageSquare, GraduationCap, Heart, CheckCircle } from "lucide-react"

const benefitCategories = [
  {
    icon: Brain,
    title: "Desenvolvimento Cognitivo",
    color: "bg-blue-500/10 text-blue-600",
    benefits: [
      "Melhora significativa na capacidade de concentração",
      "Desenvolvimento do raciocínio lógico",
      "Fortalecimento da memória de curto e longo prazo",
      "Aumento da capacidade de resolver problemas"
    ]
  },
  {
    icon: MessageSquare,
    title: "Comunicação e Linguagem",
    color: "bg-purple-500/10 text-purple-600",
    benefits: [
      "Ampliação do vocabulário de forma natural",
      "Melhora na articulação das palavras",
      "Desenvolvimento da escuta ativa",
      "Facilidade para se expressar verbalmente"
    ]
  },
  {
    icon: GraduationCap,
    title: "Preparação Escolar",
    color: "bg-green-500/10 text-green-600",
    benefits: [
      "Base sólida para alfabetização",
      "Familiarização com números e quantidades",
      "Coordenação motora fina desenvolvida",
      "Prontidão para o ambiente escolar"
    ]
  },
  {
    icon: Heart,
    title: "Autoconfiança",
    color: "bg-rose-500/10 text-rose-600",
    benefits: [
      "Aumento da autoestima da criança",
      "Sensação de conquista e capacidade",
      "Redução da frustração com desafios",
      "Desenvolvimento da autonomia"
    ]
  }
]

export function BenefitsSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            O Que Seu Filho Vai Conquistar
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Benefícios reais e específicos em cada área do desenvolvimento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefitCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
