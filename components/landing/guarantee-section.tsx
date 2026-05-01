import { Shield, CheckCircle } from "lucide-react"

export function GuaranteeSection() {
  return (
    <section className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-primary/5 border-2 border-primary rounded-2xl p-6 md:p-10 text-center">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-primary-foreground" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Garantia Incondicional de 7 Dias
          </h2>

          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Você tem 7 dias para testar o método com seu filho. Se por qualquer motivo você não ficar satisfeita, basta enviar um e-mail e devolvemos 100% do seu investimento.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">Sem perguntas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">Sem burocracia</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">Risco zero</span>
            </div>
          </div>

          <p className="mt-6 text-primary font-bold text-lg">
            O risco é todo nosso. A transformação é toda sua.
          </p>
        </div>
      </div>
    </section>
  )
}
