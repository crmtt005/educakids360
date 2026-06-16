"use client"

import { FileText, Users, RefreshCw, Headphones, CheckCircle } from "lucide-react"

const inclusions = [
  {
    icon: FileText,
    title: "+200 Actividades Estructuradas",
    description: "Actividades prácticas y divertidas para todas las edades, de 2 a 10 años",
    value: "R$ 197"
  },
  {
    icon: Users,
    title: "Material para Todas las Edades",
    description: "Contenido organizado por franja de edad: 2-4, 4-6 y 6-10 años",
    value: "R$ 97"
  },
  {
    icon: FileText,
    title: "Formato Digital (PDF)",
    description: "Acceso inmediato desde el celular, la tablet o la computadora. Imprime las veces que quieras",
    value: "R$ 47"
  },
  {
    icon: RefreshCw,
    title: "Actualizaciones de por Vida",
    description: "Recibe nuevas actividades y mejoras sin pagar nada más",
    value: "R$ 97"
  },
  {
    icon: Headphones,
    title: "Soporte por Correo Electrónico",
    description: "Resuelve tus dudas con nuestro equipo especializado",
    value: "R$ 47"
  }
]

export function WhatsIncludedSection() {
  const totalValue = inclusions.reduce((acc, item) => {
    return acc + parseInt(item.value.replace(/[^\d]/g, ""))
  }, 0)

  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Lo Que Vas a Recibir
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un paquete completo para transformar el desarrollo de tu hijo
          </p>
        </div>

        <div className="space-y-4 mb-10 max-w-3xl mx-auto">
          {inclusions.map((item, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-xl p-4 md:p-6 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-muted-foreground line-through text-sm">{item.value}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-primary/5 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
          <p className="text-muted-foreground mb-2">Valor total si se vendiera por separado:</p>
          <p className="text-3xl font-bold text-foreground line-through mb-4">R$ {totalValue},00</p>
          <button
            onClick={scrollToOffer}
            className="animate-pulse-cta bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 rounded-xl text-lg shadow-lg transition-all"
          >
            VER OFERTA ESPECIAL
          </button>
        </div>
      </div>
    </section>
  )
}
