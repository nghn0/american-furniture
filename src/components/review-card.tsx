"use client"

import { motion } from "framer-motion"
import { Star, ThumbsUp, Share2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ReviewCardProps {
  name: string
  reviewCount: number
  rating: number
  date: string
  text: string
  index: number
}

export default function ReviewCard({
  name,
  reviewCount,
  rating,
  date,
  text,
  index,
}: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Card className="border border-border/60 bg-background shadow-xs transition-all duration-300 hover:shadow-md group">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/[0.08] text-sm font-semibold text-primary">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="font-medium text-sm">{name}</p>
                <p className="text-xs text-muted-foreground">
                  {reviewCount} {reviewCount === 1 ? "review" : "reviews"}
                </p>
              </div>
            </div>
            <span className="text-xs text-muted-foreground/70 whitespace-nowrap">
              {date}
            </span>
          </div>

          <div className="flex items-center gap-0.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating
                    ? "fill-primary text-primary"
                    : "fill-muted text-muted-foreground/20"
                }`}
              />
            ))}
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {text}
          </p>

          <div className="flex items-center gap-4 mt-5 pt-4 border-t border-border/50">
            <button className="flex items-center gap-1.5 text-xs text-muted-foreground/70 hover:text-foreground transition-colors">
              <ThumbsUp className="h-3.5 w-3.5" />
              Like
            </button>
            <button className="flex items-center gap-1.5 text-xs text-muted-foreground/70 hover:text-foreground transition-colors">
              <Share2 className="h-3.5 w-3.5" />
              Share
            </button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
