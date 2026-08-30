import Header from "../components/layout/Header";
import AboutSection from "../components/sections/AboutSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Header />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <AboutSection />
      </div>
    </main>
  );
}
