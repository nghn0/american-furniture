"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Phone } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import ThemeToggle from "@/components/theme-toggle"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="absolute inset-0 border-b border-border/40 bg-background/70 backdrop-blur-xl" />
      <div className="container relative flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-sm">
            <span className="text-xs font-bold text-primary-foreground">
              AF
            </span>
          </div>
          <span className="text-[15px] font-semibold tracking-tight">
            American <span className="text-primary">Furniture</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-muted-foreground/80 transition-colors hover:text-foreground rounded-lg hover:bg-muted/60"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="tel:+13342701004"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 active:scale-[0.97]"
          >
            <Phone className="mr-1.5 h-3.5 w-3.5" />
            (334) 270-1004
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background hover:bg-muted transition-colors">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-8 mt-10">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground rounded-lg hover:bg-muted"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="border-t pt-6 px-3">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-muted-foreground">Theme</span>
                    <ThemeToggle />
                  </div>
                  <a
                    href="tel:+13342701004"
                    className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
                  >
                    <Phone className="h-4 w-4" />
                    (334) 270-1004
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
