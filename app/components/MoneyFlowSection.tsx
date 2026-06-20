"use client";

import { motion } from "framer-motion";
import { ArrowRight, Banknote, Smartphone, Wallet } from "lucide-react";

export default function MoneyFlowSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="glass overflow-hidden rounded-[2.5rem] p-8 shadow-2xl md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D97706]">
          Money flow
        </p>

        <h2 className="mt-3 max-w-3xl text-4xl font-black md:text-6xl">
          From diaspora sender to African recipient — beautifully simple.
        </h2>

        <div className="mt-12 grid items-center gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          <FlowCard icon={<Wallet />} title="Sender" text="UK, US, or EU diaspora" />

          <MovingArrow />

          <FlowCard icon={<Banknote />} title="Cush" text="Transparent FX + smart routing" dark />

          <MovingArrow />

          <FlowCard icon={<Smartphone />} title="Recipient" text="Mobile wallet or bank account" />
        </div>
      </div>
    </section>
  );
}

function FlowCard({
  icon,
  title,
  text,
  dark = false,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className={`rounded-[2rem] p-6 shadow-xl ${
        dark ? "bg-black text-white" : "bg-white"
      }`}
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F59E0B]/15 text-[#D97706]">
        {icon}
      </div>

      <h3 className="text-2xl font-black">{title}</h3>
      <p className={`mt-3 ${dark ? "text-white/65" : "text-neutral-600"}`}>
        {text}
      </p>
    </motion.div>
  );
}

function MovingArrow() {
  return (
    <motion.div
      animate={{ x: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="hidden text-[#D97706] md:block"
    >
      <ArrowRight size={32} />
    </motion.div>
  );
}