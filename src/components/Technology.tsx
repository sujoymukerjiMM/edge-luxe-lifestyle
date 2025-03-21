
import React from "react";
import { motion } from "framer-motion";

export default function Technology() {
  const steps = [
    {
      title: "Premium Comfort Materials",
      description:
        "Medical-grade silicone with precisely engineered texture patterns for optimal comfort during extended use.",
    },
    {
      title: "Multi-pattern Technology",
      description:
        "10 distinct sensation patterns with adjustable intensity levels, from subtle (27Hz) to powerful (82Hz).",
    },
    {
      title: "Ergonomic Design",
      description:
        "360° form-fitting design with flexibility to accommodate different preferences and ensure complete comfort.",
    },
    {
      title: "Practical Maintenance",
      description:
        "Water-resistant design (IPX7 rated) for thorough cleaning and long-term durability.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Advanced Technology for Modern Self-Care
          </h2>
          <p className="text-charcoal/80 text-lg">
            EDGE represents a new standard in personal wellness devices for men. Our most sophisticated design combines:
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={item}
                className="flex mb-10 last:mb-0"
              >
                <div className="mr-6 relative">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow text-black font-medium">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-10 bottom-0 left-1/2 w-px -translate-x-1/2 h-[calc(100%-40px)] bg-gray-200"></div>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                  <p className="text-charcoal/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:w-1/2 bg-gray-50 rounded-xl p-6"
          >
            <h3 className="text-xl font-medium mb-4">Technical Specifications</h3>
            <div className="space-y-4">
              <div className="flex border-b border-gray-200 pb-3">
                <div className="w-1/3 font-medium">Materials</div>
                <div className="w-2/3 text-charcoal/80">Body-safe silicone sleeve + ABS case (BPA-free)</div>
              </div>
              <div className="flex border-b border-gray-200 pb-3">
                <div className="w-1/3 font-medium">Battery</div>
                <div className="w-2/3 text-charcoal/80">1200mAh Li-ion rechargeable (USB-C, 2.5 hour runtime)</div>
              </div>
              <div className="flex border-b border-gray-200 pb-3">
                <div className="w-1/3 font-medium">Sound Level</div>
                <div className="w-2/3 text-charcoal/80">Ultra-quiet (≤40dB at maximum setting)</div>
              </div>
              <div className="flex border-b border-gray-200 pb-3">
                <div className="w-1/3 font-medium">Dimensions</div>
                <div className="w-2/3 text-charcoal/80">15.3cm × 6.8cm, 187g, travel-sized with matte black finish</div>
              </div>
              <div className="flex">
                <div className="w-1/3 font-medium">Warranty</div>
                <div className="w-2/3 text-charcoal/80">12-month manufacturer's warranty against defects</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
