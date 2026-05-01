import { Gift, Check } from "lucide-react"

const bonuses = [
  { name: "Plano de Aula Personalizado", value: "R$ 47" },
  { name: "Caderno de N\u00fameros e Cores", value: "R$ 57" },
  { name: "Livro Pr\u00e9-Escrita", value: "R$ 39" },
  { name: "100 Exerc\u00edcios Extras", value: "R$ 27" },
  { name: "Fichas de Recorte e Coordena\u00e7\u00e3o", value: "R$ 49" },
  { name: "Fichas de Identifica\u00e7\u00e3o", value: "R$ 39" },
  { name: "Certificado Personalizado", value: "R$ 37" },
  { name: "Suporte VIP via WhatsApp", value: "Exclusivo" },
]

export function BonusSection() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
            <Gift className="h-4 w-4" />
            <span>{"Valor total dos b\u00f4nus: R$ 350"}</span>
          </div>
          <h2 className="text-balance text-2xl font-extrabold text-foreground md:text-3xl lg:text-4xl">
            {"8 B\u00f4nus Exclusivos Gr\u00e1tis"}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
            {"Al\u00e9m do kit completo, voc\u00ea recebe tudo isso sem pagar nada a mais. S\u00e3o materiais complementares que aceleram o desenvolvimento do seu filho."}
          </p>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {bonuses.map((bonus, i) => (
            <div
              key={bonus.name}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex-1">
                <p className="font-bold text-foreground">{bonus.name}</p>
              </div>
              <div className="shrink-0">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {bonus.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 p-6 text-center">
          <p className="flex items-center justify-center gap-2 text-lg font-bold text-foreground">
            <Check className="h-5 w-5 text-primary" />
            {"Tudo isso GR\u00c1TIS ao adquirir o Kit Premium hoje!"}
          </p>
        </div>
      </div>
    </section>
  )
}
