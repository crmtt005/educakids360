import { AlertCircle, Smartphone, Brain, Clock, Users, BookX } from "lucide-react"

const painPoints = [
  {
    icon: AlertCircle,
    title: "Medo do atraso escolar",
    description: "Você percebe que seu filho tem dificuldade para acompanhar outras crianças da mesma idade?"
  },
  {
    icon: Smartphone,
    title: "Excesso de telas",
    description: "Seu filho passa horas no celular ou tablet, mas na hora de estudar não consegue se concentrar?"
  },
  {
    icon: Brain,
    title: "Falta de concentração",
    description: "Ele começa uma atividade e não consegue terminar? Se distrai com qualquer coisa?"
  },
  {
    icon: Clock,
    title: "Falta de tempo",
    description: "Você se sente culpada por não ter tempo suficiente para estimular seu filho como gostaria?"
  },
  {
    icon: Users,
    title: "Comparação constante",
    description: "Você vê outras crianças mais desenvolvidas e fica preocupada com o futuro do seu filho?"
  },
  {
    icon: BookX,
    title: "Dificuldade com a escrita",
    description: "Seu filho tem letra ilegível, segura o lápis de forma errada ou evita atividades de escrita?"
  }
]

export function PainSection() {
  return (
    <section className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Você se identifica com alguma dessas situações?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Se você respondeu sim para alguma dessas perguntas, saiba que você não está sozinha...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {painPoints.map((pain, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                <pain.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{pain.title}</h3>
              <p className="text-muted-foreground">{pain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
