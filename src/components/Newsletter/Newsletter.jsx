"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    console.log("Subscribed:", email);

    // API call here

    setEmail("");
  };

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold text-[#161E2E] lg:text-5xl">
            Stay update
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-500">
            Subscribe to our newsletter to receive our best daily, week and
            month offer.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="mx-auto mt-14 max-w-3xl"
        >
          <div className="flex flex-col rounded-2xl bg-white p-3 shadow-[0_15px_45px_rgba(0,184,113,0.08)] md:flex-row md:items-center">

            <input
              type="email"
              placeholder="email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-16 flex-1 rounded-xl border-none bg-transparent px-6 text-lg text-[#161E2E] placeholder:text-gray-400 focus:outline-none"
            />

            <motion.button
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              type="submit"
              className="mt-3 h-16 rounded-xl bg-[#00B871] px-12 text-xl font-semibold text-white transition-all md:mt-0"
            >
              Subscribe
            </motion.button>

          </div>

          {error && (
            <p className="mt-4 text-center text-sm text-red-500">
              {error}
            </p>
          )}
        </motion.form>

      </div>
    </section>
  );
};

export default Newsletter;