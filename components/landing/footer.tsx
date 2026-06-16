export function Footer() {
  return (
    <footer className="py-8 bg-foreground">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <p className="text-background font-bold text-lg mb-2">Educakids360</p>
        <p className="text-background/70 text-sm mb-4">
          Transformando el desarrollo infantil, una familia a la vez.
        </p>
        <p className="text-background/50 text-xs max-w-2xl mx-auto">
          Este producto no garantiza la obtención de resultados. Cualquier referencia al desempeño es solo ilustrativa. Los resultados pueden variar según el compromiso individual.
        </p>
        <p className="text-background/50 text-xs mt-4">
          © {new Date().getFullYear()} Educakids360. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
