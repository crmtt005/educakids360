import Image from "next/image"
import { Sparkles, Brain, Zap, Clock } from "lucide-react"

const methodPoints = [
  {
    icon: Brain,
    title: "Neuroplasticidad",
    description: "Aprovecha la capacidad natural del cerebro infantil de formar nuevas conexiones neuronales."
  },
  {
    icon: Zap,
    title: "Microestímulos Diarios",
    description: "Las actividades cortas y frecuentes son más eficaces que las sesiones largas y agotadoras."
  },
  {
    icon: Sparkles,
    title: "Estímulo Multisensorial",
    description: "Involucra la vista, el oído y el tacto para un aprendizaje completo y duradero."
  },
  {
    icon: Clock,
    title: "Solo 15 Minutos",
    description: "Tiempo ideal para mantener la atención del niño sin causar frustración ni cansancio."
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
            Conoce el Método Desarrollo 360°
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un sistema completo basado en neurociencia infantil, desarrollado para estimular todas las áreas del desarrollo cognitivo de tu hijo.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <Image
              src="/images/product-mockup.jpg"
              alt="Materiales del Método Desarrollo 360°"
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
            ¿Por qué es diferente de la escuela tradicional?
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Mientras la escuela se enfoca en el contenido, el Método 360° se enfoca en el desarrollo de las habilidades cognitivas que le permiten al niño aprender cualquier cosa. Es como fortalecer el motor antes de acelerar el auto.
          </p>
        </div>
      </div>
    </section>
  )
}
