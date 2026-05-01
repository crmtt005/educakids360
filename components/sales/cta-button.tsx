"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaButton({ variant = "default" }: { variant?: "default" | "large" }) {
  const isLarge = variant === "large"

  return (
    <Button
      size={isLarge ? "lg" : "default"}
      className={`group ${
        isLarge
          ? "w-full bg-primary px-10 py-7 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 md:w-auto md:text-xl"
          : "bg-primary px-8 py-6 text-base font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40"
      }`}
      asChild
    >
      <a href="https://pay.cakto.com.br/9sw8c9t_794481" target="_blank" rel="noopener noreferrer">
        {"QUERO O KIT AGORA"}
        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
      </a>
    </Button>
  )
}
