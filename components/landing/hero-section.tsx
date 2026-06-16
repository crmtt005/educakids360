"use client"

import Image from "next/image"
import { CheckCircle, Star, Users } from "lucide-react"

export function HeroSection() {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-background py-8 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Star className="w-4 h-4 fill-current" />
              <span>4.9/5 valoraciones de madres satisfechas</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-4 text-balance">
              Tu Hijo Desarrollará Enfoque, Concentración y Estará Preparado Para la Escuela en Solo{" "}
              <span className="text-primary">15 Minutos al Día</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-6 text-pretty">
              El Método Desarrollo 360° que ya ayudó a más de 2.000 familias a transformar el potencial cognitivo de sus hijos sin depender de pantallas ni clases caras.
            </p>

            <ul className="space-y-3 mb-6 text-left max-w-md mx-auto lg:mx-0">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Actividades prácticas que desarrollan el enfoque y la atención</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Método basado en neurociencia infantil</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Resultados visibles en pocas semanas</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
              <button
                onClick={scrollToOffer}
                className="animate-pulse-cta w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 rounded-xl text-lg shadow-lg transition-all"
              >
                QUIERO EMPEZAR AHORA
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>+2.000 familias ya transformaron a sus hijos</span>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative">
              <Image
                src="/images/hero-mom-child.jpg"
                alt="Madre e hijo estudiando juntos con actividades educativas"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl w-full h-auto"
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-xl shadow-lg hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="font-bold text-foreground">4.9/5</span>
                </div>
                <p className="text-sm text-muted-foreground">+500 valoraciones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
