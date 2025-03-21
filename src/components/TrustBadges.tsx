
import React from "react";
import { motion } from "framer-motion";
import { LockIcon, ShieldCheck, Truck } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      icon: <LockIcon className="h-5 w-5" />,
      label: "Secure Payment"
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      label: "Privacy Guaranteed"
    },
    {
      icon: <Truck className="h-5 w-5" />,
      label: "Discreet Shipping"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="mt-12"
    >
      <div className="flex flex-row flex-wrap justify-center items-center gap-4 md:gap-10">
        {badges.map((badge, index) => (
          <div key={index} className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-yellow/10 flex items-center justify-center mr-3">
              <span className="text-yellow">{badge.icon}</span>
            </div>
            <span className="text-sm">{badge.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
