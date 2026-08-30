import type { Car } from "../../types/car.types";

type CarCardProps = {
  car: Car;
};

export default function CarCard({ car }: CarCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <img
          src={car.image}
          alt={car.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4">
          <p className="text-sm uppercase tracking-[0.28em] text-sky-600">Rental car</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-950">{car.name}</h3>
        </div>
        <div className="mb-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-4">
            <p className="font-semibold text-slate-900">Seating</p>
            <p>{car.seating} passengers</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-4">
            <p className="font-semibold text-slate-900">AC</p>
            <p>{car.ac ? "Included" : "Not included"}</p>
          </div>
        </div>
        <div className="mt-auto flex items-center justify-between gap-4 border-t border-slate-200 pt-5">
          <div>
            <p className="text-sm text-slate-500">Price / km</p>
            <p className="text-xl font-semibold text-slate-950">{car.pricePerKm}</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={car.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-3xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
            >
              WhatsApp
            </a>
            <a
              href={`tel:${car.phone}`}
              className="inline-flex items-center justify-center rounded-3xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Call now
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
