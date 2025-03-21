
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Technology from "@/components/Technology";
import LifestyleSection from "@/components/LifestyleSection";
import Reviews from "@/components/Reviews";
import PreOrder from "@/components/PreOrder";
import StickyButton from "@/components/StickyButton";

const Index = () => {
  // Add smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href?.startsWith('#')) return;
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-offwhite text-charcoal overflow-x-hidden">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <Features />
          <Testimonials />
          <Reviews />
          <Technology />
          <LifestyleSection />
          <PreOrder />
        </motion.main>
        <StickyButton />
      </div>
    </AnimatePresence>
  );
};

export default Index;
