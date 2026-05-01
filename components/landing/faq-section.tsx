"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "E se meu filho não gostar das atividades?",
    answer: "As atividades foram desenvolvidas para serem divertidas e engajantes. Mas caso seu filho não se adapte, você tem 7 dias de garantia para pedir reembolso total."
  },
  {
    question: "E se eu não tiver tempo?",
    answer: "O método foi criado pensando em mães ocupadas. São apenas 15 minutos por dia, que podem ser aplicados em qualquer momento — de manhã, à tarde ou antes de dormir."
  },
  {
    question: "E se meu filho já tiver alguma dificuldade?",
    answer: "O método ajuda especialmente crianças com dificuldades de concentração ou atraso no desenvolvimento. As atividades são progressivas e respeitam o ritmo de cada criança."
  },
  {
    question: "Funciona para qual idade?",
    answer: "O material foi desenvolvido para crianças de 2 a 10 anos, com atividades específicas para cada faixa etária: 2-4 anos, 4-6 anos e 6-10 anos."
  },
  {
    question: "Preciso ter experiência em educação?",
    answer: "Não! O material é autoexplicativo e vem com instruções claras. Qualquer mãe consegue aplicar, mesmo sem experiência em educação."
  },
  {
    question: "Como recebo o material?",
    answer: "Imediatamente após a confirmação do pagamento, você recebe o acesso por e-mail. Todo o material é digital (PDF) e pode ser acessado pelo celular, tablet ou computador."
  },
  {
    question: "Posso imprimir as atividades?",
    answer: "Sim! Você pode imprimir quantas vezes quiser. Muitas mães preferem imprimir para que a criança possa escrever e desenhar no papel."
  }
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Tire suas dúvidas sobre o Educakids360
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
