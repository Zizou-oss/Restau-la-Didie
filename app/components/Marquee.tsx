const WORDS = [
  { text: "LA DIDIE", color: "text-didie-red" },
  { text: "✦", color: "" },
  { text: "Burger maison", color: "" },
  { text: "✦", color: "" },
  { text: "Jus de bissap", color: "" },
  { text: "✦", color: "" },
  { text: "Une saveur tropicale", color: "text-didie-blue" },
  { text: "✦", color: "" },
  { text: "Au goût magique", color: "text-didie-green" },
  { text: "✦", color: "" },
  { text: "Jus de gingembre", color: "" },
  { text: "✦", color: "" },
  { text: "Sandwich au poulet", color: "" },
  { text: "✦", color: "" },
];

function Track() {
  return (
    <span className="flex shrink-0 items-center gap-6" aria-hidden="true">
      {WORDS.map((w, i) => (
        <span key={i} className={`flex items-center gap-6 ${w.color}`}>
          {w.text}
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-didie-black/10 bg-didie-orange py-3.5 text-didie-black">
      <div className="anim-marquee flex w-max gap-6 font-display text-xl uppercase whitespace-nowrap sm:text-2xl">
        <Track />
        <Track />
      </div>
    </div>
  );
}
