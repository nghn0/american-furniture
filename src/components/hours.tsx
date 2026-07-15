"use client"

import { Clock, Phone, Mail, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in"

const hours = [
  { day: "Monday", hours: "09:00 – 20:00" },
  { day: "Tuesday", hours: "09:00 – 20:00" },
  { day: "Wednesday", hours: "09:00 – 20:00" },
  { day: "Thursday", hours: "09:00 – 20:00" },
  { day: "Friday", hours: "09:00 – 20:00" },
  { day: "Saturday", hours: "09:00 – 20:00" },
  { day: "Sunday", hours: "11:00 – 18:00" },
]

const today = new Date().getDay()
const dayIndex = today === 0 ? 6 : today - 1

export default function Hours() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <FadeIn direction="left">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background px-3.5 py-1 text-xs font-medium text-muted-foreground shadow-xs mb-5">
              <Clock className="h-3.5 w-3.5" />
              Hours & Contact
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05] mb-5">
              Visit Our Showroom
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md leading-relaxed">
              Stop by American Furniture at 2095 Eastern Blvd, Montgomery, AL.
              Our friendly staff is ready to help you find the perfect pieces
              for your home.
            </p>

            <Card className="border border-border/60 bg-background shadow-xs">
              <CardContent className="p-0">
                <div className="p-6 space-y-3.5">
                  {hours.map((item, i) => (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between text-sm ${
                        i === dayIndex
                          ? "font-medium"
                          : "text-muted-foreground"
                      }`}
                    >
                      <span className={i === dayIndex ? "text-foreground" : ""}>
                        {item.day}
                      </span>
                      <span className={i === dayIndex ? "text-foreground" : ""}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <Separator />
                <div className="p-4 bg-primary/[0.03] flex items-center gap-2.5 text-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="font-medium text-foreground">Open now</span>
                  <span className="text-muted-foreground">
                    · Closes 7:45 pm
                  </span>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <Card className="border border-border/60 bg-background shadow-xs mb-5">
              <CardContent className="p-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/[0.08]">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Phone</p>
                    <a
                      href="tel:+13342701004"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +1 334-270-1004
                    </a>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/[0.08]">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <a
                      href="mailto:Americanfurniture122@gmail.com"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Americanfurniture122@Gmail.com
                    </a>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/[0.08]">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Address</p>
                    <p className="text-sm text-muted-foreground">
                      2095 Eastern Blvd
                      <br />
                      Montgomery, AL 36117, United States
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-3">
              <a
                href="https://maps.google.com/?q=2095+Eastern+Blvd+Montgomery+AL+36117"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/15 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20 active:scale-[0.98] flex-1"
              >
                <MapPin className="mr-2 h-4 w-4" />
                Get Directions
              </a>
              <a
                href="tel:+13342701004"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-xs transition-all hover:bg-muted active:scale-[0.98] flex-1"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
