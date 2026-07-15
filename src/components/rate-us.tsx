"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star, ThumbsUp, Send } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export default function RateUs() {
  const [rating, setRating] = useState(0)
  const [hovered, setHovered] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [feedback, setFeedback] = useState("")

  const labels = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (rating > 0) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <section className="relative py-24 md:py-32 border-t border-border/60">
        <div className="container">
          <FadeIn className="max-w-lg mx-auto text-center">
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                >
                  <Star className="h-8 w-8 fill-primary text-primary" />
                </motion.div>
              ))}
            </div>
            <h2 className="text-2xl font-bold tracking-tight mb-2">
              Thank You for Your Feedback!
            </h2>
            <p className="text-muted-foreground">
              You rated us {rating}/5 — {labels[rating]}. We appreciate your
              support!
            </p>
          </FadeIn>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-24 md:py-32 border-t border-border/60">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="container">
        <FadeIn className="max-w-lg mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background px-3.5 py-1 text-xs font-medium text-muted-foreground shadow-xs mb-5">
            <ThumbsUp className="h-3.5 w-3.5" />
            Rate Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.05] mb-3">
            How Was Your Experience?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
            Your feedback helps us serve you better. Rate your visit to American
            Furniture.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHovered(star)}
                  onMouseLeave={() => setHovered(0)}
                  className="transition-transform hover:scale-110 active:scale-95"
                  aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                >
                  <motion.div
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Star
                      className={`h-10 w-10 transition-colors ${
                        (hovered || rating) >= star
                          ? "fill-primary text-primary"
                          : "fill-muted text-muted-foreground/20"
                      }`}
                    />
                  </motion.div>
                </button>
              ))}
            </div>

            {rating > 0 && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-medium text-foreground"
              >
                {labels[rating]}
                {rating >= 4 ? " 😊" : rating === 3 ? " 😐" : " 😔"}
              </motion.p>
            )}

            <textarea
              placeholder="Share your thoughts (optional)..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={3}
              className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all resize-none"
            />

            <button
              type="submit"
              disabled={rating === 0}
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/15 transition-all hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] w-full"
            >
              <Send className="mr-2 h-4 w-4" />
              Submit Rating
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  )
}
