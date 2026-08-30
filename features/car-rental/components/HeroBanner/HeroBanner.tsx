export default function HeroBanner() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white sm:py-24">
      <div className="absolute inset-x-0 top-0 h-1/2 bg-slate-900 opacity-50 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.28em] text-sky-300">Indore car rental</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Our Rental Cars
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
            Choose from our wide range of clean, comfortable & well-maintained vehicles in Indore.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#cars"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              See cars
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              About us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
