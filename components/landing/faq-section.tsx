"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "¿Y si a mi hijo no le gustan las actividades?",
    answer: "Las actividades fueron desarrolladas para ser divertidas y atractivas. Pero si tu hijo no se adapta, tienes 7 días de garantía para pedir el reembolso total."
  },
  {
    question: "¿Y si no tengo tiempo?",
    answer: "El método fue creado pensando en madres ocupadas. Son solo 15 minutos al día, que se pueden aplicar en cualquier momento: por la mañana, por la tarde o antes de dormir."
  },
  {
    question: "¿Y si mi hijo ya tiene alguna dificultad?",
    answer: "El método ayuda especialmente a los niños con dificultades de concentración o retraso en el desarrollo. Las actividades son progresivas y respetan el ritmo de cada niño."
  },
  {
    question: "¿Para qué edad funciona?",
    answer: "El material fue desarrollado para niños de 2 a 10 años, con actividades específicas para cada franja de edad: 2-4 años, 4-6 años y 6-10 años."
  },
  {
    question: "¿Necesito tener experiencia en educación?",
    answer: "¡No! El material es autoexplicativo y viene con instrucciones claras. Cualquier madre puede aplicarlo, incluso sin experiencia en educación."
  },
  {
    question: "¿Cómo recibo el material?",
    answer: "Inmediatamente después de la confirmación del pago, recibes el acceso por correo electrónico. Todo el material es digital (PDF) y se puede acceder desde el celular, la tablet o la computadora."
  },
  {
    question: "¿Puedo imprimir las actividades?",
    answer: "¡Sí! Puedes imprimirlas las veces que quieras. Muchas madres prefieren imprimirlas para que el niño pueda escribir y dibujar en el papel."
  }
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Preguntas Frecuentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Resuelve tus dudas sobre Educakids360
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 md:p-6 text-left"
              >
                <span className="font-bold text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
