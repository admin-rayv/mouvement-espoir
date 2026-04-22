# Structure du Site Web - Mouvement solidaire eSPoir

> Architecture des pages et contenu MVP
> Créé le 22 avril 2026

---

## 1. Arborescence du site (MVP)

```
/
├── Accueil
├── Notre mission
│   ├── L'histoire
│   ├── L'équipe
│   └── Transparence
├── La recherche
│   ├── Pourquoi la recherche?
│   └── Projets soutenus
├── Événements
│   ├── Événements à venir
│   └── Événements passés
├── S'impliquer
│   ├── Faire un don
│   ├── Devenir bénévole
│   └── Organiser une collecte
├── Actualités (Phase 2)
└── Contact
```

---

## 2. Page par page

### 2.1 Accueil (`/`)

**Objectif:** Capter l'attention, inspirer confiance, convertir en don ou inscription

#### Sections:

**Hero Section**
- Titre: "Ensemble, finançons l'espoir de guérison"
- Sous-titre: "Le Mouvement solidaire eSPoir mobilise la communauté de Lanaudière pour financer la recherche sur la sclérose en plaques."
- CTA principal: "Faire un don" (orange)
- CTA secondaire: "Découvrir notre mission" (outline)
- Background: Dégradé bleu avec logo en filigrane

**Section "100% vers la recherche"**
- Icône/illustration
- Texte: "Chaque dollar que vous donnez va directement au financement de la recherche. Aucun frais administratif."
- Chiffres clés (ex: montant total amassé depuis le début)

**Section "Comment ça marche"**
3 étapes visuelles:
1. Vous participez à nos événements ou faites un don
2. 100% des bénéfices vont à la recherche
3. Des chercheurs travaillent à trouver un remède

**Section "Prochain événement"**
- Carte avec date, titre, lieu
- CTA: "Réserver ma place" ou "En savoir plus"
- (Si aucun événement: "Abonnez-vous pour être informé")

**Section "Témoignages"**
- 2-3 citations de participants ou membres de la communauté
- Photos (avec consentement)

**Section "Rejoignez le mouvement"**
- Formulaire d'inscription newsletter (email seulement)
- CTA: "Rester informé"

**Footer**
- Logo + tagline
- Liens rapides: Mission, Événements, Faire un don, Contact
- Coordonnées: Adresse Repentigny, courriel
- Réseaux sociaux
- Mention légale: OBNL enregistré, NEQ

---

### 2.2 Notre mission (`/mission`)

**Objectif:** Raconter l'histoire, présenter l'équipe, établir la crédibilité

#### Sous-pages:

**L'histoire** (`/mission/histoire`)
- Titre: "Pourquoi le Mouvement solidaire eSPoir?"
- Récit:
  - La SP touche ~20 000 Québécois, ~1 300 dans Lanaudière
  - En 2023, un proche de Marie-Carole reçoit un diagnostic
  - Elle décide d'agir: Marche SP 2023 (700$), 2024 (2 410$), 2025 (3 000$)
  - Constat: Les grands organismes ont des frais admin importants
  - Idée: Créer un OBNL local où 100% va à la recherche
  - Octobre 2025: Mouvement solidaire eSPoir est officiellement créé
- Note: Ne pas mentionner que c'est son fils — garder "un proche"

**L'équipe** (`/mission/equipe`)
- **Marie-Carole Daigle** - Fondatrice et présidente
  - 40 ans en communications (journaliste, relationniste)
  - Bénévole depuis toujours
  - Photo professionnelle
  - Lien LinkedIn (optionnel)

- **Hélène Collette** - Cofondatrice
  - MBA, spécialiste en plans d'affaires
  - Vit avec la SP depuis 2006
  - Propriétaire de MonPlanDAffaires.ca
  - Photo + LinkedIn

- **Comité consultatif** (à venir)
  - Personnes atteintes de SP
  - Stratèges en événementiel
  - Bénévoles

**Transparence** (`/mission/transparence`)
- Titre: "Où va votre argent?"
- Graphique visuel: 100% recherche
- Comparaison (sans nommer): "Contrairement aux grandes organisations, nous n'avons pas de frais administratifs. Tout est bénévole."
- Lien vers rapport annuel (quand disponible)
- Structure juridique: OBNL, NEQ 1181 4407 11
- Adresse du siège social

---

### 2.3 La recherche (`/recherche`)

**Objectif:** Expliquer pourquoi la recherche est cruciale et où vont les fonds

**Pourquoi la recherche?** (`/recherche`)
- Qu'est-ce que la SP? (bref, accessible)
- Statistiques:
  - 100 000 Canadiens touchés
  - 20 000 au Québec
  - Coût annuel pour le Québec: 747 M$ (2019)
  - Projection: 2 milliards $/an d'ici 2031
- Avancées récentes:
  - Greffe de moelle osseuse (CHU Québec)
  - Remyélinisation (Institut du Cerveau)
  - Bactéries intestinales (Harvard)
- Message: "Un remède est possible. La recherche a besoin de financement."

**Projets soutenus** (`/recherche/projets`)
- Phase 1: "Nos fonds seront dirigés vers SP Canada ou une chaire de recherche reconnue."
- Phase 2: Liste des projets financés avec descriptions
- Partenaires de recherche (logos, si applicable)

---

### 2.4 Événements (`/evenements`)

**Objectif:** Promouvoir les activités et montrer l'historique

**Événements à venir** (`/evenements`)
- Liste des prochains événements
- Chaque carte: Date, titre, lieu, prix, CTA
- Formulaire d'inscription newsletter si aucun événement

**Événements passés** (`/evenements/archives`)
- Galerie photos
- Montants amassés
- Témoignages de participants

**Types d'événements prévus:**
- Spectacles musicaux
- Soupers-spectacles
- Soirée sushis et art
- Spectacles d'humour/magie
- Pique-niques familiaux

---

### 2.5 S'impliquer (`/impliquer`)

**Objectif:** Convertir les visiteurs en donateurs ou bénévoles

**Faire un don** (`/impliquer/don`)
- Formulaire de don intégré (Stripe, PayPal, ou Zeffy)
- Montants suggérés: 25$, 50$, 100$, 250$, Autre
- Option don mensuel
- Message de remerciement automatique
- Note: Reçu fiscal (quand statut organisme de bienfaisance obtenu)

**Devenir bénévole** (`/impliquer/benevole`)
- Formulaire simple: Nom, courriel, téléphone, intérêts
- Types de bénévolat:
  - Organisation d'événements
  - Communications / réseaux sociaux
  - Logistique (jour d'événement)
  - Compétences spécifiques

**Organiser une collecte** (`/impliquer/collecte`)
- Information sur les collectes personnelles
- Kit téléchargeable (Phase 2)
- Contact pour coordination

---

### 2.6 Contact (`/contact`)

**Objectif:** Faciliter la communication

- Formulaire de contact simple
- Adresse: 243, boul. Brien, bureau 250, Repentigny, QC
- Courriel: info@mouvementespoir.ca (suggéré)
- Réseaux sociaux
- Carte Google Maps (optionnel)

---

## 3. Éléments globaux

### Header (fixe)
- Logo (gauche)
- Navigation: Mission | Recherche | Événements | S'impliquer | Contact
- CTA: "Faire un don" (bouton orange, toujours visible)

### Footer
- Logo + tagline
- Navigation secondaire
- Newsletter signup
- Coordonnées
- Réseaux sociaux: Facebook, Instagram
- Mention légale

### Pop-up newsletter (optionnel, Phase 2)
- Apparaît après 30 secondes ou au scroll 50%
- "Restez informés de nos événements"

---

## 4. Fonctionnalités techniques

### MVP (Phase 1)
- [ ] Site statique ou JAMstack (Next.js, Astro)
- [ ] Responsive design
- [ ] Formulaire de contact (Formspree ou similaire)
- [ ] Intégration don (Zeffy recommandé pour OBNL - 0% frais)
- [ ] Google Analytics
- [ ] SEO de base (meta tags, sitemap)

### Phase 2
- [ ] Blog / Actualités
- [ ] Galerie d'événements
- [ ] Espace membre (optionnel)
- [ ] Calendrier interactif
- [ ] Billetterie intégrée

---

## 5. Domaine et hébergement suggérés

**Domaines possibles:**
- mouvementespoir.ca (recommandé)
- mouvementsolidaireespoir.ca
- espoir-sp.ca

**Hébergement:**
- Vercel (gratuit, idéal pour Next.js)
- Netlify (alternative)
- Domaine: ~15$/an via Namecheap ou Porkbun

---

## 6. Contenu à fournir par Marie-Carole

- [ ] Photos haute résolution de l'équipe
- [ ] Photos d'événements passés (Marche SP, etc.)
- [ ] Témoignages écrits (avec autorisation)
- [ ] Bio courte pour chaque membre de l'équipe
- [ ] Logo en formats vectoriels (SVG, AI, EPS)
- [ ] Informations de contact officielles
- [ ] Texte de présentation validé
- [ ] Dates des prochains événements

---

## 7. Calendrier de développement suggéré

| Phase | Livrable | Délai |
|-------|----------|-------|
| 1 | Design maquettes (Figma) | 1 semaine |
| 2 | Développement pages principales | 2 semaines |
| 3 | Intégration don + formulaires | 3-4 jours |
| 4 | Tests et ajustements | 3 jours |
| 5 | Mise en ligne | 1 jour |

**Total estimé: 4-5 semaines** pour un MVP fonctionnel

---

*Document préparé pour le projet Mouvement solidaire eSPoir*
