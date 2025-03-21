
import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "The ergonomic design and adjustable settings make this far more comfortable than anything I've tried before. The soft material combined with the vibration options creates an experience that's genuinely enjoyable for relaxation.",
      author: "Vihaan K., Mumbai, Verified Purchase (March 2023)",
    },
    {
      rating: 5,
      text: "The discreet packaging was impressive - arrived in a plain box with no identifying information. The device itself has a sleek, modern design that looks like any other wellness gadget. Perfect for travel and storage without drawing attention.",
      author: "Dev M., Bangalore, Verified Purchase (January 2023)",
    },
    {
      rating: 4.5,
      text: "I've tried both previous MyMuse products, and this one combines the best features of both. The texture is comfortable while the vibration options provide a range of intensity levels. Battery life is excellent at 2.5 hours per charge.",
      author: "Kunal S., Delhi, Verified Purchase (April 2023)",
    },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`star-${i}`}
          className="w-5 h-5 text-yellow fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg
          key="half-star"
          className="w-5 h-5 text-yellow fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
          <path
            fill="#F8F6F3"
            d="M12 17.27V5.5l1.78 3.89L18 9.95l-4.44 3.86 1.06 4.79L12 17.27z"
          />
        </svg>
      );
    }

    return stars;
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            India's Top-Rated Self-Care Device for Men — Now Back by Popular Demand
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              className="testimonial-card flex flex-col h-full"
            >
              <div className="flex items-center mb-3">
                {renderStars(testimonial.rating)}
              </div>
              <p className="italic text-charcoal/80 mb-4 flex-grow">
                "{testimonial.text}"
              </p>
              <p className="text-sm font-medium">– {testimonial.author}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center py-8 px-4 bg-white rounded-xl shadow-sm border border-gray-100 max-w-2xl mx-auto"
        >
          <p className="text-xl font-semibold mb-4">
            ⭐ Sold out twice since launch. Exactly 5,764 people on the current waitlist.
          </p>
          <a href="#preorder" className="btn-secondary shine-effect">
            Join the Waitlist →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
