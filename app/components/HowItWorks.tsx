const steps = [
  ["01", "Sign up", "Create your account and complete secure KYC."],
  ["02", "Choose recipient", "Send to mobile wallet or bank account."],
  ["03", "Track instantly", "See transparent fees, rates, and delivery status."],
];

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-7xl px-6 py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D97706]">
        How it works
      </p>

      <h2 className="mt-3 max-w-3xl text-4xl font-bold md:text-6xl">
        Built for simple, secure diaspora transfers.
      </h2>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {steps.map(([number, title, text]) => (
          <div key={title} className="rounded-[2rem] bg-white p-6 shadow-sm">
            <p className="text-sm font-bold text-[#D97706]">{number}</p>
            <h3 className="mt-4 text-2xl font-bold">{title}</h3>
            <p className="mt-3 text-neutral-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}