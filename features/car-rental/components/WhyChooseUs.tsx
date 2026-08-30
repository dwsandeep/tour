const features = [
  {
    icon: "₹",
    title: "Affordable Pricing",
    description: "Transparent pricing and flexible packages designed for family trips, daily rides, and long-distance journeys.",
  },
  {
    icon: "🚗",
    title: "Comfortable & Clean Cars",
    description: "Well-maintained vehicles with spacious interiors, AC comfort, and a polished travel experience.",
  },
  {
    icon: "👨‍✈️",
    title: "Experienced Drivers",
    description: "Professional drivers who know the routes, prioritize safety, and help you travel with ease.",
  },
  {
    icon: "🛡️",
    title: "Safe & Reliable Journey",
    description: "Dependable support, punctual service, and journey-first care to keep every trip stress-free.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="destinations" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">Why choose us</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Travel with confidence every mile
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            We blend value, comfort, and dependable service to make every ride smooth and memorable.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-[1.75rem] border border-border bg-surface p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-2xl text-accent transition group-hover:scale-105">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
