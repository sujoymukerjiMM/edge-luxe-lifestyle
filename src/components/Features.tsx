
import React from "react";
import { motion } from "framer-motion";
import { Vibrate, Droplets, Shield, Sliders } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Vibrate className="h-6 w-6 text-yellow" />,
      title: "Dual-Technology Innovation",
      description:
        "Premium soft-touch material with integrated vibration technology offering a uniquely comfortable experience.",
    },
    {
      icon: <Droplets className="h-6 w-6 text-yellow" />,
      title: "Hygienic Design",
      description:
        "Open-ended structure with water-resistant materials allows for thorough cleaning and proper maintenance.",
    },
    {
      icon: <Shield className="h-6 w-6 text-yellow" />,
      title: "Privacy-Focused Design",
      description:
        "Protective case and compact form factor (just 15.3cm × 6.8cm) ensures discretion and convenient storage.",
    },
    {
      icon: <Sliders className="h-6 w-6 text-yellow" />,
      title: "Customizable Experience",
      description:
        "10 precisely engineered intensity settings from gentle (27Hz) to powerful (82Hz) for a personalized experience.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
            Precision Engineering Meets Personal Wellness
          </h2>
          <p className="text-charcoal/80 text-lg">
            EDGE combines a soft, premium silicone exterior with 10 carefully
            calibrated vibration patterns. The 360° wraparound design and
            easy-maintenance features make this the most advanced addition to
            your self-care collection.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="feature-card"
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-charcoal/70">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
