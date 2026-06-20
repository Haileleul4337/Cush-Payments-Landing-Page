"use client";

import { motion } from "framer-motion";
import {
  BadgeDollarSign,
  BrainCircuit,
  Landmark,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";

const features = [
  {
    title: "Lower Fees",
    description:
      "Transparent pricing designed to help families keep more of what they send.",
    icon: BadgeDollarSign,
  },
  {
    title: "Instant Transfers",
    description:
      "Send funds in seconds instead of waiting days for settlement.",
    icon: Zap,
  },
  {
    title: "Built For Africa",
    description:
      "Designed specifically for African bank accounts and mobile wallets.",
    icon: Smartphone,
  },
  {
    title: "PAPSS Enabled",
    description:
      "Reduce dependency on expensive cross-border settlement networks.",
    icon: Landmark,
  },
  {
    title: "AI Fraud Detection",
    description:
      "Advanced monitoring helps keep transactions safe and compliant.",
    icon: BrainCircuit,
  },
  {
    title: "Regulated Trust",
    description:
      "Built around compliance, identity verification, and safer transfers.",
    icon: ShieldCheck,
  },
];

export default function WhyCush() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D97706]">
            Why Cush Payments
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
            Built for the next era of African remittances.
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-600">
            Cush combines transparent pricing, secure infrastructure, and
            Africa-first payment rails into one modern experience.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass group rounded-[2rem] p-6 shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white transition group-hover:rotate-6">
                  <Icon size={25} />
                </div>

                <h3 className="text-xl font-black">{feature.title}</h3>

                <p className="mt-3 leading-7 text-neutral-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}