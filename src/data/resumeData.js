export const candidateData = {
  name: "DAVID ATSÉ",
  role: "DÉVELOPPEUR WEB & FULLSTACK",
  tagline: "RESUME | 2026",
  email: "daatsey24@gmail.com",
  github: "https://github.com/DavidAtse",
  githubDisplay: "GITHUB.COM/DAVIDATSE",
  location: "Abidjan, Côte d'Ivoire & Télétravail",
  status: "DISPONIBLE POUR PROJETS & CDI / CDD",
  bio: "Développeur Web & Fullstack passionné par la conception d'applications web modernes, réactives et hautement performantes. Doté d'une solide expertise en front-end (React, Vite, JavaScript ES6+) et back-end (PHP, Laravel), je m'attache à créer des expériences utilisateur fluides et à relever des défis techniques stimulants."
};

export const educationData = [
  {
    id: "edu1",
    title: "Développement d'Application & e-Service (DAS)",
    institution: "Université Virtuelle de Côte d'Ivoire (UVCI)",
    date: "2024 — en cours",
    desc: "Spécialisation en ingénierie logicielle web, architectures modernes (React, Vite, Node, Laravel) et conception d'applications évolutives."
  },
  {
    id: "edu2",
    title: "Baccalauréat en mécanique (F1)",
    institution: "Lycée Technique d'Abidjan (LTA)",
    date: "2021 — 2024",
    desc: "Solides fondations en mécanique, logique mathématique"
  }
];

export const experienceData = [
  {
    id: "exp1",
    title: "Développeur Web Fullstack",
    role: "Développeur Web Fullstack — Projet E-Mairie (GMDI)",
    date: "Juin – Août 2026",
    desc: "Participation au développement de E-Mairie, une plateforme numérique de gestion municipale intégrée, réalisée dans le cadre d'un stage de 3 mois au sein de la Cellule de Prototypage et Fabrique Numérique de l'UVCI. Contribution à la conception de fonctionnalités destinées à moderniser les services municipaux, notamment la gestion administrative, le portail citoyen et le suivi des activités communales, en collaboration avec l'équipe de développement."
  },
  {
    id: "exp-imots",
    title: "Créateur & Développeur Fullstack",
    role: "Développeur Web Fullstack — Projet iMots (DevineMot CI)",
    date: "2026",
    desc: "Conception, développement et mise en ligne complète d'iMots (DevineMot CI), une plateforme web ludo-éducative mobile valorisant la culture ivoirienne. Déploiement d'une architecture technique (PHP/JS) optimisée pour la data mobile locale, intégrant une sécurité anti-triche côté serveur, une synchronisation des profils multi-appareils, et la gestion de sessions de jeu à haute fréquence (4 créneaux par jour). Le jeu est actuellement opérationnel en ligne et fédère une communauté active de joueurs avec un système de classements en temps réel."
  }
];

export const skillsData = [
  "HTML5 & CSS3",
  "JavaScript (ES6+)",
  "PHP & Laravel",
  "React 19 & Vite",
  "Responsive Web Design",
  "UI/UX Fundamentals",
  "Git & GitHub",
  "MySQL & Base de données",
];

export const projectsData = [
  {
    id: "imots-devinemot-ci",
    title: "iMots",
    category: "Jeu Ludo-Éducatif Web",
    badge: "PHP / JavaScript natif",
    bannerClass: "project-banner-imots",
    desc: "Plateforme web mobile interactive de devinette de mots 100 % ancrée dans la culture ivoirienne (nouchi, gastronomie, villes). Architecture légère avec sécurité anti-triche et synchronisation multi-appareils.",
    tags: ["PHP", "JavaScript", "Temps Réel", "Mobile-First"],
    liveUrl: "https://imots.alwaysdata.net/",
    liveLabel: "Jouer au jeu (En direct)",
    githubUrl: "https://github.com/DavidAtse/Devine-Mot",
    highlights: [
      "Mécanique addictive avec 4 créneaux par jour et indicateur de proximité thermique",
      "Sécurité anti-triche côté serveur et synchronisation des profils multi-appareils",
      "Génération instantanée de fiches pédagogiques et culturelles à la victoire",
      "Architecture légère et optimisée pour une faible consommation de data mobile",
      "Gestion dynamique de classements (Leaderboard) et profils joueurs en temps réel"
    ]
  },
  {
    id: "pierres",
    title: "Pierres Vivantes",
    category: "fullstack react",
    badge: "Fullstack React + Laravel",
    bannerClass: "project-banner-pierres",
    desc: "Application web complète avec architecture découplée : Frontend dynamique sous React 19 & React Router, backend API Laravel & TailwindCSS, gestion de données interactive.",
    tags: ["React 19", "Laravel", "Tailwind", "Vite"],
    liveUrl: null,
    githubUrl: "https://github.com/DavidAtse/Pierres-Vivantes",
    highlights: [
      "Architecture moderne découplée Frontend React 19 / Backend Laravel",
      "Système de routage dynamique et réactif avec React Router",
      "Intégration d'interfaces élégantes et réactives avec Tailwind CSS",
      "Création d'APIs RESTful sécurisées et structurées",
      "Gestion optimisée des assets et des performances avec Vite"
    ]
  },
  {
    id: "babifab",
    title: "BabiFab Sound",
    category: "fullstack",
    badge: "Plateforme Musicale",
    bannerClass: "project-banner-babifab",
    desc: "Plateforme musicale et streaming audio complète conçue pour valoriser les artistes indépendants : lecteur audio interactif, gestion de playlists, catalogue dynamique et back-office Laravel.",
    tags: ["Laravel", "Audio Web API", "PHP", "UI/UX"],
    liveUrl: null,
    githubUrl: "https://github.com/DavidAtse/BabiFab-Sound",
    highlights: [
      "Lecteur audio interactif avec contrôles de lecture temps réel",
      "Gestion fluide des pistes audio, métadonnées et playlists",
      "Conception rigoureuse basée sur un cahier des charges fonctionnel et technique",
      "Interface d'administration Laravel pour la gestion du contenu musical",
      "Design moderne axé sur une excellente expérience auditeur"
    ]
  },
  {
    id: "apifilm",
    title: "API Film & Application Météo",
    category: "api",
    badge: "Intégration d'APIs REST",
    bannerClass: "project-banner-api",
    desc: "Applications web connectées à des services tiers : recherche de films en temps réel avec affiches et métadonnées, consultation des prévisions météorologiques géolocalisées avec gestion des erreurs asynchrones.",
    tags: ["Fetch API", "JavaScript ES6+", "Async / Await", "REST"],
    liveUrl: null,
    githubUrl: "https://github.com/DavidAtse/DetailEmployee",
    highlights: [
      "Maîtrise approfondie des requêtes Fetch et de l'asynchronisme (Async / Await)",
      "Traitement et affichage dynamique des structures JSON",
      "Gestion des états d'attente (loaders) et des cas d'erreurs réseau",
      "Interface visuelle attrayante en Glassmorphism"
    ]
  },
  {
    id: "banque",
    title: "Mini Banque Web",
    category: "fullstack api",
    badge: "Fintech & Logique Métier",
    bannerClass: "project-banner-banque",
    desc: "Simulateur interactif de gestion de comptes bancaires : historique des transactions, calculs d'intérêts et de soldes en temps réel, validation de formulaires et sécurité des flux.",
    tags: ["JavaScript", "Modélisation", "CSS Grid", "State Logic"],
    liveUrl: null,
    githubUrl: "https://github.com/DavidAtse/SinglePageWebSite",
    highlights: [
      "Mise en place d'une logique métier rigoureuse pour les calculs de débits/crédits",
      "Contrôle de conformité des montants et validation des règles de gestion",
      "Historique interactif mis à jour dynamiquement dans le DOM",
      "Mise en page modulaire et claire sous CSS Grid"
    ]
  },
  {
    id: "portfolio-interactif",
    title: "Portfolio Développeur Interactif",
    category: "php",
    badge: "Vitrine Personnelle",
    bannerClass: "project-banner-portfolio",
    desc: "Conception et développement d'un portfolio immersif et responsive mettant en valeur mes réalisations techniques, mes compétences et mon identité visuelle à travers des animations soignées.",
    tags: ["PHP", "JavaScript", "Responsive Design", "UI/UX", "CSS3 / Animations"],
    liveUrl: "https://david-portfolio.infinityfreeapp.com",
    githubUrl: "https://github.com/DavidAtse/portfolio",
    highlights: [
      "Architecture modulaire et structure de composants réutilisables pour une maintenance aisée",
      "Design responsive et ergonomique adapté à tous types d'écrans (Mobile, Tablette, Desktop)",
      "Intégration d'animations fluides pour une expérience utilisateur interactive et engageante",
      "Optimisation du référencement (SEO) et des performances de chargement"
    ]
  }
];
