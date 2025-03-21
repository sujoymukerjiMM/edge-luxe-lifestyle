
import React from "react";
import { motion } from "framer-motion";

export default function LifestyleSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Modern Technology for Your Wellness Routine
            </h2>
            <p className="text-charcoal/80 text-lg mb-6">
              You update your smartphone. You upgrade your fitness tracker. EDGE helps you enhance your personal care routine with the same attention to quality and innovation — with complete privacy and confidence.
            </p>
            <p className="text-lg font-medium">
              Our 98.3% satisfaction rating from 3,426 verified customers speaks to our commitment to quality and discretion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2 order-1 lg:order-2"
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1597600159211-d6c104f408d1?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Modern Lifestyle Image"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
