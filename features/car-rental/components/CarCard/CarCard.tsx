import type { Car } from "../../types/car.types";

type CarCardProps = {
  car: Car;
};

export default function CarCard({ car }: CarCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[2rem] border border-border bg-surface shadow-sm">
      <div className="relative h-56 overflow-hidden bg-surface-muted">
        <img
          src={car.image}
          alt={car.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4">
          <p className="text-sm uppercase tracking-[0.28em] text-accent">Rental car</p>
          <h3 className="mt-3 text-2xl font-semibold text-foreground">{car.name}</h3>
        </div>
        <div className="mb-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          <div className="rounded-3xl bg-surface-muted p-4">
            <p className="font-semibold text-foreground">Seating</p>
            <p>{car.seating} passengers</p>
          </div>
          <div className="rounded-3xl bg-surface-muted p-4">
            <p className="font-semibold text-foreground">AC</p>
            <p>{car.ac ? "Included" : "Not included"}</p>
          </div>
        </div>
        <div className="mt-auto flex items-center justify-between gap-4 border-t border-border pt-5">
          <div>
            <p className="text-sm text-muted-foreground">Price / km</p>
            <p className="text-xl font-semibold text-foreground">{car.pricePerKm}</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={car.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-3xl bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent/90"
            >
              WhatsApp
            </a>
            <a
              href={`tel:${car.phone}`}
              className="inline-flex items-center justify-center rounded-3xl border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-surface-muted"
            >
              Call now
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
