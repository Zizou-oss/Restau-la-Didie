import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="histoire" className="scroll-mt-20 overflow-hidden bg-didie-cream px-6 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-didie-red">La maison LA DIDIE</p>
            <h2 className="mt-4 font-display text-4xl uppercase leading-[1.02] sm:text-5xl">
              Le plaisir d’un bon repas, <span className="text-didie-green">à Pissy.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-neutral-700 sm:text-lg">
              Poissons braisés, grillades et plats généreux : LA DIDIE vous accueille autour d’une cuisine conviviale, à savourer sur place ou à emporter.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#notre-carte" className="inline-flex min-h-12 items-center justify-center rounded-full bg-didie-red px-6 text-sm font-bold uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                Voir le menu <span className="ml-3" aria-hidden="true">↗</span>
              </a>
              <a href="#contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-neutral-900/20 px-6 text-sm font-bold uppercase tracking-[0.14em] transition-colors hover:bg-neutral-900 hover:text-white">
                Nous contacter
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal variant="zoom">
          <figure className="group relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-3 rotate-2 rounded-[2rem] bg-didie-green/70" />
            <div className="relative aspect-[1.2/1] overflow-hidden rounded-[1.75rem] bg-neutral-200 shadow-xl">
              <Image
                src="/images/poisson-sauce-boules-de-riz.jpeg"
                alt="Poisson en sauce accompagné de boules de riz"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/75">À table chez LA DIDIE</p>
                <p className="mt-2 font-display text-3xl uppercase sm:text-4xl">Pissy · Ouagadougou</p>
              </figcaption>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
