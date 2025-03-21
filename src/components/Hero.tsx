
import React from "react";
import { AnimatedGradient } from "./ui/animated-gradient";
import TrustBadges from "./TrustBadges";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <AnimatedGradient className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="limited-tag shine-effect">LIMITED PREORDER</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight">
            EDGE | Advanced Self-Care Device for Men
          </h1>
          <p className="text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto mb-10">
            Engineered for exceptional comfort with advanced vibration technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-10"
        >
          <div className="relative overflow-hidden rounded-xl shadow-xl max-w-2xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="EDGE Personal Wellness Device"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="font-medium text-lg mb-4">
            Successfully sold out in two previous releases. EDGE is now available for limited preorders.
          </p>
          <p className="text-charcoal/80 mb-8 max-w-2xl mx-auto">
            A premium personal wellness device designed to enhance your self-care routine — with complete discretion.
          </p>

          <a href="#preorder" className="btn-primary px-8 py-4 text-base md:text-lg shine-effect">
            Reserve EDGE Now →
          </a>

          <p className="text-sm text-charcoal/60 mt-4">
            Preorder today. Only 1,287 units available. Ships in unmarked packaging.
          </p>
        </motion.div>

        <TrustBadges />
      </div>
    </AnimatedGradient>
  );
}
