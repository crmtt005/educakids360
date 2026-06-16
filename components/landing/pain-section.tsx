import { AlertCircle, Smartphone, Brain, Clock, Users, BookX } from "lucide-react"

const painPoints = [
  {
    icon: AlertCircle,
    title: "Miedo al retraso escolar",
    description: "¿Notas que tu hijo tiene dificultad para seguir el ritmo de otros niños de su misma edad?"
  },
  {
    icon: Smartphone,
    title: "Exceso de pantallas",
    description: "¿Tu hijo pasa horas en el celular o la tablet, pero a la hora de estudiar no logra concentrarse?"
  },
  {
    icon: Brain,
    title: "Falta de concentración",
    description: "¿Empieza una actividad y no logra terminarla? ¿Se distrae con cualquier cosa?"
  },
  {
    icon: Clock,
    title: "Falta de tiempo",
    description: "¿Te sientes culpable por no tener suficiente tiempo para estimular a tu hijo como te gustaría?"
  },
  {
    icon: Users,
    title: "Comparación constante",
    description: "¿Ves a otros niños más desarrollados y te preocupa el futuro de tu hijo?"
  },
  {
    icon: BookX,
    title: "Dificultad con la escritura",
    description: "¿Tu hijo tiene letra ilegible, sostiene el lápiz de forma incorrecta o evita las actividades de escritura?"
  }
]

export function PainSection() {
  return (
    <section className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            ¿Te identificas con alguna de estas situaciones?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Si respondiste que sí a alguna de estas preguntas, debes saber que no estás sola...
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
