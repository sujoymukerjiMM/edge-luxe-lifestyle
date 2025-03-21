
import React from "react";
import { motion } from "framer-motion";

export default function AsSeenIn() {
  // Define placeholder SVG logos with text - using darker colors and larger text
  const logoSvgs = [
    `<svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><text x="10" y="25" font-family="Arial, sans-serif" font-size="18" fill="#222222" font-style="italic" font-weight="bold">Femina</text></svg>`,
    `<svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><text x="10" y="25" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#222222">LBB</text></svg>`,
    `<svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><text x="10" y="25" font-family="Arial, sans-serif" font-size="20" fill="#222222" font-style="italic" font-weight="bold" letter-spacing="2">Vogue</text></svg>`,
    `<svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><text x="10" y="25" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#222222">Forbes</text></svg>`,
    `<svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><text x="10" y="25" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#222222">GQ</text></svg>`,
    `<svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><text x="10" y="25" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#222222">Times</text></svg>`,
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="as-seen-in my-10"
    >
      <div className="relative overflow-hidden bg-white border border-slate-200 py-8 rounded-lg shadow-sm">
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1 text-xs font-medium tracking-widest text-charcoal uppercase border border-slate-300 rounded-md bg-slate-50">
            A S&nbsp;&nbsp;S E E N&nbsp;&nbsp;I N :
          </span>
        </div>
        
        {/* Scrolling logo container with improved visibility */}
        <div className="relative flex overflow-x-hidden">
          <div className="flex items-center py-3 animate-scroll whitespace-nowrap">
            {logoSvgs.map((svg, index) => (
              <div key={`logo-1-${index}`} className="mx-6 md:mx-10 h-10 md:h-12">
                <div dangerouslySetInnerHTML={{ __html: svg }} />
              </div>
            ))}
          </div>
          
          {/* Duplicate set of logos for seamless scrolling */}
          <div className="flex items-center py-3 animate-scroll whitespace-nowrap" aria-hidden="true">
            {logoSvgs.map((svg, index) => (
              <div key={`logo-2-${index}`} className="mx-6 md:mx-10 h-10 md:h-12">
                <div dangerouslySetInnerHTML={{ __html: svg }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
