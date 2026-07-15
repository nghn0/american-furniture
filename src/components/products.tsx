"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/fade-in"

interface Product {
  id: number
  name: string
  category: string
  price: string
  rating: number
  reviews: number
  image: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Modern Sofa Collection",
    category: "Sofas & Sectionals",
    price: "$899 – $2,499",
    rating: 4.8,
    reviews: 34,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 2,
    name: "Plush Memory Foam Mattress",
    category: "Mattresses & Beds",
    price: "$499 – $1,299",
    rating: 4.6,
    reviews: 28,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 3,
    name: "Accent Chair Collection",
    category: "Chairs & Accents",
    price: "$299 – $899",
    rating: 4.7,
    reviews: 19,
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 4,
    name: "Dining Room Essentials",
    category: "Dining Room Sets",
    price: "$699 – $2,999",
    rating: 4.5,
    reviews: 22,
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=400&fit=crop&auto=format",
  },
]

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "md" }) {
  const sizeClass = size === "md" ? "h-5 w-5" : "h-3.5 w-3.5"
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => {
        const filled = i < Math.floor(rating)
        const half = !filled && i < rating
        return (
          <Star
            key={i}
            className={`${sizeClass} ${
              filled
                ? "fill-primary text-primary"
                : half
                  ? "fill-primary/50 text-primary"
                  : "fill-muted text-muted-foreground/20"
            }`}
          />
        )
      })}
    </div>
  )
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [liked, setLiked] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Card className="group border border-border/60 bg-background shadow-xs transition-all duration-300 hover:shadow-lg overflow-hidden">
        <div className="relative aspect-[3/2] overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <button
            onClick={() => setLiked(!liked)}
            className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-xs opacity-0 group-hover:opacity-100 transition-all hover:bg-white"
          >
            <Heart
              className={`h-4 w-4 transition-colors ${
                liked ? "fill-red-500 text-red-500" : "text-foreground"
              }`}
            />
          </button>
        </div>
        <CardContent className="p-5">
          <span className="text-xs font-medium text-muted-foreground">
            {product.category}
          </span>
          <h3 className="font-semibold text-[15px] mt-0.5 mb-2">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <StarRating rating={product.rating} />
              <span className="text-xs text-muted-foreground">
                {product.rating} ({product.reviews})
              </span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-border/50 flex items-center justify-between">
            <span className="text-sm font-medium">{product.price}</span>
            <span className="text-xs text-muted-foreground">In stock</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function Products() {
  return (
    <section id="products" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="container relative">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background px-3.5 py-1 text-xs font-medium text-muted-foreground shadow-xs mb-5">
            <Star className="h-3.5 w-3.5" />
            Featured Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05]">
            Shop Our Best Sellers
          </h2>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Discover our most popular furniture pieces, handpicked for quality
            and style — rated by customers like you.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
