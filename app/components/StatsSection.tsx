"use client";

import { motion } from "framer-motion";
import { Globe2, Gauge, Percent, TrendingUp } from "lucide-react";

const stats = [
  {
    value: "$104B+",
    label: "Annual African remittance inflows",
    icon: TrendingUp,
  },
  {
    value: "20+",
    label: "Target African countries",
    icon: Globe2,
  },
  {
    value: "10 sec",
    label: "Target transfer speed",
    icon: Gauge,
  },
  {
    value: "1.8%",
    label: "Transparent standard fee",
    icon: Percent,
  },
];

export default function StatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="glass-dark relative overflow-hidden rounded-[2.8rem] p-8 text-white shadow-2xl md:p-12">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#F59E0B]/30 blur-3xl" />
        <div className="absolute -bottom-24 left-20 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />

        <div className="relative">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F59E0B]">
            Market opportunity
          </p>

          <h2 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            A massive market. A simpler way to move money.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F59E0B] text-black">
                    <Icon size={26} />
                  </div>

                  <p className="text-4xl font-black text-[#F59E0B]">
                    {stat.value}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}