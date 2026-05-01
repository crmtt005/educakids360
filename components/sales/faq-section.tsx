"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como funciona o pagamento?",
    answer:
      "Aceitamos cart\u00e3o de cr\u00e9dito (at\u00e9 9x sem juros), PIX com desconto ou boleto banc\u00e1rio. O processamento \u00e9 feito por plataforma segura e criptografada.",
  },
  {
    question: "Como recebo o material?",
    answer:
      "O acesso \u00e9 imediato! Ap\u00f3s a confirma\u00e7\u00e3o do pagamento, voc\u00ea recebe um e-mail com o link para baixar todos os materiais. Pode imprimir quantas vezes quiser.",
  },
  {
    question: "Para qual faixa et\u00e1ria \u00e9 indicado?",
    answer:
      "O Kit foi desenvolvido para crian\u00e7as de 2 a 10 anos, com atividades progressivas que se adaptam ao n\u00edvel de cada crian\u00e7a. \u00c9 perfeito para crian\u00e7as com TDAH, autismo ou dificuldades de foco.",
  },
  {
    question: "E se eu n\u00e3o gostar do material?",
    answer:
      "Voc\u00ea tem 30 dias de garantia incondicional. Se n\u00e3o ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas.",
  },
  {
    question: "Preciso de algum material extra?",
    answer:
      "N\u00e3o! Voc\u00ea s\u00f3 precisa de uma impressora comum, l\u00e1pis ou giz de cera. As atividades s\u00e3o prontas para imprimir e usar.",
  },
  {
    question: "Tem suporte se eu tiver d\u00favidas?",
    answer:
      "Sim! Oferecemos suporte VIP via WhatsApp 24/7 para ajudar voc\u00ea com qualquer d\u00favida sobre as atividades.",
  },
]

export function FaqSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            {"Perguntas frequentes"}
          </span>
          <h2 className="mt-2 text-balance text-2xl font-extrabold text-foreground md:text-3xl lg:text-4xl">
            {"Tire suas d\u00favidas"}
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
