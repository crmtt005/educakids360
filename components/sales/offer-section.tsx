import { Check, BookOpen, Video, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const included = [
  { icon: BookOpen, text: "+200 atividades progressivas: tra\u00e7os, curvas, letras bast\u00e3o/cursiva e frases" },
  { icon: FileText, text: "Guias completos para pais: passo a passo simples, adapt\u00e1vel por idade" },
  { icon: Video, text: "V\u00eddeos tutoriais: demonstra\u00e7\u00f5es divertidas para fazer junto" },
]

export function OfferSection() {
  return (
    <section id="oferta" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="overflow-hidden rounded-2xl border-2 border-primary/30 bg-card shadow-2xl shadow-primary/10">
          {/* Header */}
          <div className="bg-primary px-6 py-6 text-center text-primary-foreground md:px-10">
            <span className="text-sm font-semibold uppercase tracking-wider opacity-90">
              {"Oferta especial por tempo limitado"}
            </span>
            <h2 className="mt-2 text-2xl font-extrabold md:text-3xl">
              {"Kit Grafomotricidade Premium"}
            </h2>
            <p className="mt-1 opacity-90">
              {"Acesso vital\u00edcio + 8 b\u00f4nus exclusivos"}
            </p>
          </div>

          {/* Body */}
          <div className="p-6 md:p-10">
            {/* What's included */}
            <h3 className="mb-4 text-lg font-bold text-foreground">
              {"O que voc\u00ea recebe:"}
            </h3>
            <div className="flex flex-col gap-3">
              {included.map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-foreground">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="mt-8 rounded-xl bg-primary/5 p-6 text-center">
              <p className="text-sm text-muted-foreground">
                <span className="line-through">{"De R$ 453,00"}</span>
              </p>
              <div className="mt-1 flex items-baseline justify-center gap-2">
                <span className="text-sm text-muted-foreground">{"por apenas"}</span>
              </div>
              <p className="mt-1 text-5xl font-extrabold text-primary md:text-6xl">
                {"R$ 37"}
                <span className="text-3xl">{",90"}</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {"ou 9x de R$ 5,21 no cart\u00e3o"}
              </p>

              <Button
                size="lg"
                className="group mt-6 w-full bg-accent px-10 py-7 text-lg font-bold text-accent-foreground shadow-lg shadow-accent/30 transition-all hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/40"
                asChild
              >
                <a href="https://pay.cakto.com.br/9sw8c9t_794481" target="_blank" rel="noopener noreferrer">
                  {"COMPRAR KIT AGORA"}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Check className="h-3.5 w-3.5 text-primary" />
                  {"Acesso imediato"}
                </span>
                <span className="flex items-center gap-1">
                  <Check className="h-3.5 w-3.5 text-primary" />
                  {"Garantia 30 dias"}
                </span>
                <span className="flex items-center gap-1">
                  <Check className="h-3.5 w-3.5 text-primary" />
                  {"Pagamento seguro"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
