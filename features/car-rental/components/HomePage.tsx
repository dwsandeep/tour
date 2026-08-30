// import Header from "./layout/Header";
// import HeroBanner from "../../features/car-rental/components/HeroBanner";
// import CarCard from "../../features/car-rental/components/CarCard";
// import AboutSection from "./sections/AboutSection";
// import ServicesSection from "./sections/ServicesSection";
// import TermsSection from "./sections/TermsSection";
// import { cars } from "../../features/car-rental/data/cars";

import Header from "@/app/components/layout/Header/Header";
import HeroBanner from "@/features/car-rental/components/HeroBanner";
import WhyChooseUs from "@/features/car-rental/components/WhyChooseUs";
import Footer from "@/features/car-rental/components/Footer";
import { cars } from "@/features/car-rental/data/cars";
import CarCard from "@/features/car-rental/components/CarCard";

export default function HomePage() {
  return (
    <main className="min-h-screen app-shell text-foreground">
      <Header />
      <HeroBanner />
      <WhyChooseUs />

      <section id="cars" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">Our fleet</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Popular cars for every journey
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cars.map((car) => (
            <CarCard key={car.name} car={car} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
