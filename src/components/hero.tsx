"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, MapPin, Phone, ArrowRight, Clock } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/[0.02]" />
      <div className="absolute top-1/4 -right-32 h-[500px] w-[500px] rounded-full bg-primary/[0.03] blur-[120px]" />
      <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-primary/[0.02] blur-[100px]" />

      <div className="container relative py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-center gap-3"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background px-3.5 py-1 text-xs font-medium text-muted-foreground shadow-xs">
                <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                3.8 · 56 reviews
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background px-3.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Open now
              </span>
            </motion.div>

            <div className="space-y-5">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[0.95]"
              >
                Premium{" "}
                <span className="text-primary">Furniture</span>
                <br />
                for Every Home
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed"
              >
                Modern, contemporary, and traditional furniture at reasonable
                prices. Experience quality craftsmanship and exceptional
                customer service at American Furniture.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="tel:+13342701004"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 active:scale-[0.98]"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call (334) 270-1004
              </a>
              <a
                href="#reviews"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-medium text-foreground shadow-xs transition-all hover:bg-muted active:scale-[0.98]"
              >
                See Reviews
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary/70" />
                2095 Eastern Blvd, Montgomery, AL
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary/70" />
                Mon–Sat: 9am–8pm · Sun: 11am–6pm
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted ring-1 ring-border/60 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop&auto=format"
                alt="Modern living room furniture showcase"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-3.5 py-1.5 text-xs font-medium text-foreground shadow-xs">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  Montgomery, AL Showroom
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
