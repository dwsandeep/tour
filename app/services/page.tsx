import Header from "../components/layout/Header";
import ServicesSection from "../components/sections/ServicesSection";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Header />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <ServicesSection />
      </div>
    </main>
  );
}
