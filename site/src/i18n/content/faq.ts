import type { Lang } from '../config';

export interface FaqItem {
  /** Question, HTML accepté (espaces fines insécables) */
  q: string;
  /** Réponse affichée, HTML accepté */
  r: string;
  /** Réponse en texte brut, pour les données structurées */
  texte: string;
}

export interface FaqGroupe {
  groupe: string;
  questions: FaqItem[];
}

interface FaqContent {
  title: string;
  description: string;
  breadcrumb: string;
  label: string;
  lines: string[];
  intro: string;
  groupes: FaqGroupe[];
  suite: string;
  ctaContact: string;
  ctaDon: string;
}

export const faqContent: Record<Lang, FaqContent> = {
  fr: {
    title: 'Questions fréquentes — Mouvement solidaire eSPoir, Repentigny',
    description:
      "Dons, reçus fiscaux, bénévolat, partenariats, sclérose en plaques au Québec : les réponses aux questions les plus souvent posées au Mouvement solidaire eSPoir.",
    breadcrumb: 'Questions fréquentes',
    label: 'Questions fréquentes',
    lines: ['Vos questions,', '<em>nos réponses.</em>'],
    intro:
      "Tout ce qu'on nous demande le plus souvent sur le Mouvement solidaire eSPoir, les dons, le bénévolat et la sclérose en plaques au Québec.",
    suite:
      "Votre question n'apparaît pas ici&#8239;? Écrivez-nous, nous répondons personnellement à chaque courriel.",
    ctaContact: 'Nous joindre',
    ctaDon: 'Faire un don',
    groupes: [
      {
        groupe: 'Le Mouvement',
        questions: [
          {
            q: "Qu'est-ce que le Mouvement solidaire eSPoir&#8239;?",
            r: "Le Mouvement solidaire eSPoir est un organisme à but non lucratif québécois fondé en octobre 2025 par Marie-Carole Daigle et Hélène Collette, et basé à Repentigny, dans Lanaudière. Il organise des activités-bénéfice — soupers-spectacles, soirées thématiques, marches — dont 100&#8239;% des revenus nets sont versés à la recherche sur la guérison de la sclérose en plaques.",
            texte:
              "Le Mouvement solidaire eSPoir est un organisme à but non lucratif québécois fondé en octobre 2025 par Marie-Carole Daigle et Hélène Collette, et basé à Repentigny, dans Lanaudière. Il organise des activités-bénéfice — soupers-spectacles, soirées thématiques, marches — dont 100 % des revenus nets sont versés à la recherche sur la guérison de la sclérose en plaques.",
          },
          {
            q: 'Le Mouvement est-il un organisme officiellement enregistré&#8239;?',
            r: "Oui. Le Mouvement solidaire eSPoir est un organisme à but non lucratif enregistré au Québec sous le numéro d'entreprise du Québec (NEQ) 1181 4407 11. Il est par ailleurs en démarches auprès de l'Agence du revenu du Canada pour obtenir le statut d'organisme de bienfaisance enregistré.",
            texte:
              "Oui. Le Mouvement solidaire eSPoir est un organisme à but non lucratif enregistré au Québec sous le numéro d'entreprise du Québec (NEQ) 1181 4407 11. Il est par ailleurs en démarches auprès de l'Agence du revenu du Canada pour obtenir le statut d'organisme de bienfaisance enregistré.",
          },
          {
            q: 'Qui dirige le Mouvement solidaire eSPoir&#8239;?',
            r: "Marie-Carole Daigle en est la fondatrice et présidente&#8239;; forte de 40 ans d'expérience en communications, elle a lancé le Mouvement après qu'un proche a reçu un diagnostic de sclérose en plaques. Hélène Collette en est la cofondatrice&#8239;; elle vit elle-même avec la sclérose en plaques depuis 2006. L'équipe est entièrement composée de bénévoles.",
            texte:
              "Marie-Carole Daigle en est la fondatrice et présidente ; forte de 40 ans d'expérience en communications, elle a lancé le Mouvement après qu'un proche a reçu un diagnostic de sclérose en plaques. Hélène Collette en est la cofondatrice ; elle vit elle-même avec la sclérose en plaques depuis 2006. L'équipe est entièrement composée de bénévoles.",
          },
          {
            q: 'Où le Mouvement est-il actif&#8239;?',
            r: "Les bureaux du Mouvement sont situés au 243, boul. Brien, bureau 250, à Repentigny (Québec) J6A 6M4, dans la région de Lanaudière. Les activités-bénéfice se déroulent principalement dans Lanaudière et la grande région de Montréal, et le financement de la recherche s'adresse à des équipes de tout le Québec.",
            texte:
              "Les bureaux du Mouvement sont situés au 243, boul. Brien, bureau 250, à Repentigny (Québec) J6A 6M4, dans la région de Lanaudière. Les activités-bénéfice se déroulent principalement dans Lanaudière et la grande région de Montréal, et le financement de la recherche s'adresse à des équipes de tout le Québec.",
          },
        ],
      },
      {
        groupe: 'Les dons',
        questions: [
          {
            q: "Où va l'argent recueilli&#8239;?",
            r: "100&#8239;% des revenus nets des activités-bénéfice sont consacrés à des projets de recherche sur la guérison de la sclérose en plaques, menés par des équipes reconnues pour leur expertise. Le Mouvement ne verse aucun salaire et n'engage aucuns frais administratifs&#8239;: tout le travail est bénévole.",
            texte:
              "100 % des revenus nets des activités-bénéfice sont consacrés à des projets de recherche sur la guérison de la sclérose en plaques, menés par des équipes reconnues pour leur expertise. Le Mouvement ne verse aucun salaire et n'engage aucuns frais administratifs : tout le travail est bénévole.",
          },
          {
            q: 'Comment puis-je faire un don&#8239;?',
            r: "Deux moyens sont offerts. Par virement Interac, à l'adresse info@msespoir.com, en précisant «&nbsp;Don&nbsp;» dans le message accompagnant le transfert. Par chèque, libellé à l'ordre du Mouvement solidaire eSPoir et posté au 243, boul. Brien, bureau 250, Repentigny (Québec) J6A 6M4.",
            texte:
              "Deux moyens sont offerts. Par virement Interac, à l'adresse info@msespoir.com, en précisant « Don » dans le message accompagnant le transfert. Par chèque, libellé à l'ordre du Mouvement solidaire eSPoir et posté au 243, boul. Brien, bureau 250, Repentigny (Québec) J6A 6M4.",
          },
          {
            q: "Vais-je recevoir un reçu aux fins d'impôt&#8239;?",
            r: "Pas pour l'instant. Le Mouvement solidaire eSPoir est un OBNL enregistré au Québec, mais il n'a pas encore obtenu le statut d'organisme de bienfaisance enregistré auprès de l'Agence du revenu du Canada, seul statut qui permet d'émettre des reçus officiels aux fins d'impôt. Les démarches sont en cours et le site sera mis à jour dès que ces reçus seront disponibles.",
            texte:
              "Pas pour l'instant. Le Mouvement solidaire eSPoir est un OBNL enregistré au Québec, mais il n'a pas encore obtenu le statut d'organisme de bienfaisance enregistré auprès de l'Agence du revenu du Canada, seul statut qui permet d'émettre des reçus officiels aux fins d'impôt. Les démarches sont en cours et le site sera mis à jour dès que ces reçus seront disponibles.",
          },
          {
            q: "Combien le Mouvement a-t-il amassé jusqu'à maintenant&#8239;?",
            r: "Avant même sa fondation, l'équipe a amassé 780&nbsp;$ lors d'une première marche-bénéfice en 2023, 2 535&nbsp;$ en 2024 (soit 211&#8239;% de son objectif) et 2 805&nbsp;$ en mai 2025. Le premier souper-spectacle du Mouvement, en novembre 2025, a dégagé un bénéfice de 3 424&nbsp;$.",
            texte:
              "Avant même sa fondation, l'équipe a amassé 780 $ lors d'une première marche-bénéfice en 2023, 2 535 $ en 2024 (soit 211 % de son objectif) et 2 805 $ en mai 2025. Le premier souper-spectacle du Mouvement, en novembre 2025, a dégagé un bénéfice de 3 424 $.",
          },
        ],
      },
      {
        groupe: "S'impliquer",
        questions: [
          {
            q: 'Comment devenir bénévole&#8239;?',
            r: "Il suffit d'écrire à info@msespoir.com. Le principe de base du Mouvement est d'agir dans le plaisir, sans obligation&#8239;: chacun donne le temps et les talents qu'il souhaite. Les bénévoles participent notamment à l'organisation des activités-bénéfice.",
            texte:
              "Il suffit d'écrire à info@msespoir.com. Le principe de base du Mouvement est d'agir dans le plaisir, sans obligation : chacun donne le temps et les talents qu'il souhaite. Les bénévoles participent notamment à l'organisation des activités-bénéfice.",
          },
          {
            q: 'Mon entreprise peut-elle devenir partenaire&#8239;?',
            r: "Oui. Le Mouvement accueille les entreprises, fondations et organismes, que le soutien prenne la forme de visibilité, de dons en biens et services ou d'un partenariat financier. Les dons en biens et services permettent notamment d'offrir les activités à prix abordable. Écrivez à info@msespoir.com pour discuter de la formule appropriée.",
            texte:
              "Oui. Le Mouvement accueille les entreprises, fondations et organismes, que le soutien prenne la forme de visibilité, de dons en biens et services ou d'un partenariat financier. Les dons en biens et services permettent notamment d'offrir les activités à prix abordable. Écrivez à info@msespoir.com pour discuter de la formule appropriée.",
          },
          {
            q: 'Comment être informé des prochaines activités&#8239;?',
            r: "En vous abonnant à l'infolettre du Mouvement, depuis la page d'accueil du site. Vous recevrez les nouvelles des activités-bénéfice et de la recherche — un courriel à l'occasion, jamais de pourriel. Le Mouvement est aussi présent sur Facebook.",
            texte:
              "En vous abonnant à l'infolettre du Mouvement, depuis la page d'accueil du site. Vous recevrez les nouvelles des activités-bénéfice et de la recherche — un courriel à l'occasion, jamais de pourriel. Le Mouvement est aussi présent sur Facebook.",
          },
        ],
      },
      {
        groupe: 'La sclérose en plaques',
        questions: [
          {
            q: "Qu'est-ce que la sclérose en plaques&#8239;?",
            r: "La sclérose en plaques (SP) est une maladie du système nerveux central dans laquelle le système immunitaire s'attaque à la gaine de myéline qui protège les fibres nerveuses. Cette atteinte perturbe la transmission des signaux entre le cerveau et le reste du corps, ce qui peut entraîner fatigue, troubles de la vision, de l'équilibre, de la mobilité ou de la coordination. Son évolution varie beaucoup d'une personne à l'autre et il n'existe à ce jour aucun traitement curatif — d'où l'importance de la recherche.",
            texte:
              "La sclérose en plaques (SP) est une maladie du système nerveux central dans laquelle le système immunitaire s'attaque à la gaine de myéline qui protège les fibres nerveuses. Cette atteinte perturbe la transmission des signaux entre le cerveau et le reste du corps, ce qui peut entraîner fatigue, troubles de la vision, de l'équilibre, de la mobilité ou de la coordination. Son évolution varie beaucoup d'une personne à l'autre et il n'existe à ce jour aucun traitement curatif — d'où l'importance de la recherche.",
          },
          {
            q: 'Combien de personnes vivent avec la sclérose en plaques au Québec&#8239;?',
            r: "La sclérose en plaques touche directement environ 20 000 personnes au Québec. Dans la région de Lanaudière, où se trouvent les bureaux du Mouvement solidaire eSPoir, environ 1 300 personnes vivent avec cette maladie. Le Canada affiche l'un des taux de sclérose en plaques les plus élevés au monde.",
            texte:
              "La sclérose en plaques touche directement environ 20 000 personnes au Québec. Dans la région de Lanaudière, où se trouvent les bureaux du Mouvement solidaire eSPoir, environ 1 300 personnes vivent avec cette maladie. Le Canada affiche l'un des taux de sclérose en plaques les plus élevés au monde.",
          },
          {
            q: 'Pourquoi financer la recherche plutôt que le soutien aux personnes atteintes&#8239;?',
            r: "Plusieurs organismes offrent déjà des services de soutien aux personnes vivant avec la sclérose en plaques, et ce travail est essentiel. Le Mouvement solidaire eSPoir a choisi de concentrer ses efforts sur un objectif complémentaire&#8239;: la guérison. C'est la recherche qui, à terme, rendra la maladie évitable ou réversible.",
            texte:
              "Plusieurs organismes offrent déjà des services de soutien aux personnes vivant avec la sclérose en plaques, et ce travail est essentiel. Le Mouvement solidaire eSPoir a choisi de concentrer ses efforts sur un objectif complémentaire : la guérison. C'est la recherche qui, à terme, rendra la maladie évitable ou réversible.",
          },
        ],
      },
    ],
  },

  en: {
    title: 'Frequently asked questions — Mouvement solidaire eSPoir, Repentigny',
    description:
      'Donations, tax receipts, volunteering, partnerships and multiple sclerosis in Quebec: answers to the questions most often asked of Mouvement solidaire eSPoir.',
    breadcrumb: 'Frequently asked questions',
    label: 'Frequently asked questions',
    lines: ['Your questions,', '<em>our answers.</em>'],
    intro:
      'Everything people ask us most often about Mouvement solidaire eSPoir, donations, volunteering and multiple sclerosis in Quebec.',
    suite:
      "Don't see your question here? Write to us — we answer every email personally.",
    ctaContact: 'Contact us',
    ctaDon: 'Donate',
    groupes: [
      {
        groupe: 'The Movement',
        questions: [
          {
            q: 'What is Mouvement solidaire eSPoir?',
            r: 'Mouvement solidaire eSPoir is a Quebec non-profit organization founded in October 2025 by Marie-Carole Daigle and Hélène Collette, based in Repentigny, in the Lanaudière region. It organizes fundraising events — dinner shows, themed evenings and charity walks — whose net proceeds go entirely, 100%, to research toward a cure for multiple sclerosis.',
            texte:
              'Mouvement solidaire eSPoir is a Quebec non-profit organization founded in October 2025 by Marie-Carole Daigle and Hélène Collette, based in Repentigny, in the Lanaudière region. It organizes fundraising events — dinner shows, themed evenings and charity walks — whose net proceeds go entirely, 100%, to research toward a cure for multiple sclerosis.',
          },
          {
            q: 'Is the Movement an officially registered organization?',
            r: 'Yes. Mouvement solidaire eSPoir is a non-profit organization registered in Quebec under Quebec enterprise number (NEQ) 1181 4407 11. It is also in the process of applying to the Canada Revenue Agency for registered charity status.',
            texte:
              'Yes. Mouvement solidaire eSPoir is a non-profit organization registered in Quebec under Quebec enterprise number (NEQ) 1181 4407 11. It is also in the process of applying to the Canada Revenue Agency for registered charity status.',
          },
          {
            q: 'Who leads Mouvement solidaire eSPoir?',
            r: 'Marie-Carole Daigle is its founder and president; with 40 years of experience in communications, she started the Movement after someone close to her was diagnosed with multiple sclerosis. Hélène Collette is its co-founder; she has been living with multiple sclerosis since 2006. The team is made up entirely of volunteers.',
            texte:
              'Marie-Carole Daigle is its founder and president; with 40 years of experience in communications, she started the Movement after someone close to her was diagnosed with multiple sclerosis. Hélène Collette is its co-founder; she has been living with multiple sclerosis since 2006. The team is made up entirely of volunteers.',
          },
          {
            q: 'Where does the Movement operate?',
            r: 'The Movement’s offices are at 243 Brien Blvd., Suite 250, Repentigny, Quebec J6A 6M4, in the Lanaudière region. Fundraising events take place mainly in Lanaudière and the greater Montreal area, while the research funding is open to teams across Quebec.',
            texte:
              'The Movement’s offices are at 243 Brien Blvd., Suite 250, Repentigny, Quebec J6A 6M4, in the Lanaudière region. Fundraising events take place mainly in Lanaudière and the greater Montreal area, while the research funding is open to teams across Quebec.',
          },
        ],
      },
      {
        groupe: 'Donations',
        questions: [
          {
            q: 'Where does the money go?',
            r: '100% of the net proceeds from fundraising events go to research projects on curing multiple sclerosis, led by teams recognized for their expertise. The Movement pays no salaries and incurs no administrative costs: all the work is done by volunteers.',
            texte:
              '100% of the net proceeds from fundraising events go to research projects on curing multiple sclerosis, led by teams recognized for their expertise. The Movement pays no salaries and incurs no administrative costs: all the work is done by volunteers.',
          },
          {
            q: 'How can I make a donation?',
            r: 'There are two ways. By Interac e-Transfer to info@msespoir.com, writing “Don” in the message accompanying the transfer. By cheque, made out to Mouvement solidaire eSPoir and mailed to 243 Brien Blvd., Suite 250, Repentigny, Quebec J6A 6M4.',
            texte:
              'There are two ways. By Interac e-Transfer to info@msespoir.com, writing "Don" in the message accompanying the transfer. By cheque, made out to Mouvement solidaire eSPoir and mailed to 243 Brien Blvd., Suite 250, Repentigny, Quebec J6A 6M4.',
          },
          {
            q: 'Will I receive a tax receipt?',
            r: 'Not at this time. Mouvement solidaire eSPoir is a non-profit registered in Quebec, but it has not yet obtained registered charity status from the Canada Revenue Agency — the only status that allows official tax receipts to be issued. The application is under way and this site will be updated as soon as receipts become available.',
            texte:
              'Not at this time. Mouvement solidaire eSPoir is a non-profit registered in Quebec, but it has not yet obtained registered charity status from the Canada Revenue Agency — the only status that allows official tax receipts to be issued. The application is under way and this site will be updated as soon as receipts become available.',
          },
          {
            q: 'How much has the Movement raised so far?',
            r: 'Even before it was founded, the team raised $780 at a first charity walk in 2023, $2,535 in 2024 (211% of its goal) and $2,805 in May 2025. The Movement’s first dinner show, in November 2025, generated $3,424 in net proceeds.',
            texte:
              'Even before it was founded, the team raised $780 at a first charity walk in 2023, $2,535 in 2024 (211% of its goal) and $2,805 in May 2025. The Movement’s first dinner show, in November 2025, generated $3,424 in net proceeds.',
          },
        ],
      },
      {
        groupe: 'Getting involved',
        questions: [
          {
            q: 'How do I become a volunteer?',
            r: 'Simply write to info@msespoir.com. The Movement’s guiding principle is to act with enjoyment and without obligation: everyone gives the time and talents they wish. Volunteers help organize the fundraising events, among other things.',
            texte:
              'Simply write to info@msespoir.com. The Movement’s guiding principle is to act with enjoyment and without obligation: everyone gives the time and talents they wish. Volunteers help organize the fundraising events, among other things.',
          },
          {
            q: 'Can my business become a partner?',
            r: 'Yes. The Movement welcomes businesses, foundations and organizations, whether the support takes the form of visibility, gifts in kind and services, or financial partnership. Gifts in kind are what make it possible to offer events at an affordable price. Write to info@msespoir.com to discuss the right arrangement.',
            texte:
              'Yes. The Movement welcomes businesses, foundations and organizations, whether the support takes the form of visibility, gifts in kind and services, or financial partnership. Gifts in kind are what make it possible to offer events at an affordable price. Write to info@msespoir.com to discuss the right arrangement.',
          },
          {
            q: 'How can I hear about upcoming events?',
            r: 'By subscribing to the Movement’s newsletter from the site’s home page. You will receive news about fundraising events and research — an email now and then, never spam. The Movement is also on Facebook.',
            texte:
              'By subscribing to the Movement’s newsletter from the site’s home page. You will receive news about fundraising events and research — an email now and then, never spam. The Movement is also on Facebook.',
          },
        ],
      },
      {
        groupe: 'Multiple sclerosis',
        questions: [
          {
            q: 'What is multiple sclerosis?',
            r: 'Multiple sclerosis (MS) is a disease of the central nervous system in which the immune system attacks the myelin sheath protecting the nerve fibres. This damage disrupts the transmission of signals between the brain and the rest of the body, which can cause fatigue and problems with vision, balance, mobility or coordination. Its course varies greatly from one person to another, and there is still no curative treatment — which is why research matters so much.',
            texte:
              'Multiple sclerosis (MS) is a disease of the central nervous system in which the immune system attacks the myelin sheath protecting the nerve fibres. This damage disrupts the transmission of signals between the brain and the rest of the body, which can cause fatigue and problems with vision, balance, mobility or coordination. Its course varies greatly from one person to another, and there is still no curative treatment — which is why research matters so much.',
          },
          {
            q: 'How many people live with multiple sclerosis in Quebec?',
            r: 'Multiple sclerosis directly affects about 20,000 people in Quebec. In the Lanaudière region, where Mouvement solidaire eSPoir has its offices, roughly 1,300 people live with the disease. Canada has one of the highest rates of multiple sclerosis in the world.',
            texte:
              'Multiple sclerosis directly affects about 20,000 people in Quebec. In the Lanaudière region, where Mouvement solidaire eSPoir has its offices, roughly 1,300 people live with the disease. Canada has one of the highest rates of multiple sclerosis in the world.',
          },
          {
            q: 'Why fund research rather than support for people with MS?',
            r: 'Several organizations already provide support services to people living with multiple sclerosis, and that work is essential. Mouvement solidaire eSPoir chose to focus its efforts on a complementary goal: a cure. Research is what will ultimately make the disease preventable or reversible.',
            texte:
              'Several organizations already provide support services to people living with multiple sclerosis, and that work is essential. Mouvement solidaire eSPoir chose to focus its efforts on a complementary goal: a cure. Research is what will ultimately make the disease preventable or reversible.',
          },
        ],
      },
    ],
  },
};
