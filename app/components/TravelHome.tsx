import Header from "./layout/Header";
import HeroBanner from "../../features/car-rental/components/HeroBanner";
import CarCard from "../../features/car-rental/components/CarCard";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import TermsSection from "./sections/TermsSection";
import { cars } from "../../features/car-rental/data/cars";

export default function TravelHome() {
  return (
    <main className="min-h-screen app-shell text-foreground">
      <Header />
      <HeroBanner />

      <div className="mx-auto max-w-6xl space-y-10 px-6 py-12">
        <section id="cars" className="space-y-6">
          <div className="panel-surface rounded-[2rem] p-10">
            <p className="text-sm uppercase tracking-[0.28em] text-accent">VMRS Travel</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Our Rental Cars
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
              Choose from our wide range of clean, comfortable & well-maintained vehicles in Indore.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {cars.map((car) => (
              <CarCard key={car.name} car={car} />
            ))}
          </div>
        </section>

        <AboutSection />
        <ServicesSection />
        <TermsSection />
      </div>
    </main>
  );
}
