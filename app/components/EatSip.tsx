import Image from "next/image";
import Reveal from "./Reveal";

const EXPERIENCES = [
  {
    title: "Manger",
    caption: "Grillades & plats généreux",
    link: "#fast-food",
    image: "/images/assortiment-grillades-planches.jpg",
    alt: "Assortiment de grillades servi sur des planches",
    accent: "text-didie-orange",
  },
  {
    title: "Boire",
    caption: "Boissons & rafraîchissements",
    link: "#boissons-locales",
    image: "/images/canette-fanta-orange.jpg",
    alt: "Canette de Fanta orange bien fraîche",
    accent: "text-didie-green",
  },
];

export default function EatSip() {
  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-didie-red">À table chez LA DIDIE</p>
            <h2 className="mt-3 font-display text-3xl uppercase sm:text-4xl">Nos spécialités</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-neutral-600">Poissons braisés, grillades et boissons pour accompagner votre repas.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {EXPERIENCES.map((experience, index) => (
            <Reveal key={experience.title} variant={index === 0 ? "left" : "right"}>
              <a href={experience.link} className="group relative isolate flex min-h-[320px] items-end overflow-hidden rounded-[1.75rem] bg-neutral-900 text-white shadow-md transition duration-500 hover:-translate-y-1 hover:shadow-2xl sm:min-h-[390px]">
                <Image
                  src={experience.image}
                  alt={experience.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="-z-20 object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-colors duration-500 group-hover:from-black/90" />
                <div className="w-full p-6 sm:p-9">
                  <p className={`text-xs font-bold uppercase tracking-[0.28em] ${experience.accent}`}>{experience.caption}</p>
                  <div className="mt-3 flex items-end justify-between gap-4">
                    <h3 className="font-display text-5xl uppercase sm:text-6xl">{experience.title}</h3>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/60 text-xl transition duration-300 group-hover:rotate-45 group-hover:border-white group-hover:bg-white group-hover:text-neutral-900" aria-hidden="true">↗</span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
