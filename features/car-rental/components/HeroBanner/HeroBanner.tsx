import Image from "next/image";

const heroImage =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80";

const stats = [
  { label: "Affordable ₹11/km", value: "Best value" },
  { label: "Comfortable Cars", value: "Modern fleet" },
  { label: "Experienced Drivers", value: "Trusted service" },
];

export default function HeroBanner() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Tourist car driving through scenic destination"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/55" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-sky-100 backdrop-blur-sm">
            Premium tourist travel
          </div>

          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Explore Your Journey With Comfort & Freedom
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
            Affordable tourist car rentals for your family vacations, business travel, and weekend getaways across India.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
            >
              Enquire Now
            </a>
            <a
              href="tel:+919999999999"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Call Now
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-sky-100">{item.value}</p>
                <p className="mt-2 text-lg font-semibold text-white">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
