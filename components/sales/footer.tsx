export function Footer() {
  return (
    <footer className="bg-foreground py-8">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <p className="text-sm text-background/70">
          {"Kit Grafomotricidade Premium"}
        </p>
        <p className="mt-2 text-xs text-background/50">
          {"Este produto n\u00e3o substitui acompanhamento profissional. Resultados podem variar de acordo com cada crian\u00e7a."}
        </p>
        <p className="mt-4 text-xs text-background/40">
          {`\u00A9 ${new Date().getFullYear()} Kit Grafomotricidade Premium. Todos os direitos reservados.`}
        </p>
      </div>
    </footer>
  )
}
