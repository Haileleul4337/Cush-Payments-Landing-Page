export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-[#F8F3EA]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-black tracking-wide">
          CUSH PAYMENTS
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#calculator">Calculator</a>
          <a href="#how">How it works</a>
          <a href="#security">Security</a>
          <a
            href="#beta"
            className="rounded-full bg-black px-5 py-2.5 font-semibold text-white"
            >
            Join beta
          </a>
        </div>
      </nav>
    </header>
  );
}