
import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Reviews() {
  return (
    <section className="py-20 bg-white font-['Figtree']">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-charcoal/80">
            Join over 3,400 satisfied customers who've discovered the EDGE experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="reviews-snapshot bg-white rounded-xl shadow-sm border border-gray-100 max-w-4xl mx-auto p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="text-4xl font-bold text-charcoal mb-2">4.6</div>
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-5 h-5 ${star <= 4 ? "text-yellow" : "text-yellow opacity-70"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-sm text-charcoal/60 mb-4">Based on 33 reviews</div>
                <div className="text-charcoal font-medium">91% recommend this product</div>
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <div className="space-y-2">
                {[
                  { stars: 5, percentage: 72, count: 24 },
                  { stars: 4, percentage: 18, count: 6 },
                  { stars: 3, percentage: 6, count: 2 },
                  { stars: 2, percentage: 0, count: 0 },
                  { stars: 1, percentage: 3, count: 1 }
                ].map((rating) => (
                  <div key={rating.stars} className="flex items-center gap-2">
                    <div className="w-8 text-sm font-medium">{rating.stars}</div>
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-charcoal rounded-full"
                        style={{ width: `${rating.percentage}%` }}
                      ></div>
                    </div>
                    <div className="w-8 text-sm text-right text-charcoal/60">{rating.count}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="aspect-square rounded-md overflow-hidden">
                    <img 
                      src={`https://d3g5hqndtiniji.cloudfront.net/images/8aad07d8-99d9-48ed-bff3-477a000140df/placeholder-${i+1}.jpg`} 
                      alt={`Customer review ${i+1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="#reviews" 
              className="inline-flex items-center text-sm font-medium text-blue hover:text-blue/80"
            >
              See all reviews
              <svg 
                className="ml-1 w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
