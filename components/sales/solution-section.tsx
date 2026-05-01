import Image from "next/image"
import { Check, Sparkles, Target, Pencil } from "lucide-react"

const benefits = [
  {
    icon: Sparkles,
    text: "Fortalece m\u00fasculos das m\u00e3os e coordena\u00e7\u00e3o motora fina",
  },
  {
    icon: Target,
    text: "Aumenta concentra\u00e7\u00e3o e controle de movimentos",
  },
  {
    icon: Pencil,
    text: "Prepara para escrita clara e prazerosa, sem press\u00e3o",
  },
]

export function SolutionSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
          <div className="flex-1">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/worksheets-preview.jpg"
                alt="Atividades do Kit Grafomotricidade Premium"
                width={500}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              {"A solu\u00e7\u00e3o"}
            </span>
            <h2 className="mt-2 text-balance text-2xl font-extrabold text-foreground md:text-3xl lg:text-4xl">
              {"Transforme frustra\u00e7\u00e3o em conquista com o Kit Grafomotricidade Premium"}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {"Baseado no m\u00e9todo franc\u00eas adaptado \u00e0 realidade brasileira, nosso Kit oferece um caminho progressivo e divertido para seu filho desenvolver a escrita. Perfeito para crian\u00e7as de 2 a 10 anos, inclusive com TDAH, autismo ou dificuldades de foco."}
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {benefits.map((benefit) => (
                <div key={benefit.text} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <benefit.icon className="h-4 w-4 text-primary" />
                  </div>
                  <p className="font-medium text-foreground">{benefit.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-4">
              <p className="flex items-start gap-2 font-medium text-foreground">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  <strong>{"Resultados reais em dias:"}</strong>{" "}
                  {"Seu filho vai segurar o l\u00e1pis com firmeza, completar tarefas com empolga\u00e7\u00e3o e ganhar confian\u00e7a para a vida toda."}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
