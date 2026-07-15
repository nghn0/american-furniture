"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Products from "@/components/products"
import Reviews from "@/components/reviews"
import Services from "@/components/services"
import Hours from "@/components/hours"
import RateUs from "@/components/rate-us"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex-1"
      >
        <Hero />
        <Products />
        <About />
        <Reviews />
        <Services />
        <Hours />
        <RateUs />
      </motion.main>
      <Footer />
    </>
  )
}
