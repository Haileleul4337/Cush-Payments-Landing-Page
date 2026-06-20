"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Landmark,
} from "lucide-react";

const team = [
  {
    name: "Matthew Ekow Folson",
    role: "Founder & CEO",
    experience: "25+ Years",
    description:
      "Banking, payments, fintech delivery, AML compliance, and regulated financial systems leadership.",
    expertise: ["Payments", "Banking", "Compliance"],
    linkedin: "https://www.linkedin.com/in/matthew-folson-8632b51",
  },
  {
    name: "Jose Luis Caldeira",
    role: "CTO",
    experience: "20+ Years",
    description:
      "Banking technology, digital architecture, big data, stablecoins, and distributed financial systems.",
    expertise: ["Architecture", "Fintech", "Data"],
    linkedin: "https://www.linkedin.com/in/luiscaldeira/",
  },
];

export default function TeamSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D97706]">
          Leadership Team
        </p>

        <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
          Built by fintech leaders.
        </h2>

        <p className="mt-5 text-lg leading-8 text-neutral-600">
          Deep expertise across payments, banking infrastructure, compliance,
          and financial technology.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {team.map((person, index) => (
          <motion.div
            key={person.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -10 }}
            className="glass relative overflow-hidden rounded-[2.5rem] p-8 shadow-2xl"
          >
            <div className="absolute right-[-3rem] top-[-3rem] h-32 w-32 rounded-full bg-[#F59E0B]/20 blur-3xl" />

            <div className="relative">
              <div className="flex items-start justify-between">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-black text-white">
                  {index === 0 ? (
                    <Landmark size={36} />
                  ) : (
                    <Building2 size={36} />
                  )}
                </div>

                <span className="rounded-full bg-[#F59E0B]/15 px-4 py-2 text-sm font-bold text-[#D97706]">
                  {person.experience}
                </span>
              </div>

              <h3 className="mt-6 text-3xl font-black">
                {person.name}
              </h3>

              <p className="mt-2 text-lg font-semibold text-[#D97706]">
                {person.role}
              </p>

              <p className="mt-5 leading-7 text-neutral-600">
                {person.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {person.expertise.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-semibold text-neutral-600">
                  <BadgeCheck size={16} className="text-green-500" />
                  Verified Industry Experience
                </div>

                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 font-semibold text-white transition hover:scale-105"
                >
                  LinkedIn
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}