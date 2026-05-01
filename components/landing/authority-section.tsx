import Image from "next/image"
import { Award, BookOpen, Heart, Users } from "lucide-react"

const credentials = [
  {
    icon: Award,
    text: "Especialista em Desenvolvimento Infantil"
  },
  {
    icon: BookOpen,
    text: "10+ anos de experiência em educação"
  },
  {
    icon: Users,
    text: "+2.000 famílias impactadas"
  },
  {
    icon: Heart,
    text: "Mãe de 2 filhos"
  }
]

export function AuthoritySection() {
  return (
    <section className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-shrink-0">
            <Image
              src="/images/author.jpg"
              alt="Dra. Mariana Santos - Criadora do Método Desenvolvimento 360°"
              width={300}
              height={300}
              className="rounded-2xl shadow-xl w-64 h-64 md:w-72 md:h-72 object-cover mx-auto"
            />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              QUEM CRIOU O MÉTODO
            </span>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Dra. Mariana Santos
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6">
              Psicopedagoga e especialista em desenvolvimento cognitivo infantil, dediquei mais de uma década a estudar como as crianças aprendem e se desenvolvem.
            </p>
            
            <p className="text-muted-foreground mb-6">
              Como mãe de dois filhos, entendo na pele os desafios que você enfrenta. Foi essa experiência pessoal, combinada com meu conhecimento profissional, que me levou a criar o Método Desenvolvimento 360°, um sistema prático que qualquer mãe pode aplicar em casa.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <credential.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{credential.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
