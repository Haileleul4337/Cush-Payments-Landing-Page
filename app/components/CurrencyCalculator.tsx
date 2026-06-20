"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Clock, Sparkles, TrendingDown } from "lucide-react";
import {
  competitors,
  exchangeRates,
  recipientCurrencies,
} from "../data/calculatorData";

export default function CurrencyCalculator() {
  const [amount, setAmount] = useState(100);
  const [currency, setCurrency] =
    useState<keyof typeof exchangeRates>("GHS");
  const [liveRates, setLiveRates] = useState(exchangeRates);
  const [updatedAt, setUpdatedAt] = useState("");

  useEffect(() => {
    async function loadRates() {
      try {
        const res = await fetch("/api/rates");
        const data = await res.json();

        if (data?.rates) {
          setLiveRates(data.rates);
          setUpdatedAt(data.updatedAt);
        }
      } catch (error) {
        console.error("Failed to load rates:", error);
      }
    }

    loadRates();
  }, []);

  const rows = useMemo(() => {
    return competitors.map((item) => {
      const received = amount * (1 - item.fee) * liveRates[currency];

      return {
        ...item,
        feeAmount: amount * item.fee,
        received,
      };
    });
  }, [amount, currency, liveRates]);

  return (
    <section id="calculator" className="mx-auto max-w-7xl px-6 py-24">
      <div className="glass grid gap-8 overflow-hidden rounded-[2.5rem] p-6 shadow-2xl md:grid-cols-[0.9fr_1.1fr] md:p-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F59E0B]/15 px-4 py-2 text-sm font-bold text-[#D97706]">
            <Sparkles size={16} />
            Live rate calculator
          </div>

          <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
            Compare how much arrives.
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-600">
            See Cush Payments against common remittance providers with live
            exchange-rate architecture and transparent fee assumptions.
          </p>

          <div className="mt-8 space-y-5">
            <div className="rounded-[1.5rem] bg-white p-4 shadow-sm">
              <label className="text-sm font-bold text-neutral-500">
                You send
              </label>

              <div className="mt-2 flex items-center gap-3">
                <span className="text-3xl font-black">£</span>
                <input
                  type="number"
                  min="1"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full bg-transparent text-4xl font-black outline-none"
                />
              </div>

              <p className="mt-2 text-sm text-neutral-400">
                British Pound Sterling
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-white p-4 shadow-sm">
              <label className="text-sm font-bold text-neutral-500">
                Recipient currency
              </label>

              <select
                value={currency}
                onChange={(e) =>
                  setCurrency(e.target.value as keyof typeof exchangeRates)
                }
                className="mt-2 w-full bg-transparent text-2xl font-black outline-none"
              >
                {recipientCurrencies.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <MiniStat icon={<TrendingDown size={18} />} label="Low fees" />
              <MiniStat icon={<Clock size={18} />} label="Fast delivery" />
              <MiniStat icon={<BadgeCheck size={18} />} label="Transparent" />
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-[#111111] p-5 text-white shadow-2xl">
          <div className="mb-5 flex items-center justify-between">
            <p className="font-black">Provider comparison</p>
            <span className="rounded-full bg-[#F59E0B] px-3 py-1 text-xs font-black text-black">
              Best value
            </span>
          </div>

          <div className="space-y-4">
            {rows.map((row, index) => (
              <motion.div
                key={row.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ scale: 1.015 }}
                className={`rounded-[1.5rem] p-5 ${
                  row.name === "Cush Payments"
                    ? "bg-[#F59E0B] text-black"
                    : "bg-white/10 text-white"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-lg font-black">{row.name}</p>
                    <p
                      className={`text-sm ${
                        row.name === "Cush Payments"
                          ? "text-black/60"
                          : "text-white/50"
                      }`}
                    >
                      Fee £{row.feeAmount.toFixed(2)}
                    </p>
                  </div>

                  {row.name === "Cush Payments" && (
                    <span className="rounded-full bg-black px-3 py-1 text-xs font-black text-white">
                      Recommended
                    </span>
                  )}
                </div>

                <p className="mt-4 text-4xl font-black">
                  {row.received.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}{" "}
                  {currency}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 rounded-[1.5rem] bg-white/10 p-4">
            <p className="text-sm text-white/50">Current exchange rate</p>
            <p className="text-2xl font-black">
              1 GBP = {liveRates[currency].toLocaleString()} {currency}
            </p>

            {updatedAt && (
              <p className="mt-2 text-xs text-white/40">
                Last updated: {new Date(updatedAt).toLocaleString()}
              </p>
            )}
          </div>

          <p className="mt-4 text-xs leading-5 text-white/40">
            Estimates are for illustration purposes. Actual transfer pricing may
            vary at the time of transaction.
          </p>
        </div>
      </div>
    </section>
  );
}

function MiniStat({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-bold shadow-sm">
      <span className="text-[#D97706]">{icon}</span>
      {label}
    </div>
  );
}