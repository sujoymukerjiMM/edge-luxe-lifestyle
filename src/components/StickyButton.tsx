
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      
      // Show the button after scrolling 300px
      if (scrollPosition > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
      
      // Hide when near the preorder section at the bottom
      if (documentHeight - scrollPosition - windowHeight < 200) {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 left-0 right-0 z-50 flex justify-center pointer-events-none"
        >
          <div className="pointer-events-auto bg-white/80 backdrop-blur-md px-6 py-4 rounded-full shadow-lg border border-gray-100">
            <a href="#preorder" className="btn-primary">
              Pre-Order EDGE Now →
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
