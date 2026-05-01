import { Calendar, BookHeart, BarChart3, Users, RefreshCw, Gift } from "lucide-react"

const bonuses = [
  {
    icon: Calendar,
    title: "Planner de Rotina Infantil",
    description: "Organize o dia a dia do seu filho com um planner prático e ilustrado",
    value: "R$ 47"
  },
  {
    icon: BookHeart,
    title: "Guia de Disciplina Positiva",
    description: "Aprenda a educar sem gritos, com técnicas baseadas em respeito mútuo",
    value: "R$ 67"
  },
  {
    icon: BarChart3,
    title: "Cronograma de Estímulos por Idade",
    description: "Saiba exatamente o que estimular em cada fase do desenvolvimento",
    value: "R$ 37"
  },
  {
    icon: Users,
    title: "Acesso ao Grupo Exclusivo",
    description: "Comunidade de mães para trocar experiências e tirar dúvidas",
    value: "R$ 97"
  },
  {
    icon: RefreshCw,
    title: "Atualizações Futuras Gratuitas",
    description: "Receba todos os novos materiais sem pagar nada a mais",
    value: "R$ 147"
  },
  {
    icon: Gift,
    title: "E-book Receitas Saudáveis",
    description: "Receitas práticas e nutritivas para melhorar o foco e energia das crianças",
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
            <span>BÔNUS EXCLUSIVOS</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            E Ainda Leva de Presente
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Bônus especiais disponíveis apenas no pacote completo
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
            Total em bônus:{" "}
            <span className="text-accent font-bold">R$ {totalBonusValue},00</span>
          </p>
        </div>
      </div>
    </section>
  )
}
