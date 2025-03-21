
import React from "react";
import { motion } from "framer-motion";

export default function PreOrder() {
  return (
    <section id="preorder" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Limited Release: Only 1,287 Units Available
          </h2>
          <p className="text-charcoal/80 text-lg mb-10">
            EDGE has consistently sold out with each release. This limited production run ensures the highest quality standards are maintained. Reserve yours now to avoid disappointment.
          </p>
          
          <div className="p-8 bg-gray-50 rounded-xl shadow-sm border border-gray-100 mb-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <a href="#" className="btn-primary text-lg px-8 py-4 shine-effect">
              Reserve EDGE Now →
            </a>
            <p className="text-sm text-charcoal/60 mt-4">
              Ships in plain packaging. No payment charged until product ships. Estimated delivery: 3-4 weeks.
            </p>
          </div>
          
          <p className="text-sm text-charcoal/60">
            By ordering, you agree to our <a href="#" className="underline hover:text-charcoal">Terms of Service</a> and <a href="#" className="underline hover:text-charcoal">Privacy Policy</a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
