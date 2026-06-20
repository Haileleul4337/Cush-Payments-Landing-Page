const items = [
  "KYC and AML checks",
  "AI fraud detection",
  "Encrypted transaction ledger",
  "Mobile wallet and bank integrations",
  "Transparent pricing",
  "Regulated payment approach",
];

export default function SecuritySection() {
  return (
    <section id="security" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F59E0B]">
          Security & Trust
        </p>

        <h2 className="mt-3 max-w-3xl text-4xl font-bold md:text-6xl">
          Designed for regulated, transparent African payments.
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/5 p-5"
            >
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}