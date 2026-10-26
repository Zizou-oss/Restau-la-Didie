import Image from "next/image";

const SOCIAL_LINKS = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@ladidie226?_r=1&_t=ZS-9AsMBt3Nn41",
    handle: "@ladidie226",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1A7w6sRZjr/?mibextid=wwXIfr",
    handle: "Suivre la page",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/22605890595?text=Bonjour%20LA%20DIDIE%2C%20je%20voudrais%20commander%20%3A%20",
    handle: "Commander",
  },
 ] as const;

const PHONES = [
  { label: "+226 05 89 05 95", tel: "+22605890595" },
  { label: "+226 72 21 56 13", tel: "+22672215613" },
  { label: "+226 65 80 06 64", tel: "+22665800664" },
];

function SocialIcon({ network }: { network: "TikTok" | "Facebook" | "WhatsApp" }) {
  if (network === "TikTok") {
    return (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current" aria-hidden="true">
        <path d="M14 3h3c.2 2.2 1.4 3.6 3.8 4v3.2a9 9 0 0 1-3.8-1.6v5.5a6 6 0 1 1-5.7-6v3.3a2.7 2.7 0 1 0 2.4 2.7V3Z" />
      </svg>
    );
  }

  if (network === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current" aria-hidden="true">
        <path d="M13.7 21v-8h2.8l.4-3.1h-3.2V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.3v2h-2.8V13h2.8v8h3.3Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current" aria-hidden="true">
      <path d="M20.5 3.5A11.8 11.8 0 0 0 2 17.7L.8 22l4.5-1.2a11.8 11.8 0 0 0 15.2-17.3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
      <path d="M8.5 7.3c-.2-.4-.4-.4-.7-.4h-.6c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2.1 3.3 5.2 4.5 2.5 1 3.1.8 3.7.7.5-.1 1.8-.8 2.1-1.5.3-.8.3-1.4.2-1.6-.1-.2-.3-.3-.7-.5l-2-.9c-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.1-.2.2-.3.3-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.5l.5-.5c.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5l-.9-2.1Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#171716] px-6 pb-8 pt-14 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="#accueil" className="inline-flex items-center gap-4">
            <span className="relative block h-14 w-14 overflow-hidden rounded-full bg-white ring-1 ring-white/20">
              <Image
                src="/logo.jpg"
                alt="Logo LA DIDIE"
                width={56}
                height={56}
                className="h-full w-full scale-[1.28] object-cover"
              />
            </span>
            <span className="font-display text-2xl uppercase">LA DIDIE</span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
            Poissons braisés, grillades et plats généreux à Pissy, Ouagadougou.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg uppercase tracking-wide text-didie-orange">Suivez-nous</h2>
          <ul className="mt-4 space-y-3">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-fit items-center gap-3 text-sm text-white/75 transition-colors hover:text-white"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/85 transition-colors group-hover:border-didie-orange group-hover:bg-didie-orange group-hover:text-didie-black" aria-hidden="true">
                    <SocialIcon network={social.label} />
                  </span>
                  <span>
                    <span className="block font-semibold text-white">{social.label}</span>
                    <span className="text-xs text-white/55">{social.handle}</span>
                  </span>
                  <span className="ml-1 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-didie-orange" aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg uppercase tracking-wide text-didie-orange">Téléphone</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {PHONES.map((phone) => (
              <li key={phone.tel}>
                <a href={`tel:${phone.tel}`} className="transition-colors hover:text-white">{phone.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 LA DIDIE. Tous droits réservés.</p>
        <a href="#accueil" className="uppercase tracking-[0.18em] transition-colors hover:text-white">Retour en haut ↑</a>
      </div>
    </footer>
  );
}
