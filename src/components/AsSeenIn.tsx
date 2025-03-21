
import React from "react";
import { motion } from "framer-motion";

export default function AsSeenIn() {
  // Define placeholder SVG logos with text
  const logoSvgs = [
    // Simplified brand SVG placeholders with text
    `<svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><text x="10" y="25" font-family="Arial, sans-serif" font-size="16" fill="#333333" font-style="italic">Femina</text></svg>`,
    `<svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><text x="10" y="25" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#333333">LBB</text></svg>`,
    `<svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><text x="10" y="25" font-family="Arial, sans-serif" font-size="18" fill="#333333" font-style="italic" letter-spacing="2">Vogue</text></svg>`,
    `<svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><text x="10" y="25" font-family="Arial, sans-serif" font-size="16" fill="#333333">Forbes</text></svg>`,
    `<svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><text x="10" y="25" font-family="Arial, sans-serif" font-size="16" fill="#333333">GQ</text></svg>`,
    `<svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><text x="10" y="25" font-family="Arial, sans-serif" font-size="16" fill="#333333">Times</text></svg>`,
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="as-seen-in my-10"
    >
      <div className="relative overflow-hidden bg-slate-100 py-6 rounded-lg">
        <div className="text-center mb-3">
          <span className="inline-block px-4 py-1 text-xs font-medium tracking-widest text-slate-800 uppercase border border-slate-300 rounded">
            A S&nbsp;&nbsp;S E E N&nbsp;&nbsp;I N :
          </span>
        </div>
        
        {/* Scrolling logo container */}
        <div className="relative flex overflow-x-hidden">
          <div className="flex items-center py-2 animate-scroll whitespace-nowrap">
            {logoSvgs.map((svg, index) => (
              <div key={`logo-1-${index}`} className="mx-4 md:mx-8 h-8 md:h-10">
                <div dangerouslySetInnerHTML={{ __html: svg }} />
              </div>
            ))}
          </div>
          
          {/* Duplicate set of logos for seamless scrolling */}
          <div className="flex items-center py-2 animate-scroll whitespace-nowrap" aria-hidden="true">
            {logoSvgs.map((svg, index) => (
              <div key={`logo-2-${index}`} className="mx-4 md:mx-8 h-8 md:h-10">
                <div dangerouslySetInnerHTML={{ __html: svg }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
