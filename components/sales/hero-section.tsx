import Image from "next/image"
import { Star, ShieldCheck, Clock } from "lucide-react"
import { CtaButton } from "./cta-button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary/5 py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
              <Star className="h-4 w-4 fill-accent" />
              <span>{"Mais de 12.000 pais satisfeitos"}</span>
            </div>

            <h1 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {"Seu Filho Escrevendo com "}
              <span className="text-primary">{"Confianca"}</span>
              {" e "}
              <span className="text-accent">{"Alegria"}</span>
              {" em Poucas Semanas"}
            </h1>

            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              {"O Kit Grafomotricidade Premium usa o m\u00e9todo franc\u00eas adaptado ao Brasil para desenvolver foco, coordena\u00e7\u00e3o motora e escrita "}
              <strong className="text-foreground">{"em apenas 10 minutos por dia"}</strong>
              {". Para crian\u00e7as de 2 a 10 anos."}
            </p>

            <div className="mt-6 flex flex-col items-center gap-3 md:flex-row md:items-start">
              <CtaButton />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground md:justify-start">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" />
                {"Garantia de 30 dias"}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-primary" />
                {"Acesso imediato"}
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-accent text-accent" />
                {"4.9/5 avalia\u00e7\u00f5es"}
              </span>
            </div>
          </div>

          <div className="relative flex-1">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl shadow-2xl shadow-primary/20">
              <Image
                src="/images/hero-child.jpg"
                alt="Crian\u00e7a praticando escrita com atividades de grafomotricidade"
                width={500}
                height={500}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-3 -right-3 rounded-xl bg-card p-3 shadow-lg md:-bottom-4 md:-right-4 md:p-4">
              <p className="text-xs font-bold text-primary md:text-sm">
                {"+200 atividades"}
              </p>
              <p className="text-xs text-muted-foreground">
                {"Acesso vital\u00edcio"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
