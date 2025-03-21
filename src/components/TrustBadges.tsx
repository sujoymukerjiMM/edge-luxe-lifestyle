
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Lock } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      icon: <Lock className="h-5 w-5" />,
      text: "Secure Payment",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      text: "Privacy Guaranteed",
    },
    {
      icon: <Truck className="h-5 w-5" />,
      text: "Discreet Shipping",
    },
  ];

  return (
    <div className="mt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex flex-row items-center justify-center gap-8 md:gap-16 flex-wrap"
      >
        {badges.map((badge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-10 h-10 bg-yellow/10 rounded-full flex items-center justify-center mb-2">
              {badge.icon}
            </div>
            <span className="text-sm font-medium">{badge.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
