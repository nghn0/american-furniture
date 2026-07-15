import { Star } from "lucide-react"
import Link from "next/link"

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About Us" },
      { href: "#reviews", label: "Reviews" },
      { href: "#services", label: "Services" },
      { href: "#contact", label: "Contact" },
    ],
  },
  {
    title: "Categories",
    links: [
      { href: "#", label: "Sofas & Sectionals" },
      { href: "#", label: "Mattresses" },
      { href: "#", label: "Dining Room Sets" },
      { href: "#", label: "Home Decor" },
      { href: "#", label: "Rugs" },
      { href: "#", label: "Accent Chairs" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "tel:+13342701004", label: "+1 334-270-1004" },
      {
        href: "mailto:Americanfurniture122@gmail.com",
        label: "Americanfurniture122@Gmail.com",
      },
      {
        href: "https://maps.google.com/?q=2095+Eastern+Blvd+Montgomery+AL+36117",
        label: "2095 Eastern Blvd\nMontgomery, AL 36117",
      },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="space-y-5">
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
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Premium furniture store in Montgomery, AL. Quality furniture, home
              decor, rugs, and mattresses at reasonable prices.
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < 4
                      ? "fill-primary text-primary"
                      : "fill-muted text-muted-foreground/20"
                  }`}
                />
              ))}
              <span className="ml-1.5 text-sm text-muted-foreground">3.8</span>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ||
                    link.href.startsWith("tel") ||
                    link.href.startsWith("mailto") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label.includes("\n") ? (
                          <>
                            {link.label.split("\n")[0]}
                            <br />
                            {link.label.split("\n")[1]}
                          </>
                        ) : (
                          link.label
                        )}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-border/60 text-center text-xs text-muted-foreground/70">
          <p>
            © {new Date().getFullYear()} American Furniture. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
