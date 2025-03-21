
import React from "react";
import { motion } from "framer-motion";

export default function AsSeenIn() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="as-seen-in my-10"
    >
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-4 rounded-lg">
        <div className="text-center mb-2">
          <span className="inline-block px-4 py-1 text-xs font-medium tracking-widest text-white uppercase border border-white/20 rounded">
            A S&nbsp;&nbsp;S E E N&nbsp;&nbsp;I N :
          </span>
        </div>
        <div className="flex justify-between items-center px-4 overflow-hidden">
          <img 
            src="/lovable-uploads/50f210b9-73f1-4fb4-8516-f24c76afbc08.png" 
            alt="As Seen In: Femina, LBB, Vogue, Forbes" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
}
