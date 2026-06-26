"use client";

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#161E2E] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Top */}
        <div className="grid gap-14 lg:grid-cols-4">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="h-10 w-12 rounded bg-[#00B871]" />

            <p className="mt-7 max-w-xs text-[18px] leading-9 text-white/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Accumsan, pellentesque aenean sed vel non suspendisse.
            </p>
          </motion.div>

          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .1 }}
          >
            <h3 className="text-2xl font-semibold">
              Menu
            </h3>

            <ul className="mt-8 space-y-5">

              <li>
                <a
                  href="#"
                  className="text-lg text-white/80 transition hover:text-[#00B871]"
                >
                  Who we are
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-lg text-white/80 transition hover:text-[#00B871]"
                >
                  What we do
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-lg text-white/80 transition hover:text-[#00B871]"
                >
                  Reviews
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-lg text-white/80 transition hover:text-[#00B871]"
                >
                  Blog
                </a>
              </li>

            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .2 }}
          >

            <h3 className="text-2xl font-semibold">
              Contact
            </h3>

            <div className="mt-8 space-y-5">

              <a
                href="tel:+1875401027"
                className="block text-3xl font-semibold text-[#00B871]"
              >
                +1 (875) 40 1027
              </a>

              <a
                href="mailto:Support@company.com"
                className="block text-2xl font-semibold text-[#00B871]"
              >
                Support@company.com
              </a>

            </div>

          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .3 }}
            className="flex items-start justify-start gap-8 lg:justify-end"
          >

            <a href="#">
              <FaInstagram
                size={38}
                className="text-[#00B871] transition duration-300 hover:scale-110"
              />
            </a>

            <a href="#">
              <FaFacebookF
                size={34}
                className="text-[#00B871] transition duration-300 hover:scale-110"
              />
            </a>

            <a href="#">
              <FaTwitter
                size={34}
                className="text-[#00B871] transition duration-300 hover:scale-110"
              />
            </a>

          </motion.div>

        </div>

        {/* Divider */}

        <div className="my-16 h-px bg-[#00B871]/70" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 text-center text-lg text-white/70 lg:flex-row">

          <p>
            Copyright 2021 Greendy All Right Reserve
          </p>

          <div className="flex gap-10">

            <a
              href="#"
              className="transition hover:text-[#00B871]"
            >
              Term of use
            </a>

            <a
              href="#"
              className="transition hover:text-[#00B871]"
            >
              Privacy Policy
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;