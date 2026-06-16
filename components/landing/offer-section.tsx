import { CheckCircle, Gift, Shield, Zap } from "lucide-react"

const basicInclusions = [
  "+200 Actividades Estructuradas",
  "Material para 2-10 años",
  "Formato Digital (PDF)",
  "Actualizaciones de por Vida",
  "Soporte por Correo Electrónico"
]

const completeInclusions = [
  ...basicInclusions,
  "Planificador de Rutina Infantil",
  "Guía de Disciplina Positiva",
  "Cronograma por Edad",
  "Acceso al Grupo Exclusivo",
  "Bonos Futuros Gratuitos"
]

export function OfferSection() {
  return (
    <section id="oferta" className="py-12 md:py-20 bg-primary/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            <span>OFERTA POR TIEMPO LIMITADO</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Elige Tu Paquete
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Empieza a transformar el desarrollo de tu hijo hoy mismo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Pacote Básico */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Paquete Esencial</h3>
              <p className="text-muted-foreground text-sm">Para quien quiere empezar ahora</p>
            </div>

            <ul className="space-y-3 mb-6 flex-1">
              {basicInclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="text-center mb-6">
              <p className="text-muted-foreground line-through text-sm">Antes R$ 97,00</p>
              <p className="text-4xl font-extrabold text-foreground">
                R$ 27<span className="text-2xl">,90</span>
              </p>
              <p className="text-muted-foreground text-sm">pago único</p>
            </div>

            <a
              href="https://pay.cakto.com.br/yv37nq3_810224"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-pulse-cta block w-full bg-foreground hover:bg-foreground/90 text-background font-bold py-4 px-6 rounded-xl text-center text-lg shadow-lg transition-all"
            >
              QUIERO EL ESENCIAL
            </a>
          </div>

          {/* Pacote Completo */}
          <div className="bg-card border-2 border-primary rounded-2xl p-6 md:p-8 flex flex-col relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2">
              <Gift className="w-4 h-4" />
              MÁS VENDIDO
            </div>

            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Paquete Completo</h3>
              <p className="text-muted-foreground text-sm">Con todos los bonos exclusivos</p>
            </div>

            <ul className="space-y-3 mb-6 flex-1">
              {completeInclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="text-center mb-6">
              <p className="text-muted-foreground line-through text-sm">Antes R$ 197,00</p>
              <p className="text-4xl font-extrabold text-primary">
                R$ 37<span className="text-2xl">,90</span>
              </p>
              <p className="text-muted-foreground text-sm">pago único</p>
            </div>

            <a
              href="https://pay.cakto.com.br/9sw8c9t_794481"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-pulse-cta block w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-6 rounded-xl text-center text-lg shadow-lg transition-all"
            >
              QUIERO EL COMPLETO
            </a>

            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <Shield className="w-4 h-4" />
              <span>Compra 100% segura</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            Aceptamos PIX y Tarjeta de Crédito
          </p>
        </div>
      </div>
    </section>
  )
}
