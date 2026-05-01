import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Juliana M.",
    location: "S\u00e3o Paulo, SP",
    text: "Meu filho com TDAH finalmente foca nas atividades! Em 2 semanas j\u00e1 vi uma mudan\u00e7a incr\u00edvel na coordena\u00e7\u00e3o dele. Recomendo 100%!",
    rating: 5,
    image: "/images/testimonial-juliana.jpg",
  },
  {
    name: "Sandra R.",
    location: "Rio de Janeiro, RJ",
    text: "Como professora, posso dizer que esse material \u00e9 excepcional. F\u00e1cil de usar, resultados vis\u00edveis em 1 semana. Indico para todos os pais dos meus alunos.",
    rating: 5,
    image: "/images/testimonial-sandra.jpg",
  },
  {
    name: "Camila F.",
    location: "Belo Horizonte, MG",
    text: "A autoestima da minha filha explodiu! Ela agora pede para brincar de escrever. N\u00e3o imaginava que um kit digital pudesse fazer tanta diferen\u00e7a.",
    rating: 5,
    image: "/images/testimonial-camila.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            {"Depoimentos reais"}
          </span>
          <h2 className="mt-2 text-balance text-2xl font-extrabold text-foreground md:text-3xl lg:text-4xl">
            {"Pais que j\u00e1 transformaram a vida dos filhos"}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <Quote className="mb-3 h-8 w-8 text-primary/20" />
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="mb-4 leading-relaxed text-foreground">
                {`\u201c${t.text}\u201d`}
              </p>
              <div className="flex items-center gap-3 border-t border-border pt-3">
                <Image
                  src={t.image}
                  alt={`Foto de ${t.name}`}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
