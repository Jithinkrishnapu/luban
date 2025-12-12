"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import QuoteModal from "./quote-modal"

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/organic-soap-lavender-spa.jpg"
          alt="Premium handmade organic soap with natural ingredients"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Simple overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base font-medium text-white/90 mb-4 tracking-wider uppercase"
          >
            Organic All Natural
          </motion.p>

          <motion.h1 
            variants={itemVariants} 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight"
          >
            Handmade Soap
            <br />
            <span className="text-primary">
              Crafted with Love
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Luxurious, chemical-free soaps crafted with love and natural ingredients for your skin.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="btn-primary bg-white text-primary"
            >
              Get a Quote
            </motion.button>
            
            <motion.a
              href="/products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary border-white text-white hover:bg-white hover:text-primary"
            >
              View Products
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
