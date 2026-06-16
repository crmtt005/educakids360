import { Calendar, BookHeart, BarChart3, Users, RefreshCw, Gift } from "lucide-react"

const bonuses = [
  {
    icon: Calendar,
    title: "Planificador de Rutina Infantil",
    description: "Organiza el día a día de tu hijo con un planificador práctico e ilustrado",
    value: "R$ 47"
  },
  {
    icon: BookHeart,
    title: "Guía de Disciplina Positiva",
    description: "Aprende a educar sin gritos, con técnicas basadas en el respeto mutuo",
    value: "R$ 67"
  },
  {
    icon: BarChart3,
    title: "Cronograma de Estímulos por Edad",
    description: "Sabe exactamente qué estimular en cada fase del desarrollo",
    value: "R$ 37"
  },
  {
    icon: Users,
    title: "Acceso al Grupo Exclusivo",
    description: "Comunidad de madres para intercambiar experiencias y resolver dudas",
    value: "R$ 97"
  },
  {
    icon: RefreshCw,
    title: "Actualizaciones Futuras Gratuitas",
    description: "Recibe todos los nuevos materiales sin pagar nada más",
    value: "R$ 147"
  },
  {
    icon: Gift,
    title: "E-book de Recetas Saludables",
    description: "Recetas prácticas y nutritivas para mejorar el enfoque y la energía de los niños",
    value: "R$ 27"
  }
]

export function BonusSection() {
  const totalBonusValue = bonuses.reduce((acc, item) => {
    return acc + parseInt(item.value.replace(/[^\d]/g, ""))
  }, 0)

  return (
    <section className="py-12 md:py-20 bg-accent/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Gift className="w-4 h-4" />
            <span>BONOS EXCLUSIVOS</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Y Además Te Llevas de Regalo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Bonos especiales disponibles solo en el paquete completo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 justify-items-center">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="bg-card border-2 border-accent/30 rounded-xl p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                {bonus.value}
              </div>
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <bonus.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{bonus.title}</h3>
              <p className="text-muted-foreground text-sm">{bonus.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-foreground font-medium">
            Total en bonos:{" "}
            <span className="text-accent font-bold">R$ {totalBonusValue},00</span>
          </p>
        </div>
      </div>
    </section>
  )
}
