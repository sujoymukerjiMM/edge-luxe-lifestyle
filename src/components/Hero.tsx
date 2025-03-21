
import React from "react";
import { AnimatedGradient } from "./ui/animated-gradient";
import TrustBadges from "./TrustBadges";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

export default function Hero() {
  const productImages = ["https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3", "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3", "https://images.unsplash.com/photo-1631558996800-a39e133195de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3", "https://images.unsplash.com/photo-1630410672123-9388623ab661?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3", "https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3", "https://images.unsplash.com/photo-1609942072337-c3370e820998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3", "https://images.unsplash.com/photo-1635311914102-b7d1c0db6d8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3", "https://images.unsplash.com/photo-1617778368431-f97343a411ab?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"];
  const productGifs = ["https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3", "https://images.unsplash.com/photo-1631643690103-aaa1ad5f0cc9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3", "https://images.unsplash.com/photo-1613483187636-c2024013d54a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"];
  
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
            This bestseller has sold out twice—and it's flying off the shelves again. Secure yours before it's gone! 🚀
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.7, delay: 0.4 }} 
          className="mb-10"
        >
          <div className="product-carousel relative max-w-2xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {productImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative overflow-hidden rounded-xl shadow-xl">
                      <img 
                        src={image} 
                        alt={`EDGE Personal Wellness Device - View ${index + 1}`} 
                        className="w-full h-auto object-cover aspect-[4/3]" 
                        loading={index === 0 ? "eager" : "lazy"} 
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
            </Carousel>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.5 }} 
          className="mb-12"
        >
          <h2 className="text-2xl font-medium mb-6">Experience the Innovation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {productGifs.map((gif, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-md">
                <img 
                  src={gif} 
                  alt={`EDGE in action - ${index + 1}`} 
                  className="w-full h-auto object-cover aspect-video" 
                />
                <div className="bg-white p-3 text-left">
                  <p className="font-medium text-sm">
                    {index === 0 ? "Multiple Vibration Patterns" : index === 1 ? "Premium Soft-Touch Material" : "Discreet & Portable Design"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.6 }} 
          className="mt-12"
        >
          <p className="font-medium text-lg mb-4">Sold out twice in 3 months. EDGE is now available for pre-orders for a limited time.</p>
          <p className="text-charcoal/80 mb-8 max-w-2xl mx-auto">
            A premium personal wellness device designed to enhance your self-care routine — with complete discretion.
          </p>

          <a href="#preorder" className="btn-primary px-8 py-4 text-base md:text-lg shine-effect">
            Pre-Order EDGE Now →
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
