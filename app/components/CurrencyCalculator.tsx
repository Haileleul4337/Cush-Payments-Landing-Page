"use client";

import { useEffect, useMemo, useState } from "react";
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
      const received =
        amount * (1 - item.fee) * liveRates[currency];

      return {
        ...item,
        feeAmount: amount * item.fee,
        received,
      };
    });
  }, [amount, currency, liveRates]);

  return (
    <section id="calculator" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-8 rounded-[2rem] bg-white p-6 shadow-xl md:grid-cols-2 md:p-10">
        {/* Left Side */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D97706]">
            Live Estimate
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Compare how much arrives.
          </h2>

          <p className="mt-4 text-neutral-600">
            Compare Cush Payments with other providers and see how much your
            recipient receives.
          </p>

          <div className="mt-8 space-y-5">
            <div>
              <label className="text-sm font-semibold">
                You send (GBP)
              </label>

              <input
                type="number"
                min="1"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="mt-2 w-full rounded-2xl border border-black/10 p-4 text-2xl font-bold outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">
                Recipient Currency
              </label>

              <select
                value={currency}
                onChange={(e) =>
                  setCurrency(
                    e.target.value as keyof typeof exchangeRates
                  )
                }
                className="mt-2 w-full rounded-2xl border border-black/10 p-4 text-xl font-bold outline-none"
              >
                {recipientCurrencies.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="rounded-[1.5rem] bg-[#F8F3EA] p-5">
          <div className="space-y-4">
            {rows.map((row) => (
              <div
                key={row.name}
                className={`rounded-2xl p-5 ${
                  row.name === "Cush Payments"
                    ? "bg-black text-white"
                    : "bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="font-bold">{row.name}</p>

                  <p className="text-sm opacity-70">
                    Fee £{row.feeAmount.toFixed(2)}
                  </p>
                </div>

                <p className="mt-3 text-3xl font-black">
                  {row.received.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}{" "}
                  {currency}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-white p-4">
            <p className="text-sm text-neutral-500">
              Current Exchange Rate
            </p>

            <p className="text-2xl font-black">
              1 GBP = {liveRates[currency].toLocaleString()} {currency}
            </p>

            {updatedAt && (
              <p className="mt-2 text-xs text-neutral-500">
                Last updated:{" "}
                {new Date(updatedAt).toLocaleString()}
              </p>
            )}
          </div>

          <p className="mt-4 text-xs text-neutral-500">
            Estimates are for illustration purposes. Actual rates and fees may
            vary at the time of transfer.
          </p>
        </div>
      </div>
    </section>
  );
}