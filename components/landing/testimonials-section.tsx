import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ana Carolina",
    location: "São Paulo, SP",
    image: "/images/testimonial-ana.jpg",
    rating: 5,
    text: "Meu filho tinha muita dificuldade de concentração. Com apenas 3 semanas usando o método, a professora dele já notou a diferença na escola. Ele consegue terminar as atividades agora!",
    result: "Melhora na concentração em 3 semanas"
  },
  {
    name: "Patrícia Mendes",
    location: "Belo Horizonte, MG",
    image: "/images/testimonial-patricia.jpg",
    rating: 5,
    text: "Eu me sentia culpada por não ter tempo de qualidade com minha filha. Com 15 minutos por dia, conseguimos ter um momento só nosso e ainda estou vendo ela se desenvolver. É incrível!",
    result: "Vínculo mãe-filha fortalecido"
  },
  {
    name: "Fernanda Oliveira",
    location: "Curitiba, PR",
    image: "/images/testimonial-fernanda.jpg",
    rating: 5,
    text: "Meu filho de 4 anos já está reconhecendo todas as letras e números. A alfabetização está sendo muito mais fácil do que foi com minha filha mais velha. Super recomendo!",
    result: "Filho alfabetizado antes da escola"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            O Que as Mães Estão Dizendo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Resultados reais de famílias que transformaram o desenvolvimento dos seus filhos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground mb-4">{`"${testimonial.text}"`}</p>

              <div className="bg-primary/10 text-primary text-sm font-medium px-3 py-2 rounded-lg inline-block">
                {testimonial.result}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 bg-card border border-border px-6 py-3 rounded-full">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-bold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">- Mais de 500 avaliações</span>
          </div>
        </div>
      </div>
    </section>
  )
}
