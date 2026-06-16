import { Brain, MessageSquare, GraduationCap, Heart, CheckCircle } from "lucide-react"

const benefitCategories = [
  {
    icon: Brain,
    title: "Desarrollo Cognitivo",
    color: "bg-blue-500/10 text-blue-600",
    benefits: [
      "Mejora significativa en la capacidad de concentración",
      "Desarrollo del razonamiento lógico",
      "Fortalecimiento de la memoria a corto y largo plazo",
      "Aumento de la capacidad de resolver problemas"
    ]
  },
  {
    icon: MessageSquare,
    title: "Comunicación y Lenguaje",
    color: "bg-purple-500/10 text-purple-600",
    benefits: [
      "Ampliación del vocabulario de forma natural",
      "Mejora en la articulación de las palabras",
      "Desarrollo de la escucha activa",
      "Facilidad para expresarse verbalmente"
    ]
  },
  {
    icon: GraduationCap,
    title: "Preparación Escolar",
    color: "bg-green-500/10 text-green-600",
    benefits: [
      "Base sólida para la alfabetización",
      "Familiarización con los números y las cantidades",
      "Coordinación motora fina desarrollada",
      "Preparación para el entorno escolar"
    ]
  },
  {
    icon: Heart,
    title: "Autoconfianza",
    color: "bg-rose-500/10 text-rose-600",
    benefits: [
      "Aumento de la autoestima del niño",
      "Sensación de logro y capacidad",
      "Reducción de la frustración ante los desafíos",
      "Desarrollo de la autonomía"
    ]
  }
]

export function BenefitsSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Lo Que Tu Hijo Va a Conquistar
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Beneficios reales y específicos en cada área del desarrollo
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
