// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://mouvement-espoir.vercel.app';

/**
 * Paires d'adresses français / anglais.
 * Doit rester aligné sur src/i18n/config.ts (les adresses anglaises sont
 * traduites, ce que l'option i18n du sitemap ne sait pas apparier seule).
 */
const PAIRS = [
  ['/', '/en/'],
  ['/histoire/', '/en/our-story/'],
  ['/activites/', '/en/events/'],
  ['/nouvelles/', '/en/news/'],
  ['/don/', '/en/donate/'],
  ['/faq/', '/en/faq/'],
  ['/contact/', '/en/contact/'],
  ['/confidentialite/', '/en/privacy/'],
];

const alternates = new Map();
for (const [fr, en] of PAIRS) {
  const links = [
    { lang: 'fr-CA', url: SITE + fr },
    { lang: 'en-CA', url: SITE + en },
    { lang: 'x-default', url: SITE + fr },
  ];
  alternates.set(SITE + fr, links);
  alternates.set(SITE + en, links);
}

// https://astro.build/config
export default defineConfig({
  // Adresse publique du site — à remplacer par https://msespoir.com
  // quand le domaine sera branché sur Vercel.
  site: SITE,
  integrations: [
    sitemap({
      // Pages utilitaires de l'infolettre : exclues du sitemap
      filter: (page) => !page.includes('/infolettre/') && !page.includes('/newsletter/'),
      serialize(item) {
        const links = alternates.get(item.url);
        if (links) item.links = links;
        return item;
      },
    }),
  ],
});
