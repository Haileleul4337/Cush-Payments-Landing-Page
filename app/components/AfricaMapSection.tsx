import { Globe2, Landmark, Smartphone, Zap } from "lucide-react";

const countries = ["Ghana", "Nigeria", "Kenya", "Ethiopia", "South Africa"];

const features = [
  ["10 sec", "Target delivery speed", Zap],
  ["20+", "Target African countries", Globe2],
  ["Wallets", "Mobile money ready", Smartphone],
  ["PAPSS", "Local-currency settlement", Landmark],
];

export default function AfricaMapSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-8 rounded-[2.5rem] bg-white p-8 shadow-xl md:grid-cols-2 md:p-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D97706]">
            Africa coverage
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-6xl">
            One platform for African corridors.
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-600">
            Cush Payments is designed for diaspora transfers into key African
            markets, with mobile wallet, bank account, and local-currency
            settlement support.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {countries.map((country) => (
              <span
                key={country}
                className="rounded-full bg-[#F8F3EA] px-4 py-2 text-sm font-semibold"
              >
                {country}
              </span>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-black p-6 text-white">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#F59E0B]/30 blur-3xl" />

          <div className="relative flex min-h-[360px] items-center justify-center">
            <div className="text-[11rem] leading-none opacity-90">🌍</div>

            <div className="absolute left-6 top-6 rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="text-xs text-white/60">UK → Ghana</p>
              <p className="text-xl font-black text-[#F59E0B]">Active</p>
            </div>

            <div className="absolute bottom-6 right-6 rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="text-xs text-white/60">US → Nigeria</p>
              <p className="text-xl font-black text-[#F59E0B]">Coming soon</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {features.map(([value, label, Icon]) => (
          <div key={value as string} className="rounded-3xl bg-white p-5 shadow-sm">
            <Icon className="text-[#D97706]" size={24} />
            <p className="mt-4 text-3xl font-black">{value as string}</p>
            <p className="mt-2 text-sm text-neutral-600">{label as string}</p>
          </div>
        ))}
      </div>
    </section>
  );
}