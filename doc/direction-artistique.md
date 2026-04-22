# Direction Artistique - Mouvement solidaire eSPoir

> Document de référence pour l'identité visuelle et le ton du site web
> Créé le 22 avril 2026

---

## 1. Essence de la marque

### Tagline
**"Financer. Chercher. Guérir la sclérose en plaques."**

### Positionnement
Un OBNL communautaire de Repentigny qui canalise **100% des bénéfices** vers la recherche pour **guérir** la SP — pas seulement la gérer.

### Valeurs fondamentales
| Valeur | Manifestation |
|--------|---------------|
| **Espoir** | Ton positif, focus sur la guérison possible |
| **Solidarité** | Communauté locale qui se mobilise ensemble |
| **Transparence** | 100% des dons vers la recherche, rapports clairs |
| **Action** | Spectacles, événements concrets — pas juste des paroles |
| **Proximité** | Organisme local, visages humains, accessibilité |

---

## 2. Symbolisme du logo

Le logo représente une **vague de mains entrelacées** formant un mouvement circulaire:

- **Mains multiples**: Entraide, solidarité, soutien communautaire
- **Mouvement circulaire**: Dynamisme, unité, énergie collective
- **Forme fluide**: Évoque le système nerveux (touché par la SP)
- **Ouverture au centre**: L'espoir, la lumière au bout du tunnel
- **"eSPoir"**: Le "SP" intégré au cœur du mot = sclérose en plaques

---

## 3. Palette de couleurs

### Couleurs principales (extraites du logo)

| Nom | Code HEX | RGB | Usage |
|-----|----------|-----|-------|
| **Bleu Marine** | `#1B3A5F` | 27, 58, 95 | Titres, texte principal, CTA primaires |
| **Bleu Océan** | `#2D5A87` | 45, 90, 135 | Éléments interactifs, liens, accents |
| **Bleu Ciel** | `#5A8AB8` | 90, 138, 184 | Icônes, bordures, éléments secondaires |
| **Bleu Pâle** | `#8BB5D9` | 139, 181, 217 | Arrière-plans, dégradés, hover states |
| **Bleu Glace** | `#C4DCF0` | 196, 220, 240 | Fonds de sections, cartes |

### Couleurs complémentaires

| Nom | Code HEX | Usage |
|-----|----------|-------|
| **Blanc** | `#FFFFFF` | Fond principal, texte sur foncé |
| **Gris Doux** | `#F5F7FA` | Fonds de sections alternées |
| **Gris Texte** | `#4A5568` | Texte secondaire, paragraphes |
| **Noir Doux** | `#1A202C` | Texte d'emphase |

### Couleurs d'accent (usage limité)

| Nom | Code HEX | Usage |
|-----|----------|-------|
| **Orange Espoir** | `#E67E22` | CTA "Faire un don", alertes positives |
| **Vert Succès** | `#27AE60` | Confirmations, progression |

### Dégradés suggérés

```css
/* Dégradé principal (hero section) */
background: linear-gradient(135deg, #1B3A5F 0%, #2D5A87 50%, #5A8AB8 100%);

/* Dégradé doux (cartes) */
background: linear-gradient(180deg, #FFFFFF 0%, #C4DCF0 100%);
```

---

## 4. Typographie

### Police principale: **Montserrat**
- **Usage**: Titres, navigation, boutons
- **Poids**: 600 (Semi-bold) pour titres, 500 (Medium) pour navigation
- **Caractère**: Moderne, accessible, professionnelle mais chaleureuse

### Police secondaire: **Open Sans** ou **Source Sans Pro**
- **Usage**: Corps de texte, paragraphes
- **Poids**: 400 (Regular), 600 (Semi-bold) pour emphase
- **Caractère**: Lisibilité optimale, neutre et accueillante

### Hiérarchie typographique

| Élément | Police | Taille | Poids | Couleur |
|---------|--------|--------|-------|---------|
| H1 | Montserrat | 48px / 3rem | 700 | #1B3A5F |
| H2 | Montserrat | 36px / 2.25rem | 600 | #1B3A5F |
| H3 | Montserrat | 24px / 1.5rem | 600 | #2D5A87 |
| Paragraphe | Open Sans | 16px / 1rem | 400 | #4A5568 |
| Lead text | Open Sans | 20px / 1.25rem | 400 | #4A5568 |
| Caption | Open Sans | 14px / 0.875rem | 400 | #718096 |
| Bouton | Montserrat | 16px / 1rem | 600 | #FFFFFF |

---

## 5. Ton et voix

### Personnalité de marque
- **Inspirante** sans être naïve
- **Chaleureuse** mais professionnelle
- **Locale** et accessible
- **Déterminée** vers la guérison
- **Transparente** sur l'utilisation des fonds

### Exemples de ton

#### ✅ À faire:
> "Ensemble, nous finançons l'espoir de guérison."

> "Chaque billet de spectacle rapproche la recherche d'une solution."

> "100% de votre don va directement à la recherche."

#### ❌ À éviter:
> "Aidez les pauvres malades..." (ton victimisant)

> "Urgence! Donnez maintenant!" (ton alarmiste)

> "Notre organisation internationale..." (fausse grandeur)

### Mots-clés à utiliser
- Espoir, guérison, recherche, ensemble, communauté
- Lanaudière, Repentigny, local
- 100%, transparent, direct
- Spectacle, événement, rassemblement

### Mots à éviter
- Maladie incurable, condamnés, victimes
- Charité, pitié, souffrance
- Bureaucratie, administration

---

## 6. Imagerie

### Style photographique
- **Authentique**: Vrais visages de la communauté (avec consentement)
- **Lumineuse**: Éclairage naturel, tons chauds
- **Dynamique**: Actions, événements, rassemblements
- **Inclusive**: Diversité d'âges et de profils

### À privilégier
- Photos d'événements passés (Marche SP, spectacles)
- Portraits souriants (avec permission)
- Images de Repentigny / Lanaudière
- Symbolisme d'espoir (lumière, horizon, nature)

### À éviter
- Photos stock génériques
- Images médicales cliniques (IRM, hôpital)
- Visages tristes ou souffrants
- Fauteuils roulants comme seule représentation

### Illustrations
- Style fluide rappelant le logo
- Lignes courbes, organiques
- Palette bleu cohérente

---

## 7. Éléments UI

### Boutons

```css
/* Bouton primaire (Faire un don) */
.btn-primary {
  background: linear-gradient(135deg, #E67E22, #D35400);
  color: #FFFFFF;
  border-radius: 8px;
  padding: 16px 32px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  box-shadow: 0 4px 14px rgba(230, 126, 34, 0.4);
}

/* Bouton secondaire */
.btn-secondary {
  background: #1B3A5F;
  color: #FFFFFF;
  border-radius: 8px;
  padding: 14px 28px;
}

/* Bouton outline */
.btn-outline {
  background: transparent;
  border: 2px solid #2D5A87;
  color: #2D5A87;
  border-radius: 8px;
}
```

### Cartes

```css
.card {
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(27, 58, 95, 0.08);
  padding: 24px;
}

.card:hover {
  box-shadow: 0 8px 30px rgba(27, 58, 95, 0.15);
  transform: translateY(-4px);
}
```

### Espacement
- Utiliser une grille de 8px
- Marges sections: 80px (desktop), 48px (mobile)
- Padding cartes: 24px

### Coins arrondis
- Boutons: 8px
- Cartes: 12px
- Images: 8px ou 12px
- Conteneurs: 16px

---

## 8. Responsive Design

### Breakpoints
| Nom | Largeur | Usage |
|-----|---------|-------|
| Mobile | < 640px | Smartphones |
| Tablet | 640px - 1024px | Tablettes |
| Desktop | > 1024px | Ordinateurs |

### Principes
- Mobile-first design
- Navigation hamburger sur mobile
- Images optimisées (WebP avec fallback)
- Touch targets minimum 44x44px

---

## 9. Accessibilité

### Contrastes
- Texte sur fond blanc: minimum ratio 4.5:1
- Boutons: ratio 4.5:1 minimum
- Liens: distinguables sans couleur seule

### Standards
- WCAG 2.1 niveau AA
- Navigation clavier complète
- Labels ARIA appropriés
- Textes alternatifs pour images

---

## 10. Applications

### Site web
- Header fixe avec logo + navigation
- Hero section avec CTA "Faire un don"
- Sections alternées (blanc / bleu pâle)
- Footer avec coordonnées et réseaux sociaux

### Réseaux sociaux
- Photo de profil: Logo seul (cercle)
- Bannière: Logo + tagline sur dégradé bleu

### Documents imprimés
- En-tête: Logo + coordonnées
- Palette: Privilégier bleu marine + blanc pour impression N&B

---

## 11. Fichiers de référence

```
/assets
├── /logo
│   ├── logo-full.svg          # Logo complet avec texte
│   ├── logo-icon.svg           # Icône seule (vague de mains)
│   ├── logo-white.svg          # Version blanche
│   └── logo-favicon.ico        # Favicon
├── /fonts
│   ├── Montserrat/
│   └── OpenSans/
└── /colors
    └── palette.css             # Variables CSS
```

---

## 12. Variables CSS

```css
:root {
  /* Couleurs principales */
  --color-marine: #1B3A5F;
  --color-ocean: #2D5A87;
  --color-sky: #5A8AB8;
  --color-pale: #8BB5D9;
  --color-ice: #C4DCF0;

  /* Couleurs neutres */
  --color-white: #FFFFFF;
  --color-gray-light: #F5F7FA;
  --color-gray-text: #4A5568;
  --color-black-soft: #1A202C;

  /* Accents */
  --color-hope: #E67E22;
  --color-success: #27AE60;

  /* Typographie */
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Open Sans', sans-serif;

  /* Espacements */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 48px;
  --space-2xl: 80px;

  /* Rayons */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;

  /* Ombres */
  --shadow-sm: 0 2px 8px rgba(27, 58, 95, 0.06);
  --shadow-md: 0 4px 20px rgba(27, 58, 95, 0.08);
  --shadow-lg: 0 8px 30px rgba(27, 58, 95, 0.15);
}
```

---

*Document préparé pour le projet Mouvement solidaire eSPoir*
*Basé sur le logo et le plan d'affaires fournis par Marie-Carole Daigle*
