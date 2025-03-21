
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/lovable-uploads/c0ba7218-a39e-4c4e-b11c-e4f605bf92aa.png"
            alt="MyMuse Logo"
            className="h-10 md:h-12"
            loading="eager"
          />
        </div>
        <a
          href="#preorder"
          className="btn-primary text-sm md:text-base animate-fade-in"
        >
          Reserve Now
        </a>
      </div>
    </header>
  );
}
