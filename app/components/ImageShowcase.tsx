import Image from "next/image";

export default function ImageShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D97706]">
            Built for real people
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
            Send money home with confidence.
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-600">
            Cush Payments connects diaspora communities with families,
            businesses, mobile wallets, and bank accounts across Africa through
            a faster, more transparent experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">
              Transparent Pricing
            </span>

            <span className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">
              Fast Transfers
            </span>

            <span className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">
              Africa Focused
            </span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[3rem] shadow-2xl">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          <Image
            src="/images/6.jpg"
            alt="Cush Payments customers"
            width={1200}
            height={800}
            className="h-[600px] w-full object-cover transition duration-700 hover:scale-105"
          />

          <div className="glass absolute bottom-6 left-6 z-20 rounded-3xl p-5">
            <p className="text-xs font-bold text-neutral-500">
              Trusted by diaspora communities
            </p>

            <p className="mt-1 text-3xl font-black">
              20,000+
            </p>

            <p className="text-sm font-semibold text-neutral-600">
              Beta signups target
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}