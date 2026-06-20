"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe2, Landmark, Smartphone, Zap } from "lucide-react";

const countries = ["Ghana", "Nigeria", "Kenya", "Ethiopia", "South Africa"];

const features = [
  ["10 sec", "Target delivery speed", Zap],
  ["20+", "Target African countries", Globe2],
  ["Wallets", "Mobile money ready", Smartphone],
  ["PAPSS", "Local-currency settlement", Landmark],
];

const markers = [
  { label: "Ghana", top: "47%", left: "43%" },
  { label: "Nigeria", top: "43%", left: "48%" },
  { label: "Ethiopia", top: "47%", left: "65%" },
  { label: "Kenya", top: "58%", left: "66%" },
];

export default function AfricaMapSection() {
  return (
    <section
      id="coverage"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="glass grid gap-8 overflow-hidden rounded-[3rem] p-8 shadow-2xl md:grid-cols-2 md:p-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D97706]">
            Africa coverage
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
            One platform for African corridors.
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-600">
            Cush Payments is designed for diaspora transfers into key African
            markets, supporting mobile wallets, bank accounts, and local
            settlement infrastructure.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {countries.map((country) => (
              <span
                key={country}
                className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white"
              >
                {country}
              </span>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2.5rem] bg-black p-6 text-white">
          <div className="absolute right-[-4rem] top-[-4rem] h-56 w-56 rounded-full bg-[#F59E0B]/30 blur-3xl" />
          <div className="absolute bottom-[-4rem] left-[-4rem] h-56 w-56 rounded-full bg-teal-400/20 blur-3xl" />

          <div className="relative flex min-h-[420px] items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="relative h-[360px] w-full"
            >
              <Image
                src="/africa-map.svg"
                alt="Africa payment coverage map"
                fill
                className="object-contain opacity-90"
              />

              {markers.map((marker) => (
                <MapMarker key={marker.label} {...marker} />
              ))}
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute left-4 top-4 rounded-2xl bg-white/10 p-4 backdrop-blur-xl"
            >
              <p className="text-xs text-white/50">UK → Ghana</p>
              <p className="text-xl font-black text-[#F59E0B]">Active</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5 }}
              className="absolute bottom-4 right-4 rounded-2xl bg-white/10 p-4 backdrop-blur-xl"
            >
              <p className="text-xs text-white/50">US → Nigeria</p>
              <p className="text-xl font-black text-[#F59E0B]">Coming soon</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {features.map(([value, label, Icon]) => (
          <motion.div
            key={value as string}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass rounded-3xl p-5 shadow-xl"
          >
            <Icon className="text-[#D97706]" size={24} />
            <p className="mt-4 text-3xl font-black">{value as string}</p>
            <p className="mt-2 text-sm text-neutral-600">{label as string}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function MapMarker({
  label,
  top,
  left,
}: {
  label: string;
  top: string;
  left: string;
}) {
  return (
    <motion.div
      style={{ top, left }}
      animate={{ scale: [1, 1.25, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute"
    >
      <div className="relative">
        <span className="absolute inline-flex h-5 w-5 animate-ping rounded-full bg-[#F59E0B] opacity-75" />
        <span className="relative inline-flex h-5 w-5 rounded-full bg-[#F59E0B]" />

        <div className="absolute left-6 top-[-6px] whitespace-nowrap rounded-full bg-white px-3 py-1 text-xs font-bold text-black shadow-xl">
          {label}
        </div>
      </div>
    </motion.div>
  );
}