"use client";

import { motion } from "framer-motion";
import { CircleUserRound, Send, Smartphone } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create your account",
    text: "Sign up and complete secure identity verification in minutes.",
    icon: CircleUserRound,
  },
  {
    number: "02",
    title: "Choose recipient",
    text: "Add a mobile wallet, bank account, or local recipient details.",
    icon: Send,
  },
  {
    number: "03",
    title: "Send and track",
    text: "View transparent fees, live rates, and delivery status in real time.",
    icon: Smartphone,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D97706]">
          How it works
        </p>

        <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
          A smoother way to send money home.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass relative overflow-hidden rounded-[2rem] p-7 shadow-xl"
            >
              <div className="absolute right-[-2rem] top-[-2rem] h-28 w-28 rounded-full bg-[#F59E0B]/20 blur-2xl" />

              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white">
                    <Icon size={28} />
                  </div>

                  <p className="text-5xl font-black text-black/10">
                    {step.number}
                  </p>
                </div>

                <h3 className="text-2xl font-black">{step.title}</h3>

                <p className="mt-3 leading-7 text-neutral-600">
                  {step.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}