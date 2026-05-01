export function Footer() {
  return (
    <footer className="py-8 bg-foreground">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <p className="text-background font-bold text-lg mb-2">Educakids360</p>
        <p className="text-background/70 text-sm mb-4">
          Transformando o desenvolvimento infantil, uma família por vez.
        </p>
        <p className="text-background/50 text-xs max-w-2xl mx-auto">
          Este produto não garante a obtenção de resultados. Qualquer referência a desempenho é apenas ilustrativa. Os resultados podem variar de acordo com o comprometimento individual.
        </p>
        <p className="text-background/50 text-xs mt-4">
          © {new Date().getFullYear()} Educakids360. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
