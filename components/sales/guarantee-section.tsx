import Image from "next/image"
import { ShieldCheck } from "lucide-react"

export function GuaranteeSection() {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="flex flex-col items-center gap-8 rounded-2xl border border-primary/20 bg-primary/5 p-8 md:flex-row md:p-12">
          <div className="flex shrink-0 flex-col items-center">
            <div className="relative h-36 w-36 md:h-44 md:w-44">
              <Image
                src="/images/guarantee-badge.jpg"
                alt="Selo de garantia de 30 dias"
                fill
                className="rounded-full object-cover"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">
                {"Garantia Incondicional de 30 Dias"}
              </h2>
            </div>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {"Teste o Kit Grafomotricidade Premium por 30 dias completos. Se por qualquer motivo voc\u00ea n\u00e3o ficar 100% satisfeito com os resultados, basta nos enviar um e-mail e devolvemos cada centavo. Sem perguntas, sem burocracia."}
            </p>
            <p className="mt-3 font-bold text-foreground">
              {"Risco zero para voc\u00ea. Todo o risco \u00e9 nosso."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
