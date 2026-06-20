const stats = [
  ["$104B+", "Annual African remittance inflows"],
  ["20+", "Target African countries"],
  ["10 sec", "Target transfer speed"],
  ["1.8%", "Transparent standard fee"],
];

export default function StatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-[2.5rem] bg-[#111111] p-8 text-white md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F59E0B]">
          Market opportunity
        </p>

        <h2 className="mt-3 max-w-4xl text-4xl font-bold md:text-6xl">
          Helping the diaspora move money across Africa with more value and trust.
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={value} className="rounded-3xl bg-white/10 p-6">
              <p className="text-4xl font-black text-[#F59E0B]">{value}</p>
              <p className="mt-3 text-sm text-white/70">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}