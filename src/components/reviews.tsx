"use client"

import { Star, MessageSquare, ThumbsUp } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import ReviewCard from "@/components/review-card"
import { FadeIn } from "@/components/fade-in"

const reviews = [
  {
    name: "Itedal Hussein",
    reviewCount: 6,
    rating: 5,
    date: "a month ago",
    text: "I had a great experience shopping here. The prices were some of the best I found, especially for the quality of the furniture. The staff was friendly, helpful, and never pushy, which made the whole process easy and stress-free. Customer service was amazing!",
  },
  {
    name: "AshSlay Tv",
    reviewCount: 3,
    rating: 5,
    date: "a month ago",
    text: "Amazing experience every time I've shopped here! The furniture is stylish — they have modern, contemporary, and traditional good quality furniture, and reasonably priced. I've purchased multiple pieces for my home and have always received great service.",
  },
  {
    name: "Layla Hussein",
    reviewCount: 2,
    rating: 5,
    date: "a month ago",
    text: "Great experience shopping here! The staff was very helpful and patient, and the store had a lot of beautiful furniture options. Customer service was amazing. Delivery was smooth and my furniture came in perfect condition. I would definitely shop here again and recommend this place to others!",
  },
  {
    name: "Bobby Johnson",
    reviewCount: 8,
    rating: 4,
    date: "2 months ago",
    text: "Had a nice time shopping with Bobby and he had great customer service. Found exactly what I was looking for at a fair price. The selection is good and the store is well organized.",
  },
]

const ratingBreakdown = [
  { stars: 5, percentage: 55, count: 31 },
  { stars: 4, percentage: 25, count: 14 },
  { stars: 3, percentage: 12, count: 7 },
  { stars: 2, percentage: 5, count: 3 },
  { stars: 1, percentage: 3, count: 1 },
]

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-14">
          <FadeIn className="lg:col-span-1" direction="left">
            <div className="lg:sticky lg:top-24 space-y-7">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background px-3.5 py-1 text-xs font-medium text-muted-foreground shadow-xs mb-5">
                  <MessageSquare className="h-3.5 w-3.5" />
                  Reviews
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.05]">
                  What Our Customers Say
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Real reviews from real customers
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-6 w-6 ${
                        i < 4
                          ? "fill-primary text-primary"
                          : "fill-muted text-muted-foreground/20"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-3xl font-bold tracking-tight">3.8</span>
                <span className="text-sm text-muted-foreground">
                  · 56 reviews
                </span>
              </div>

              <div className="space-y-2">
                {ratingBreakdown.map((item) => (
                  <div key={item.stars} className="flex items-center gap-2.5">
                    <span className="text-sm text-muted-foreground w-7">
                      {item.stars}
                    </span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground w-6 text-right">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <ThumbsUp className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>
                    Customers frequently mention: quality, affordable prices,
                    great service
                  </span>
                </div>
                <p className="text-xs text-muted-foreground/70">
                  Based on 56 Google reviews
                </p>
              </div>

              <a
                href="https://search.google.com/local/reviews?placeid=9Q2J+RF+Montgomery,+Alabama,+USA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-xs transition-all hover:bg-muted active:scale-[0.98] w-full"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Write a Review
              </a>
            </div>
          </FadeIn>

          <div className="lg:col-span-2 space-y-4">
            {reviews.map((review, i) => (
              <ReviewCard key={i} {...review} index={i} />
            ))}
            <div className="text-center pt-4">
              <button className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted">
                View all 53 more reviews
                <span className="ml-1.5" aria-hidden="true">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
