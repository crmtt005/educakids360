import { ArrowRight, ShieldCheck, Clock, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCtaSection() {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-balance text-2xl font-extrabold text-primary-foreground md:text-3xl lg:text-4xl">
          {"Seu filho merece o melhor. Comece agora!"}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-primary-foreground/80">
          {"N\u00e3o espere mais para transformar o futuro do seu filho. O Kit Grafomotricidade Premium \u00e9 o caminho mais r\u00e1pido e divertido para a escrita confiante."}
        </p>

        <div className="mt-6 flex items-baseline justify-center gap-2">
          <span className="text-lg text-primary-foreground/60 line-through">
            {"R$ 453"}
          </span>
          <span className="text-5xl font-extrabold text-primary-foreground">
            {"R$ 37,90"}
          </span>
        </div>
        <p className="mt-1 text-sm text-primary-foreground/70">
          {"ou 9x de R$ 5,21"}
        </p>

        <Button
          size="lg"
          className="group mt-8 bg-accent px-12 py-7 text-lg font-bold text-accent-foreground shadow-lg shadow-accent/30 transition-all hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/40"
          asChild
        >
          <a href="https://pay.cakto.com.br/9sw8c9t_794481" target="_blank" rel="noopener noreferrer">
            {"QUERO O KIT AGORA"}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/70">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4" />
            {"Garantia 30 dias"}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {"Acesso imediato"}
          </span>
          <span className="flex items-center gap-1.5">
            <CreditCard className="h-4 w-4" />
            {"Pagamento seguro"}
          </span>
        </div>
      </div>
    </section>
  )
}
