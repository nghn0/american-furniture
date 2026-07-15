"use client"

import { Sofa, Sparkles, Truck, Shield, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in"

const features = [
  {
    icon: Sofa,
    title: "Premium Quality",
    description:
      "High-quality furniture built to last with modern, contemporary, and traditional styles.",
  },
  {
    icon: Sparkles,
    title: "Stylish Designs",
    description:
      "Beautiful, on-trend pieces that elevate every room in your home.",
  },
  {
    icon: Truck,
    title: "Smooth Delivery",
    description:
      "Professional delivery service ensuring your furniture arrives in perfect condition.",
  },
  {
    icon: Shield,
    title: "Affordable Prices",
    description:
      "Reasonable prices without compromising on quality or style.",
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="container relative">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background px-3.5 py-1 text-xs font-medium text-muted-foreground shadow-xs mb-5">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05]">
            Your Trusted Furniture Store in Montgomery
          </h2>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-lg mx-auto">
            At American Furniture, we pride ourselves on offering great quality,
            reasonable prices, and excellent customer service every time.
          </p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <Card className="border border-border/60 bg-background shadow-xs transition-all duration-300 hover:shadow-md hover:border-border group">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/[0.08] mb-5 group-hover:bg-primary/[0.12] transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-[15px] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3} className="mt-16">
          <div className="rounded-2xl border border-border/60 bg-background p-8 md:p-10 text-center shadow-xs">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-primary text-primary"
                />
              ))}
            </div>
            <p className="text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              &ldquo;Love the future service from the staff — great quality and
              excellent customer service every time.&rdquo;
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              — Happy American Furniture Customer
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
