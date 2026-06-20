"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Globe2,
  ShieldCheck,
  Sparkles,
  Star,
  Wallet,
  Zap,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-36">
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="glass absolute left-8 top-24 hidden rounded-2xl p-4 md:block"
      >
        <Wallet className="text-[#D97706]" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 16, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="glass absolute right-12 top-36 hidden rounded-2xl p-4 md:block"
      >
        <ShieldCheck className="text-teal-500" />
      </motion.div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="glass mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold">
            <Sparkles size={16} className="text-[#D97706]" />
            Built for the African diaspora
          </div>

          <h1 className="text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
            Send money to Africa in seconds, not days.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
            A premium remittance experience for diaspora senders — transparent
            pricing, instant settlement, and regulated transfers to mobile
            wallets and bank accounts.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#beta"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-4 font-bold text-white shadow-xl transition hover:scale-[1.02]"
            >
              Join waitlist <ArrowRight size={18} />
            </a>

            <a
              href="#calculator"
              className="glass rounded-full px-7 py-4 text-center font-bold transition hover:scale-[1.02]"
            >
              See calculator
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <TrustBadge icon={<Star size={17} />} title="4.9★" text="Beta rating target" />
            <TrustBadge icon={<Globe2 size={17} />} title="20+" text="Target countries" />
            <TrustBadge icon={<BadgeCheck size={17} />} title="1.8%" text="Transparent fee" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="glass relative overflow-hidden rounded-[2.8rem] p-4 shadow-2xl">
            <div className="relative h-[560px] overflow-hidden rounded-[2.2rem] bg-black">
              <Image
                src="/images/1.jpg"
                alt="Cush Payments diaspora transfer"
                fill
                priority
                className="object-cover opacity-85"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="glass absolute left-5 top-5 rounded-3xl p-5 shadow-2xl"
              >
                <p className="text-xs font-bold text-neutral-500">You send</p>
                <p className="text-3xl font-black">£100</p>
                <p className="mt-1 text-xs font-semibold text-neutral-500">
                  United Kingdom
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 4.5 }}
                className="absolute bottom-5 left-5 right-5 rounded-[2rem] bg-black/75 p-5 text-white backdrop-blur-xl"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-white/50">Recipient gets</p>
                    <p className="mt-1 text-4xl font-black text-[#F59E0B]">
                      1,463 GHS
                    </p>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F59E0B] text-black">
                    <Zap size={26} />
                  </div>
                </div>

                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <MiniLine text="Delivered in seconds" />
                  <MiniLine text="Secure transfer" />
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            animate={{ x: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="glass absolute -right-4 top-1/2 hidden rounded-3xl p-5 shadow-xl md:block"
          >
            <p className="text-xs font-bold text-neutral-500">Beta users</p>
            <p className="text-3xl font-black">20,000+</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBadge({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="glass rounded-2xl p-4">
      <div className="mb-2 text-[#D97706]">{icon}</div>
      <p className="font-black">{title}</p>
      <p className="text-xs font-semibold text-neutral-500">{text}</p>
    </div>
  );
}

function MiniLine({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold">
      <BadgeCheck size={14} className="text-teal-400" />
      {text}
    </div>
  );
}