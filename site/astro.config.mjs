// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Adresse publique du site — à remplacer par https://msespoir.com
  // quand le domaine sera branché sur Vercel.
  site: 'https://mouvement-espoir.vercel.app',
  integrations: [
    sitemap({
      // Pages utilitaires de l'infolettre : exclues du sitemap
      filter: (page) => !page.includes('/infolettre/'),
    }),
  ],
});
