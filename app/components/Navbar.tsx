"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Calculator", href: "#calculator" },
  { label: "How it works", href: "#how" },
  { label: "Security", href: "#security" },
  { label: "Coverage", href: "#coverage" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3 shadow-xl">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-black text-[#F59E0B]">
            C
          </div>

          <span className="text-lg font-black tracking-tight">
            Cush Payments
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-bold text-neutral-700 transition hover:text-black"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#D97706] transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <a
          href="#beta"
          className="hidden items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-bold text-white transition hover:scale-105 md:inline-flex"
        >
          Join beta <ArrowRight size={16} />
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            className="glass mx-auto mt-3 max-w-7xl rounded-[2rem] p-5 shadow-xl md:hidden"
          >
            <div className="grid gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 font-bold hover:bg-white"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#beta"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-black px-5 py-3 text-center font-bold text-white"
              >
                Join beta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}