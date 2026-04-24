# Structure du Site Web - Mouvement solidaire eSPoir

> Architecture des pages et contenu MVP
> Créé le 22 avril 2026 | Mis à jour le 24 avril 2026

---

## 1. Arborescence du site (MVP)

Structure simplifiée pour le lancement — pages longues avec scroll narratif plutôt que sous-pages multiples.

```
/
├── Accueil                    ← Page d'atterrissage immersive
├── Notre histoire             ← Mission + équipe + transparence (une seule page)
├── La recherche               ← Pourquoi + projets soutenus
├── Événements                 ← À venir + archives
├── Faire un don               ← Page dédiée avec formulaire
└── Contact                    ← Formulaire + coordonnées
```

**Navigation principale:** Notre histoire | La recherche | Événements | Contact | **[Faire un don]**

---

## 2. Principes de design des pages

Chaque page suit une approche **éditoriale et narrative**, pas un layout "grilles de cartes".

| Principe | Application |
|----------|-------------|
| **Scroll narratif** | Le contenu se déroule comme une histoire, section par section |
| **Images immersives** | Photos plein écran ou grandes, avec texte superposé quand approprié |
| **Respiration** | Grands espaces blancs entre les sections |
| **Asymétrie** | Layouts variés, pas de répétition mécanique |
| **Typographie expressive** | Grandes citations, titres impactants |

---

## 3. Page par page

### 3.1 Accueil (`/`)

**Objectif:** Émouvoir, inspirer confiance, inviter à agir

**Flow narratif:**

---

**[1] Hero — Plein écran**
- Image de fond: Photo de communauté ou événement (pas stock)
- Overlay doux pour lisibilité
- Titre (Playfair, très grand):
  > "Ensemble, finançons l'espoir de guérison"
- Tagline en dessous (italique):
  > "Financer. Chercher. Guérir la sclérose en plaques."
- Deux boutons: **Faire un don** (orange) | Découvrir notre histoire (outline)
- Scroll indicator subtil en bas

---

**[2] L'essentiel — Message clé**
- Fond: Blanc cassé
- Grande citation ou phrase d'impact:
  > "100% de votre don finance directement la recherche. Aucun frais administratif."
- Texte court expliquant le pourquoi (2-3 phrases max)
- Chiffre mis en valeur: montant total amassé ou nombre de personnes touchées dans Lanaudière

---

**[3] Notre promesse — Visuel**
- Layout asymétrique: image d'un côté, texte de l'autre
- 3 points clés (pas en "cartes", en liste élégante):
  1. **Financer** — Événements culturels locaux
  2. **Chercher** — Fonds dirigés vers la recherche de pointe
  3. **Guérir** — L'objectif: un remède pour la SP
- Transition fluide vers section suivante

---

**[4] Prochain événement (si applicable)**
- Si événement à venir:
  - Grande image de l'événement
  - Date mise en évidence (typographie expressive)
  - Titre + lieu + prix
  - CTA: "Réserver ma place"
- Si aucun événement:
  - Message: "Nos prochains événements arrivent bientôt"
  - CTA: "S'inscrire pour être informé" (newsletter)

---

**[5] Témoignage**
- Fond: Ton sable/chaud
- Grande citation d'un participant ou membre de la communauté
- Photo de la personne (si disponible et autorisé)
- Nom + contexte court

---

**[6] Rejoindre le mouvement**
- Fond: Dégradé subtil ou texture
- Titre: "Restez informés"
- Formulaire newsletter minimaliste (email seulement)
- Texte: "Recevez les nouvelles de nos événements et de la recherche."

---

**[7] Footer**
- Logo + tagline
- Liens: Notre histoire | La recherche | Événements | Contact | Faire un don
- Coordonnées: Adresse Repentigny, courriel
- Réseaux sociaux (icônes)
- Mention: OBNL enregistré au Québec — NEQ 1181 4407 11

---

### 3.2 Notre histoire (`/histoire`)

**Objectif:** Raconter le parcours, présenter l'équipe, établir la crédibilité

**Flow narratif:**

---

**[1] Hero — L'origine**
- Titre: "Tout a commencé par une volonté d'agir"
- Image: Marie-Carole ou photo de la Marche SP
- Intro: "En 2023, Marie-Carole Daigle découvre la réalité de la sclérose en plaques."

---

**[2] Le récit — Scroll storytelling**
- Format éditorial, pas de bullet points
- Paragraphes aérés avec chiffres mis en valeur:
  - "La SP touche **20 000 Québécois**, dont **1 300 dans Lanaudière**."
  - "Marche SP 2023: **700$**. 2024: **2 410$**. 2025: **3 000$**."
- Constat qui mène à l'action:
  > "Et si 100% de chaque dollar allait directement à la recherche?"
- Naissance du Mouvement: octobre 2025

**Note importante:** Ne jamais mentionner de lien personnel/familial avec la maladie. Rester sur la mission et l'engagement communautaire.

---

**[3] L'équipe**
- Pas de grille de cartes — présentation éditoriale
- **Marie-Carole Daigle** — Fondatrice et présidente
  - Grande photo
  - Bio narrative (pas bullets): 40 ans en communications, journaliste, relationniste, bénévole depuis toujours
  - Citation personnelle si disponible
- **Hélène Collette** — Cofondatrice
  - Photo
  - Bio: MBA, spécialiste plans d'affaires, vit avec la SP depuis 2006
  - Propriétaire de MonPlanDAffaires.ca

---

**[4] Transparence**
- Titre: "Où va votre argent?"
- Visuel simple et impactant: **100% → Recherche**
- Texte: "Tout notre travail est bénévole. Chaque dollar amassé finance directement des projets de recherche."
- Infos légales: OBNL, NEQ 1181 4407 11
- Lien vers rapport annuel (quand disponible)

---

**[5] CTA**
- "Rejoignez le mouvement"
- Boutons: Faire un don | Voir les événements

---

### 3.3 La recherche (`/recherche`)

**Objectif:** Expliquer l'urgence, montrer que la guérison est possible

**Flow narratif:**

---

**[1] Hero**
- Image évocatrice (lumière, espoir, science)
- Titre: "La recherche avance. L'espoir est réel."

---

**[2] Comprendre la SP**
- Explication accessible (pas médicale/clinique)
- Chiffres clés présentés de façon impactante:
  - **100 000** Canadiens touchés
  - **747 M$** — coût annuel pour le Québec (2019)
  - **2 milliards $** — projection d'ici 2031
- Ton: informatif mais porteur d'espoir

---

**[3] Les avancées récentes**
- Titre: "Un remède est possible"
- 3 avancées présentées de façon narrative (pas en cartes):
  - **Greffe de moelle osseuse** — CHU de Québec, première au Québec
  - **Remyélinisation** — Institut du Cerveau, Paris
  - **Bactéries intestinales** — Harvard, approche révolutionnaire
- Sources citées discrètement

---

**[4] Où vont nos fonds**
- Phase actuelle: "Nos fonds sont dirigés vers SP Canada et des chaires de recherche reconnues."
- À terme: liste des projets spécifiques financés
- Logos des partenaires de recherche (si applicable)

---

**[5] CTA**
- "Contribuez à la recherche"
- Bouton: Faire un don

---

### 3.4 Événements (`/evenements`)

**Objectif:** Promouvoir les activités, montrer la communauté en action

**Flow narratif:**

---

**[1] Hero**
- Image d'un événement passé
- Titre: "Nos événements"
- Sous-titre: "Spectacles, soupers-bénéfice et rassemblements pour financer l'espoir."

---

**[2] Prochain événement (si applicable)**
- Mise en avant immersive (grande image, date expressive)
- Détails: lieu, prix, description
- CTA: "Réserver" ou "En savoir plus"

**Si aucun événement:**
- Message: "Nos prochains événements arrivent bientôt."
- Formulaire newsletter pour être informé

---

**[3] Types d'événements**
- Liste descriptive (pas de cartes):
  - **Spectacles musicaux** — Artistes locaux et invités
  - **Soupers-spectacles** — Gastronomie et divertissement
  - **Soirées thématiques** — Sushis et art, humour, magie
  - **Activités familiales** — Pique-niques, rassemblements

---

**[4] Événements passés**
- Galerie photos (layout organique, pas grille rigide)
- Chiffres: montants amassés par événement
- Témoignages courts de participants

---

**[5] CTA**
- "Vous voulez organiser un événement pour la cause?"
- Lien vers contact

---

### 3.5 Faire un don (`/don`)

**Objectif:** Convertir — page dédiée, sans distraction

**Flow narratif:**

---

**[1] Hero simple**
- Titre: "Faites un don"
- Sous-titre: "100% de votre contribution finance la recherche."

---

**[2] Formulaire de don**
- **Montants suggérés:** 25$ | 50$ | 100$ | 250$ | Autre
- **Option don mensuel** (toggle)
- Champs: Nom, courriel, infos paiement
- **Plateforme suggérée:** Zeffy (0% frais pour OBNL)

---

**[3] Réassurance**
- "Chaque dollar compte."
- Rappel: travail 100% bénévole, pas de frais admin
- Note: "Reçu fiscal disponible dès l'obtention du statut d'organisme de bienfaisance."

---

**[4] Autres façons de contribuer**
- Devenir bénévole (lien vers formulaire contact)
- Organiser une collecte personnelle
- Partager sur les réseaux sociaux

---

### 3.6 Contact (`/contact`)

**Objectif:** Faciliter la communication

---

**[1] Hero simple**
- Titre: "Contactez-nous"

---

**[2] Formulaire**
- Champs: Nom, courriel, sujet (dropdown), message
- CTA: "Envoyer"

---

**[3] Coordonnées**
- **Adresse:** 243, boul. Brien, bureau 250, Repentigny, QC
- **Courriel:** info@mouvementespoir.ca (à confirmer)
- **Réseaux sociaux:** Facebook, Instagram

---

## 4. Éléments globaux

### Header
- **Fixe** en haut de page
- Logo image (vague de mains) — cliquable vers accueil
- Navigation: Notre histoire | La recherche | Événements | Contact
- **CTA permanent:** "Faire un don" (bouton bleu marine #264559, toujours visible)
- Sur mobile: hamburger menu
- Effet scroll: fond blanc avec ombre légère après 80px de scroll

### Footer
- Logo image (vague de mains, avec tagline intégré)
- Navigation secondaire
- Coordonnées: 243, boul. Brien, bureau 250, Repentigny, QC
- Courriel: info@mouvementespoir.ca
- Réseaux sociaux: Facebook, Instagram
- Mention légale: "OBNL enregistré au Québec"

---

## 5. Fonctionnalités techniques

### MVP (Phase 1)
- [ ] Site statique (Astro ou Next.js)
- [ ] Responsive design (mobile-first)
- [ ] Formulaire de contact (Formspree ou Netlify Forms)
- [ ] Intégration don (Zeffy — 0% frais pour OBNL)
- [ ] Google Analytics
- [ ] SEO de base (meta tags, Open Graph, sitemap)
- [ ] Animations scroll subtiles (intersection observer)

### Phase 2
- [ ] Blog / Actualités
- [ ] Galerie d'événements étendue
- [ ] Billetterie intégrée
- [ ] Espace bénévole

---

## 6. Domaine et hébergement

**Domaine recommandé:** `mouvementespoir.ca`

**Hébergement:**
- Vercel (gratuit, déploiement automatique)
- Domaine: ~15$/an (Porkbun ou Namecheap)

---

## 7. Contenu à fournir par Marie-Carole

### Priorité haute (bloquant pour le MVP)
- [ ] Logo en format SVG (vectoriel)
- [ ] Photos haute résolution de Marie-Carole et Hélène
- [ ] 3-5 photos d'événements passés (Marche SP, etc.)
- [ ] Texte de bio validé pour chaque fondatrice
- [ ] Courriel officiel de contact
- [ ] Confirmation du nom de domaine souhaité

### Priorité moyenne
- [ ] Témoignage(s) de participants (avec autorisation)
- [ ] Dates des prochains événements
- [ ] Informations sur les événements passés (montants amassés)

### Phase 2
- [ ] Rapport annuel (quand disponible)
- [ ] Photos supplémentaires pour galerie
- [ ] Contenu pour blog/actualités

---

## 8. Résumé MVP

| Page | Sections | Priorité |
|------|----------|----------|
| Accueil | Hero + Essentiel + Promesse + Événement + Témoignage + Newsletter | Haute |
| Notre histoire | Récit + Équipe + Transparence | Haute |
| La recherche | Comprendre SP + Avancées + Fonds | Moyenne |
| Événements | Prochain + Types + Archives | Moyenne |
| Faire un don | Formulaire + Réassurance | Haute |
| Contact | Formulaire + Coordonnées | Haute |

---

*Document préparé pour le projet Mouvement solidaire eSPoir*
*Design: éditorial, organique, narratif — pas de grilles de cartes*
