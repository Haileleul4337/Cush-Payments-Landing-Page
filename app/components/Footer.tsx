import { ArrowUpRight } from "lucide-react";

const columns = [
  {
    title: "Product",
    links: ["Calculator", "How it works", "Coverage", "Security"],
  },
  {
    title: "Company",
    links: ["About", "Team", "Beta", "Contact"],
  },
  {
    title: "Resources",
    links: ["Pricing", "Compliance", "PAPSS", "Mobile money"],
  },
];

export default function Footer() {
  return (
    <footer className="px-6 pb-8 pt-20">
      <div className="glass-dark mx-auto max-w-7xl rounded-[3rem] p-8 text-white shadow-2xl md:p-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F59E0B] text-lg font-black text-black">
                C
              </div>

              <p className="text-2xl font-black">Cush Payments</p>
            </div>

            <p className="mt-5 max-w-sm leading-7 text-white/60">
              Digital, direct, regulated, and built for Africa’s next generation
              of remittances.
            </p>

            <a
              href="#beta"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-black transition hover:scale-105"
            >
              Join beta <ArrowUpRight size={18} />
            </a>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-black text-[#F59E0B]">{column.title}</h3>

              <div className="mt-5 grid gap-3">
                {column.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-sm font-semibold text-white/60 transition hover:text-white"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/45 md:flex md:items-center md:justify-between">
          <p>© 2026 Cush Payments. All rights reserved.</p>

          <p className="mt-3 md:mt-0">
            Estimates shown are for illustration only. Subject to regulatory
            approvals.
          </p>
        </div>
      </div>
    </footer>
  );
}