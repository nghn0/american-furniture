"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in"

const categories = [
  {
    title: "Sofas & Sectionals",
    description:
      "Living room centerpieces in modern, contemporary, and traditional styles.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=250&fit=crop&auto=format",
  },
  {
    title: "Mattresses & Beds",
    description:
      "Comfortable, supportive mattresses and stylish bed frames.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=250&fit=crop&auto=format",
  },
  {
    title: "Chairs & Accents",
    description:
      "Accent chairs, dining chairs, and comfortable seating options.",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=250&fit=crop&auto=format",
  },
  {
    title: "Home Decor & Rugs",
    description:
      "Beautiful rugs, lighting, and decor to complete any room.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop&auto=format",
  },
  {
    title: "Dining Room Sets",
    description:
      "Complete dining collections for every style and space.",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=250&fit=crop&auto=format",
  },
  {
    title: "Interior Styling",
    description:
      "Expert staff to help with design choices and coordination.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&h=250&fit=crop&auto=format",
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container relative">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background px-3.5 py-1 text-xs font-medium text-muted-foreground shadow-xs mb-5">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05]">
            Everything for Your Home
          </h2>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-lg mx-auto">
            From sofas to mattresses, home decor to rugs — we have everything
            you need to make your house a home.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.06}
        >
          {categories.map((category) => (
            <StaggerItem key={category.title}>
              <Card className="group border border-border/60 bg-background shadow-xs transition-all duration-300 hover:shadow-lg overflow-hidden cursor-default">
                <div className="relative aspect-[8/5] overflow-hidden bg-muted">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-semibold text-[15px] mb-1.5">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
