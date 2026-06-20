const corridors = [
  ["🇬🇧", "UK", "🇬🇭", "Ghana"],
  ["🇺🇸", "USA", "🇳🇬", "Nigeria"],
  ["🇬🇧", "UK", "🇰🇪", "Kenya"],
  ["🇪🇺", "EU", "🇬🇭", "Ghana"],
];

export default function CorridorCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="grid gap-4 md:grid-cols-4">
        {corridors.map(([fromFlag, from, toFlag, to]) => (
          <div key={`${from}-${to}`} className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="text-sm text-neutral-500">Popular corridor</p>
            <p className="mt-3 text-xl font-black">
              {fromFlag} {from} → {toFlag} {to}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}