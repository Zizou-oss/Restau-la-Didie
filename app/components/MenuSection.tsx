import Image from "next/image";
import { MENU, COLOR_CLASSES, formatFCFA } from "../data/menu";
import Reveal from "./Reveal";

const WHATSAPP_URL =
  "https://wa.me/22605890595?text=" +
  encodeURIComponent("Bonjour LA DIDIE, je voudrais commander : ");

const SPECIALTIES = [
  {
    title: "Poisson braisé",
    image: "/images/poisson-grille-salade.jpeg",
    alt: "Poisson braisé accompagné de salade fraîche",
    price: 3500,
  },
  {
    title: "Poulet & riz",
    image: "/images/poulet-riz-assiette.jpeg",
    alt: "Poulet servi avec du riz et des accompagnements",
    price: 2500,
  },
  {
    title: "Le plat à partager",
    image: "/images/plateau-repas-mixte.jpg",
    alt: "Grand plateau de grillades et accompagnements à partager",
    price: 6000,
  },
  {
    title: "Poisson du jour",
    image: "/images/grand-poisson-grille-plat.jpeg",
    alt: "Grand poisson grillé servi avec des légumes",
    price: 5000,
  },
];

function MenuThumbnail({ item }: { item: (typeof MENU)[number]["items"][number] }) {
  if (item.image) {
    return (
      <Image
        src={item.image}
        alt={item.imageAlt ?? `Illustration pour ${item.name}`}
        width={64}
        height={64}
        sizes="64px"
        className={`h-14 w-14 shrink-0 rounded-xl object-cover sm:h-16 sm:w-16 ${
          item.imagePosition === "top"
            ? "object-top"
            : item.imagePosition === "bottom"
              ? "object-bottom"
              : "object-center"
        }`}
      />
    );
  }

  return (
    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-didie-blue/10 text-didie-blue sm:h-16 sm:w-16" aria-hidden="true">
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.7">
        <path d="M12 3.5S6.5 10 6.5 14.5a5.5 5.5 0 1 0 11 0C17.5 10 12 3.5 12 3.5Z" />
        <path d="M9.5 15.5a2.5 2.5 0 0 0 2.5 2.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export default function MenuSection() {
  return (
    <section id="notre-carte" className="scroll-mt-20 bg-neutral-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-didie-orange">
            Menu LA DIDIE
          </p>
          <h2 className="mt-4 font-display text-4xl uppercase leading-tight sm:text-5xl">
            <span className="text-didie-red">Nos plats</span> <span className="text-neutral-400">&</span>{" "}
            <span className="text-didie-blue">boissons</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-600">
            Retrouvez toute la carte, les photos et les prix en un coup d’œil.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h3 className="font-display text-xl uppercase tracking-wide text-neutral-800">Les plats de la maison</h3>
          <p className="text-xs font-medium text-neutral-500">Prix indicatifs proposés, à valider par LA DIDIE</p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {SPECIALTIES.map((specialty, index) => (
            <Reveal key={specialty.title} delay={index * 70}>
              <figure className="food-card group relative isolate h-40 overflow-hidden rounded-2xl bg-neutral-200 shadow-sm sm:h-48 sm:rounded-3xl">
                <Image
                  src={specialty.image}
                  alt={specialty.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <span className="food-card__shine" aria-hidden="true" />
                <div className="absolute right-2 top-2 rounded-xl border border-white/30 bg-black/60 px-2.5 py-1.5 text-right text-white shadow-lg backdrop-blur sm:right-3 sm:top-3 sm:px-3">
                  <p className="flex items-center justify-end gap-1 font-display text-base uppercase sm:text-lg"><span>{formatFCFA(specialty.price)}</span><span className="food-card__spark" aria-hidden="true">✦</span></p>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-white/75">Indicatif</p>
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-4">
                  <span className="font-display text-base uppercase sm:text-xl">{specialty.title}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-neutral-200 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <h3 className="font-display text-xl uppercase tracking-wide text-neutral-800">Toute la carte</h3>
          <p className="text-xs text-neutral-500">Vignettes illustratives · Tarifs en FCFA</p>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {MENU.map((cat, i) => (
          <Reveal key={cat.id} delay={i * 90}>
            <article
              id={cat.id}
              className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm"
            >
              <header
                className={`flex items-center justify-between border-b-2 px-6 py-4 font-display text-lg uppercase ${
                  COLOR_CLASSES[cat.color]
                }`}
              >
                <span>{cat.label}</span>
                <span className="text-xs font-medium tracking-[0.3em] opacity-70">
                  LA DIDIE
                </span>
              </header>
              <ul className="divide-y divide-black/10">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between gap-3 px-4 py-3 transition-colors hover:bg-didie-cream/70 sm:gap-4 sm:px-5"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <MenuThumbnail item={item} />
                      <span className="text-sm font-medium leading-5 sm:text-base">{item.name}</span>
                    </span>
                    <span className="shrink-0 rounded-full bg-didie-orange/15 px-2.5 py-1.5 text-xs font-bold whitespace-nowrap text-didie-black sm:px-3 sm:text-sm">
                      {formatFCFA(item.price)}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-didie-green px-8 py-4 text-base font-semibold uppercase tracking-widest text-didie-black transition-transform hover:scale-105"
          >
            Commander sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
