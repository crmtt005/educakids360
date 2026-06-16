import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ana Carolina",
    location: "Madrid, España",
    image: "/images/testimonial-ana.jpg",
    rating: 5,
    text: "Mi hijo tenía mucha dificultad de concentración. Con apenas 3 semanas usando el método, su maestra ya notó la diferencia en la escuela. ¡Ahora logra terminar las actividades!",
    result: "Mejoró la concentración en 3 semanas"
  },
  {
    name: "Patricia Méndez",
    location: "Buenos Aires, Argentina",
    image: "/images/testimonial-patricia.jpg",
    rating: 5,
    text: "Me sentía culpable por no tener tiempo de calidad con mi hija. Con 15 minutos al día, logramos tener un momento solo nuestro y además la veo desarrollarse. ¡Es increíble!",
    result: "Vínculo madre-hija fortalecido"
  },
  {
    name: "Fernanda Olivera",
    location: "Bogotá, Colombia",
    image: "/images/testimonial-fernanda.jpg",
    rating: 5,
    text: "Mi hijo de 4 años ya está reconociendo todas las letras y los números. La alfabetización está siendo mucho más fácil de lo que fue con mi hija mayor. ¡Súper recomendado!",
    result: "Hijo alfabetizado antes de la escuela"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Lo Que Dicen las Madres
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Resultados reales de familias que transformaron el desarrollo de sus hijos
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
            <span className="text-muted-foreground">- Más de 500 valoraciones</span>
          </div>
        </div>
      </div>
    </section>
  )
}
