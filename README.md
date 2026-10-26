# LA DIDIE — Site vitrine

Site web du restaurant **LA DIDIE** (Pissy, Burkina Faso).
Slogan : *« Une saveur tropicale au goût magique »*.

## Stack

- **Next.js 16** (App Router, rendu statique)
- **Tailwind CSS 4**
- Palette extraite du logo : vert, rouge, orange, bleu sur fond noir

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start  # production
```

## Contenu

| Section            | Description                                                        |
| ------------------ | ------------------------------------------------------------------ |
| Hero               | Vidéo de fond + slogan + bouton « Voir le menu »                   |
| Manger / Boire     | Tuiles cliquables vers les catégories de la carte                  |
| Notre carte        | Menu complet avec prix en FCFA + bouton commande WhatsApp          |
| Notre histoire     | Présentation + 4 piliers colorés                                   |
| Contact            | 3 numéros cliquables (Appeler / WhatsApp), localisation Pissy      |

## Ajouter les vidéos

Déposez simplement `public/videos/hero.mp4` (10–20 s, muette, ~720p) :
la vidéo de fond démarre automatiquement. Tant qu'elle est absente, un
poster dégradé tropical (`public/images/hero-poster.svg`) est affiché.

## Modifier le menu

Tout le menu se trouve dans `app/data/menu.ts` (categories, plats, prix —
le formatage FCFA et les couleurs sont automatiques).

## Contacts du restaurant

+226 05 89 05 95 · +226 72 21 56 13 · +226 65 80 06 64 — WhatsApp : wa.me/22605890595
