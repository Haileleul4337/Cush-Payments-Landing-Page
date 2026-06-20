"use client";

import { useForm } from "@formspree/react";

export default function BetaSignup() {
  const [state, handleSubmit] = useForm("mzdqnobe");

  if (state.succeeded) {
    return (
      <section id="beta" className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2.5rem] bg-white p-8 shadow-xl md:p-12">
          <h2 className="text-4xl font-bold">You’re on the waitlist 🎉</h2>
          <p className="mt-4 text-neutral-600">
            Thank you for joining Cush Payments beta.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="beta" className="mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-[2.5rem] bg-white p-8 shadow-xl md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D97706]">
          Join the beta
        </p>

        <h2 className="mt-3 max-w-3xl text-4xl font-bold md:text-6xl">
          Be first to send money with Cush Payments.
        </h2>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <input name="name" required className="rounded-full border border-black/10 px-6 py-4 outline-none" placeholder="Full name" />
            <input name="email" required className="rounded-full border border-black/10 px-6 py-4 outline-none" placeholder="Email address" type="email" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <select name="sending_from" className="rounded-full border border-black/10 px-6 py-4 outline-none">
              <option>United Kingdom</option>
              <option>United States</option>
              <option>European Union</option>
            </select>

            <select name="sending_to" className="rounded-full border border-black/10 px-6 py-4 outline-none">
              <option>Ghana</option>
              <option>Nigeria</option>
              <option>Kenya</option>
            </select>
          </div>

          <button disabled={state.submitting} className="rounded-full bg-black px-8 py-4 font-semibold text-white">
            {state.submitting ? "Submitting..." : "Join waitlist"}
          </button>
        </form>
      </div>
    </section>
  );
}