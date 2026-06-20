const features = [
  {
    title: "Lower Fees",
    description:
      "Transparent pricing designed to help families keep more of what they send.",
  },
  {
    title: "Instant Transfers",
    description:
      "Send funds in seconds instead of waiting days for settlement.",
  },
  {
    title: "Built For Africa",
    description:
      "Designed specifically for African bank accounts and mobile wallets.",
  },
  {
    title: "PAPSS Enabled",
    description:
      "Reduce dependency on expensive cross-border settlement networks.",
  },
  {
    title: "AI Fraud Detection",
    description:
      "Advanced monitoring helps keep transactions safe and compliant.",
  },
  {
    title: "Mobile First",
    description:
      "A modern experience built for both diaspora senders and recipients.",
  },
];

export default function WhyCush() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D97706]">
        Why Cush Payments
      </p>

      <h2 className="mt-3 max-w-4xl text-4xl font-bold md:text-6xl">
        Built for the next generation of African remittances.
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-[2rem] bg-white p-6 shadow-sm"
          >
            <h3 className="text-xl font-bold">{feature.title}</h3>

            <p className="mt-3 text-neutral-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}