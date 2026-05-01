import { AlertTriangle, Frown, HeartCrack } from "lucide-react"

const pains = [
  {
    icon: AlertTriangle,
    title: "M\u00e3os fracas e letra ileg\u00edvel",
    description:
      "Seu filho tem dificuldade em tra\u00e7os, curvas e letras. O resultado? Letra feia, notas baixas e autoestima l\u00e1 embaixo.",
  },
  {
    icon: Frown,
    title: "Falta de foco e frustra\u00e7\u00e3o",
    description:
      "Atividades abandonadas no meio, estresse na hora de estudar e birra toda vez que precisa escrever algo.",
  },
  {
    icon: HeartCrack,
    title: "Culpa de n\u00e3o conseguir ajudar",
    description:
      'Voc\u00ea n\u00e3o tem tempo, nem sabe por onde come\u00e7ar. Enquanto isso, v\u00ea seu filho "atrasado" em rela\u00e7\u00e3o aos colegas.',
  },
]

export function PainSection() {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-destructive">
            {"Voc\u00ea se identifica?"}
          </span>
          <h2 className="mt-2 text-balance text-2xl font-extrabold text-foreground md:text-3xl lg:text-4xl">
            {"As dores que tiram o sono de muitos pais"}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-muted-foreground">
            {"Se voc\u00ea j\u00e1 sentiu alguma dessas situa\u00e7\u00f5es, saiba que n\u00e3o est\u00e1 sozinho. Milh\u00f5es de pais no Brasil enfrentam o mesmo desafio."}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pains.map((pain) => (
            <div
              key={pain.title}
              className="group rounded-xl border border-destructive/20 bg-destructive/5 p-6 transition-all hover:border-destructive/40 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                <pain.icon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">
                {pain.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {pain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
