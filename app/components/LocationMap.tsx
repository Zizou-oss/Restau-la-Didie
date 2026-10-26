const MAPS_URL = "https://maps.app.goo.gl/Fo4nC9TMKp2n5jfS7?g_st=aw";
const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=12.3331438,-1.5837525&z=16&output=embed";

export default function LocationMap() {
  return (
    <section id="localisation" className="scroll-mt-20 bg-white px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-didie-red">Nous trouver</p>
            <h2 className="mt-3 font-display text-4xl uppercase sm:text-5xl">À Pissy, Ouagadougou</h2>
            <p className="mt-3 text-sm text-neutral-600">Restaurant LA DIDIE · 8CJ8+XV4, Pissy</p>
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-3 self-start rounded-full bg-didie-green px-6 text-sm font-bold uppercase tracking-[0.12em] text-didie-black transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:self-auto"
          >
            Ouvrir l’itinéraire <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-neutral-100 shadow-lg">
          <iframe
            title="Carte Google Maps du restaurant LA DIDIE à Pissy, Ouagadougou"
            src={MAP_EMBED_URL}
            className="h-[320px] w-full sm:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
