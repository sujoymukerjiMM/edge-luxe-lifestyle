
import React from "react";
import { motion } from "framer-motion";

export default function AsSeenIn() {
  // Define the logos that will be shown in the "As Seen In" section
  const logos = [
    { name: "Femina", width: "100px" },
    { name: "LBB", width: "70px" },
    { name: "Vogue", width: "120px" },
    { name: "Forbes", width: "110px" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="as-seen-in my-10"
    >
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-6 rounded-lg">
        <div className="text-center mb-3">
          <span className="inline-block px-4 py-1 text-xs font-medium tracking-widest text-white uppercase border border-white/20 rounded">
            A S&nbsp;&nbsp;S E E N&nbsp;&nbsp;I N :
          </span>
        </div>
        <div className="flex justify-around items-center px-8 py-2">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="text-white font-serif font-bold"
              style={{
                fontSize: logo.name === "Vogue" ? "1.8rem" : "1.4rem",
                fontStyle: logo.name === "Vogue" ? "italic" : "normal",
                letterSpacing: logo.name === "Vogue" ? "0.15em" : "normal",
                fontWeight: logo.name === "LBB" ? "800" : "bold",
                opacity: 0.9
              }}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
