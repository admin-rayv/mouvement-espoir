// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Adresse publique du site — à remplacer par https://msespoir.ca
  // quand le domaine sera enregistré et branché sur Vercel.
  site: 'https://mouvement-espoir.vercel.app',
  integrations: [sitemap()],
});
