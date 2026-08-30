import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight text-slate-950">
          VMRS Travel
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/about" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
            Services
          </Link>
          <Link href="/terms" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
            Terms
          </Link>
        </nav>

        <Link
          href="/#cars"
          className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 md:inline-flex"
        >
          View cars
        </Link>
      </div>
    </header>
  );
}
