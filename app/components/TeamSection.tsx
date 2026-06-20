const team = [
  {
    name: "Matthew Ekow Folson",
    role: "CEO",
    detail: "25+ years in banking, payments, fintech delivery, AML, and regulated financial systems.",
  },
  {
    name: "Jose Luis Caldeira",
    role: "CTO",
    detail: "20+ years in banking technology, architecture, big data, and distributed financial systems.",
  },
];

export default function TeamSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D97706]">
        Experienced Team
      </p>

      <h2 className="mt-3 max-w-4xl text-4xl font-bold md:text-6xl">
        Built by leaders in banking, payments, compliance, and fintech.
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {team.map((person) => (
          <div key={person.name} className="rounded-[2rem] bg-white p-7 shadow-sm">
            <p className="text-sm font-bold text-[#D97706]">{person.role}</p>
            <h3 className="mt-3 text-2xl font-black">{person.name}</h3>
            <p className="mt-3 leading-7 text-neutral-600">{person.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}