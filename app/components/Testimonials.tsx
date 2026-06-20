"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Finally, a money transfer experience that feels simple and transparent.",
    route: "London → Ghana",
    image: "/images/2.jpg",
  },
  {
    quote: "The calculator makes it easy to see what my family receives before I send.",
    route: "Washington DC → Ethiopia",
    image: "/images/4.jpg",
  },
  {
    quote: "Fast, clean, and built for people sending money back home.",
    route: "Manchester → Nigeria",
    image: "/images/8.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D97706]">
          Social proof
        </p>

        <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
          Trusted by people sending money home.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.route}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass overflow-hidden rounded-[2.5rem] shadow-2xl"
          >
            <div className="relative h-64">
              <Image
                src={item.image}
                alt={item.route}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <div className="mb-4 flex gap-1 text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-xl font-black leading-8">
                “{item.quote}”
              </p>

              <p className="mt-5 text-sm font-bold text-neutral-500">
                {item.route}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}