
import React from "react";
import { motion } from "framer-motion";
import { Vibrate, Droplets, Shield, Sliders } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

export default function Features() {
  const features = [
    {
      icon: <Vibrate className="h-6 w-6 text-yellow" />,
      title: "Dual-Technology Innovation",
      description:
        "Premium soft-touch material with integrated vibration technology offering a uniquely comfortable experience.",
      image: "https://images.unsplash.com/photo-1617791160588-241658c0f566?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      icon: <Droplets className="h-6 w-6 text-yellow" />,
      title: "Hygienic Design",
      description:
        "Open-ended structure with water-resistant materials allows for thorough cleaning and proper maintenance.",
      image: "https://images.unsplash.com/photo-1620842296079-dcbff963fa31?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      icon: <Shield className="h-6 w-6 text-yellow" />,
      title: "Privacy-Focused Design",
      description:
        "Protective case and compact form factor (just 15.3cm × 6.8cm) ensures discretion and convenient storage.",
      image: "https://images.unsplash.com/photo-1631558996800-a39e133195de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      icon: <Sliders className="h-6 w-6 text-yellow" />,
      title: "Customizable Experience",
      description:
        "10 precisely engineered intensity settings from gentle (27Hz) to powerful (82Hz) for a personalized experience.",
      image: "https://images.unsplash.com/photo-1635311914102-b7d1c0db6d8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
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

        {/* Features Grid for Desktop */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8"
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

        {/* Features Carousel for All Screens */}
        <div className="mt-8 max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/2">
                  <div className="relative h-[400px] rounded-xl overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                      <div className="mb-4 bg-yellow/20 w-12 h-12 rounded-full flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-white/80">{feature.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>

        {/* Additional Product Specs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mt-20 bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="spec-item">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-yellow/10 rounded-full flex items-center justify-center mr-3">
                  <Vibrate className="h-4 w-4 text-yellow" />
                </div>
                <h4 className="font-medium">Vibration Range</h4>
              </div>
              <p className="text-sm text-charcoal/70 ml-11">27Hz (gentle) to 82Hz (intense) with 10 unique patterns</p>
            </div>
            
            <div className="spec-item">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-yellow/10 rounded-full flex items-center justify-center mr-3">
                  <Shield className="h-4 w-4 text-yellow" />
                </div>
                <h4 className="font-medium">Material</h4>
              </div>
              <p className="text-sm text-charcoal/70 ml-11">Medical-grade silicone with soft-touch texture</p>
            </div>
            
            <div className="spec-item">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-yellow/10 rounded-full flex items-center justify-center mr-3">
                  <Droplets className="h-4 w-4 text-yellow" />
                </div>
                <h4 className="font-medium">Water Resistance</h4>
              </div>
              <p className="text-sm text-charcoal/70 ml-11">IPX7 rated for easy cleaning and maintenance</p>
            </div>
            
            <div className="spec-item">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-yellow/10 rounded-full flex items-center justify-center mr-3">
                  <Sliders className="h-4 w-4 text-yellow" />
                </div>
                <h4 className="font-medium">Dimensions</h4>
              </div>
              <p className="text-sm text-charcoal/70 ml-11">15.3cm × 6.8cm, compact and discreet design</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
