"use client";

import { motion } from "framer-motion";
import QuoteIcon from "./QuoteIcon";

const TestimonialCard = ({ testimonial, active }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`
        relative overflow-hidden rounded-3xl bg-white
        p-9
        transition-all duration-500
        ${
          active
            ? "opacity-100 scale-100 shadow-[0_18px_45px_rgba(0,184,113,0.08)]"
            : "opacity-30 scale-95 shadow-none"
        }
      `}
    >
      {/* Quote */}
      <QuoteIcon />

      {/* Review */}
      <p className="relative z-10 mt-10 text-[20px] leading-[2] italic text-[#161E2E]">
        {testimonial.review}
      </p>

      {/* Client */}
      <div className="relative z-10 mt-10 flex items-center gap-4">
        {/* Avatar */}
        <div className="h-11 w-11 rounded-full bg-[#161E2E]" />

        {/* Name */}
        <div>
          <h4 className="text-[18px] font-semibold text-[#161E2E]">
            {testimonial.name}
          </h4>

          <p className="text-sm text-gray-400">
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;