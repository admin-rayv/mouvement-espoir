/**
 * Configuration bilingue du site.
 *
 * Le français est la langue par défaut et vit à la racine ; l'anglais vit
 * sous /en/ avec des adresses traduites (meilleur pour le référencement
 * qu'un simple préfixe sur les adresses françaises).
 */

export const languages = {
  fr: { label: 'Français', short: 'FR', htmlLang: 'fr-CA', ogLocale: 'fr_CA' },
  en: { label: 'English', short: 'EN', htmlLang: 'en-CA', ogLocale: 'en_CA' },
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'fr';

/** Paires d'adresses : une clé de page, ses deux adresses. */
export const routes = {
  home: { fr: '/', en: '/en/' },
  story: { fr: '/histoire', en: '/en/our-story' },
  events: { fr: '/activites', en: '/en/events' },
  news: { fr: '/nouvelles', en: '/en/news' },
  donate: { fr: '/don', en: '/en/donate' },
  faq: { fr: '/faq', en: '/en/faq' },
  contact: { fr: '/contact', en: '/en/contact' },
  privacy: { fr: '/confidentialite', en: '/en/privacy' },
} as const;

export type RouteKey = keyof typeof routes;

/** Adresse d'une page dans une langue donnée. */
export function path(key: RouteKey, lang: Lang): string {
  return routes[key][lang];
}

/** Langue déduite de l'adresse courante. */
export function langFromUrl(url: URL): Lang {
  return url.pathname.startsWith('/en') ? 'en' : 'fr';
}
