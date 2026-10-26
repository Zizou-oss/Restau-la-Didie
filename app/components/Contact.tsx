const PHONES = [
  { label: "+226 05 89 05 95", tel: "+22605890595" },
  { label: "+226 72 21 56 13", tel: "+22672215613" },
  { label: "+226 65 80 06 64", tel: "+22665800664" },
];

import Reveal from "./Reveal";

const WHATSAPP_URL =
  "https://wa.me/22605890595?text=" +
  encodeURIComponent("Bonjour LA DIDIE, je voudrais commander : ");

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-gradient-to-b from-neutral-100 to-didie-blue/10 px-6 py-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.35em] text-didie-orange">
          Contact
        </p>
        <h2 className="mt-4 font-display text-4xl uppercase sm:text-5xl">
          Une envie ? <span className="text-didie-orange">Appelez-nous</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-neutral-600">
          Sur place à Pissy, à emporter ou par téléphone : la magie LA DIDIE
          n&apos;est qu&apos;un appel plus loin.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {PHONES.map((p, i) => (
            <Reveal key={p.tel} delay={i * 90}>
            <a
              href={`tel:${p.tel}`}
              className="group block h-full rounded-2xl border border-black/10 bg-white p-6 text-center shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-didie-orange hover:shadow-lg"
            >
              <span className="block text-2xl">📞</span>
              <span className="mt-3 block font-semibold group-hover:text-didie-orange">
                {p.label}
              </span>
              <span className="mt-1 block text-xs uppercase tracking-widest text-neutral-400">
                Appeler
              </span>
            </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-didie-green px-8 py-4 text-base font-semibold uppercase tracking-widest text-didie-black transition-transform hover:scale-105"
          >
            Écrire sur WhatsApp
          </a>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
