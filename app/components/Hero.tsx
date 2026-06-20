"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-20">
      <div className="absolute left-1/2 top-20 h-72 w-72 rounded-full bg-[#F59E0B]/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D97706]">
            Cush Payments
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Send money to Africa in seconds, not days.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
            Transparent pricing, instant settlement, and regulated transfers
            built for the African diaspora.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#beta"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 font-semibold text-white"
            >
              Join waitlist <ArrowRight size={18} />
            </a>

            <a
              href="#calculator"
              className="rounded-full border border-black px-6 py-3 text-center font-semibold"
            >
              See calculator
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium">
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              🇬🇧 UK → 🇬🇭 Ghana
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              🇺🇸 USA → 🇳🇬 Nigeria
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              🇪🇺 EU → Africa
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="rounded-[2rem] bg-white p-6 shadow-2xl">
            <div className="rounded-[1.5rem] bg-[#F8F3EA] p-5">
              <p className="text-sm text-neutral-500">You send</p>
              <p className="mt-1 text-5xl font-black">£100</p>
            </div>

            <div className="my-5 flex justify-center">
              <div className="rounded-full bg-black p-3 text-white">
                <ArrowRight size={22} />
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-black p-5 text-white">
              <p className="text-sm text-white/60">Recipient gets</p>
              <p className="mt-1 text-5xl font-black text-[#F59E0B]">
                1,463 GHS
              </p>
            </div>

            <div className="mt-5 grid gap-3">
              <div className="flex items-center gap-3 rounded-2xl bg-[#F8F3EA] p-4">
                <Zap size={20} className="text-[#D97706]" />
                <p className="font-semibold">Delivered in seconds</p>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-[#F8F3EA] p-4">
                <ShieldCheck size={20} className="text-[#D97706]" />
                <p className="font-semibold">Secure and regulated</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}