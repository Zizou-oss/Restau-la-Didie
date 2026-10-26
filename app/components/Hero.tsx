import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative isolate overflow-hidden bg-[#f7f2e7] px-6 pb-16 pt-32 sm:pt-36 lg:min-h-[780px] lg:pb-20 lg:pt-28"
    >
      <div className="pointer-events-none absolute -left-36 top-24 h-80 w-80 rounded-full bg-didie-orange/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-didie-green/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
        <div className="relative z-10 max-w-2xl">
          <h1 className="anim-fade-up font-display text-5xl leading-[0.94] uppercase sm:text-7xl lg:text-[5.4rem]" style={{ animationDelay: "0.15s" }}>
            Une saveur<br />
            <span className="text-didie-green">tropicale</span>
            <br />au goût <span className="text-didie-red">magique.</span>
          </h1>

          <p className="anim-fade-up mt-7 max-w-lg text-base leading-7 text-neutral-700 sm:text-lg" style={{ animationDelay: "0.3s" }}>
            Poissons braisés, grillades généreuses et saveurs du Faso : bienvenue chez LA DIDIE, votre pause gourmande à Pissy.
          </p>

          <div className="anim-fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.42s" }}>
            <a
              href="#notre-carte"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-didie-orange px-7 text-sm font-bold uppercase tracking-[0.16em] text-didie-black transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-didie-red"
            >
              Découvrir la carte <span className="ml-3" aria-hidden="true">↗</span>
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-neutral-900/20 px-7 text-sm font-bold uppercase tracking-[0.16em] transition duration-300 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-didie-red"
            >Nous trouver
            </a>
          </div>

          <p className="anim-fade-up mt-8 text-xs font-medium uppercase tracking-[0.24em] text-neutral-500" style={{ animationDelay: "0.55s" }}>
            Fait avec générosité · Servi avec le sourire
          </p>
        </div>

        <div className="anim-fade-in relative mx-auto w-full max-w-[620px] lg:ml-auto" style={{ animationDelay: "0.2s" }}>
          <div className="absolute -inset-3 rotate-3 rounded-[2.5rem] bg-didie-orange/70 sm:-inset-5 sm:rounded-[3rem]" />
          <div className="group relative aspect-[1.12/1] overflow-hidden rounded-[2rem] shadow-2xl sm:rounded-[2.5rem]">
            <Image
              src="/images/plateau-fruits-de-mer.jpeg"
              alt="Plateau généreux de fruits de mer préparés à LA DIDIE"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-8">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/75 sm:text-xs">La générosité du Faso</p>
                <p className="mt-2 font-display text-2xl uppercase sm:text-4xl">Le goût du partage</p>
              </div>
              <span className="mb-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/50 text-xl transition duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-neutral-900" aria-hidden="true">↗</span>
            </div>
          </div>
          <div className="anim-float absolute -bottom-5 -left-3 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:-bottom-7 sm:-left-8 sm:px-6 sm:py-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500">L’adresse gourmande</p>
            <p className="mt-1 font-display text-xl uppercase text-didie-red sm:text-2xl">Pissy, Ouaga</p>
          </div>
        </div>
      </div>

      <a href="#notre-carte" aria-label="Défiler vers la carte" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-500 lg:flex">
        La carte <span className="scroll-cue text-lg" aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
