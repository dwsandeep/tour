import Header from "../components/layout/Header";
import TermsSection from "../components/sections/TermsSection";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Header />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <TermsSection />
      </div>
    </main>
  );
}
