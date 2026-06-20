"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  DatabaseZap,
  Fingerprint,
  Landmark,
  LockKeyhole,
  Network,
} from "lucide-react";

const pillars = [
  {
    title: "Modern payment rails",
    text: "Built for blockchain-enabled routing, PAPSS settlement, and local-currency transfers.",
    icon: Network,
  },
  {
    title: "Compliance-first",
    text: "Designed around KYC, AML, transaction monitoring, and regulated payment flows.",
    icon: Fingerprint,
  },
  {
    title: "Bank-grade security",
    text: "Encrypted infrastructure, AI fraud detection, and safer transaction processing.",
    icon: LockKeyhole,
  },
];

export default function InfrastructureSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="glass-dark relative overflow-hidden rounded-[3rem] p-8 text-white shadow-2xl md:p-12">
        <div className="absolute right-[-6rem] top-[-6rem] h-80 w-80 rounded-full bg-[#F59E0B]/30 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-[-4rem] h-80 w-80 rounded-full bg-teal-400/20 blur-3xl" />

        <div className="relative grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F59E0B]">
              Infrastructure
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
              Built on modern rails. Powered by trust.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/65">
              Cush Payments is designed to combine fast settlement, transparent
              pricing, compliance, and Africa-first payment access.
            </p>
          </div>

          <div className="grid gap-5">
            {pillars.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl"
                >
                  <div className="flex gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F59E0B] text-black">
                      <Icon size={26} />
                    </div>

                    <div>
                      <h3 className="text-xl font-black">{item.title}</h3>
                      <p className="mt-2 leading-7 text-white/60">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="relative mt-12 grid gap-5 md:grid-cols-3">
          <TechBadge icon={<Landmark />} label="PAPSS-ready" />
          <TechBadge icon={<BrainCircuit />} label="AI fraud detection" />
          <TechBadge icon={<DatabaseZap />} label="Real-time tracking" />
        </div>
      </div>
    </section>
  );
}

function TechBadge({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-[2rem] border border-white/10 bg-white/10 p-5 backdrop-blur-xl"
    >
      <div className="mb-4 text-[#F59E0B]">{icon}</div>
      <p className="text-lg font-black">{label}</p>
    </motion.div>
  );
}