import type { Lang } from '../config';

export const contactContent = {
  fr: {
    title: 'Nous joindre — Mouvement solidaire eSPoir, Repentigny',
    description:
      "Bénévole, partenaire ou donateur : écrivez au Mouvement solidaire eSPoir à Repentigny. Une équipe bénévole à votre écoute, réponse sous 48 heures.",
    breadcrumb: 'Nous joindre',
    label: 'Nous joindre',
    lines: ['Faisons', '<em>connaissance.</em>'],
    intro:
      "Bénévoles, partenaires, donateurs ou simples curieux&#8239;: il y a plusieurs façons de soutenir la recherche sur la guérison de la sclérose en plaques. Écrivez-nous, on sera heureux de vous lire.",
    heroAlt:
      "Deux mains qui se tiennent, image du soutien offert aux personnes touchées par la sclérose en plaques",
    heroTitle: 'Se tenir la main — soutien et solidarité',
    engageLabel: 'Comment nous joindre',
    engageTitle: 'Chaque geste<br/>fait avancer la recherche.',
    cards: [
      {
        titre: 'Devenir bénévole',
        texte:
          "Vous avez du temps ou des talents à offrir&#8239;? Joignez-vous au Mouvement&#8239;! Notre principe de base&#8239;: agir dans le plaisir, sans obligations&#8239;! Information&#8239;: info@msespoir.com.",
        lien: 'Écrire pour s’inscrire',
        mailto: 'mailto:info@msespoir.com?subject=Devenir%20b%C3%A9n%C3%A9vole',
      },
      {
        titre: 'Poser une question',
        texte:
          "Une question sur la recherche, une demande médiatique ou un commentaire sur le Mouvement&#8239;? Notre équipe est à votre écoute et répond personnellement à chaque courriel. Plusieurs réponses se trouvent déjà dans notre <a href=\"/faq\">foire aux questions</a>.",
        lien: 'Nous écrire',
        mailto: 'mailto:info@msespoir.com',
      },
    ],
    coordLabel: 'Nos coordonnées',
    coordTitle: 'Une équipe<br/>à votre écoute.',
    coordTexte:
      "Le Mouvement solidaire eSPoir est porté par des bénévoles passionnés, à Repentigny, dans Lanaudière. Tous les courriels sont lus et reçoivent une réponse personnalisée, généralement sous 48 heures. Vous pouvez aussi <a href=\"/don\">faire un don</a> ou découvrir nos <a href=\"/activites\">prochaines activités-bénéfice</a>.",
    labelAdresse: 'Adresse',
    adresse: '243, boul. Brien, bureau 250<br/>Repentigny (Québec)&nbsp;&nbsp;J6A 6M4',
    labelCourriel: 'Courriel',
    labelSuivez: 'Suivez-nous',
  },

  en: {
    title: 'Contact us — Mouvement solidaire eSPoir, Repentigny',
    description:
      'Volunteer, partner or donor: write to Mouvement solidaire eSPoir in Repentigny, Quebec. A volunteer team ready to listen, with a reply within 48 hours.',
    breadcrumb: 'Contact us',
    label: 'Contact us',
    lines: ['Let’s get', '<em>acquainted.</em>'],
    intro:
      'Volunteers, partners, donors or simply curious: there are many ways to support research toward a cure for multiple sclerosis. Write to us — we would love to hear from you.',
    heroAlt:
      'Two hands holding each other, an image of the support offered to people affected by multiple sclerosis',
    heroTitle: 'Holding hands — support and solidarity',
    engageLabel: 'How to reach us',
    engageTitle: 'Every gesture<br/>moves research forward.',
    cards: [
      {
        titre: 'Become a volunteer',
        texte:
          'Have time or talents to offer? Join the Movement! Our guiding principle: act with enjoyment, without obligation. Information: info@msespoir.com.',
        lien: 'Email us to sign up',
        mailto: 'mailto:info@msespoir.com?subject=Volunteering',
      },
      {
        titre: 'Ask a question',
        texte:
          'A question about the research, a media request or a comment about the Movement? Our team is listening and answers every email personally. Many answers are already in our <a href="/en/faq">frequently asked questions</a>.',
        lien: 'Write to us',
        mailto: 'mailto:info@msespoir.com',
      },
    ],
    coordLabel: 'Our details',
    coordTitle: 'A team<br/>ready to listen.',
    coordTexte:
      'Mouvement solidaire eSPoir is carried by dedicated volunteers in Repentigny, in the Lanaudière region of Quebec. Every email is read and receives a personal reply, usually within 48 hours. You can also <a href="/en/donate">make a donation</a> or discover our <a href="/en/events">upcoming fundraising events</a>.',
    labelAdresse: 'Address',
    adresse: '243 Brien Blvd., Suite 250<br/>Repentigny, Quebec&nbsp;&nbsp;J6A 6M4',
    labelCourriel: 'Email',
    labelSuivez: 'Follow us',
  },
} satisfies Record<Lang, unknown>;
