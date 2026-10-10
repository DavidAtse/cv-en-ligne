export const candidateData = {
  name: "DAVID ATSÉ",
  role: "DÉVELOPPEUR WEB & FULLSTACK",
  tagline: "RESUME | 2026",
  email: "daatsey24@gmail.com",
  github: "https://github.com/AtseDavid",
  githubDisplay: "GITHUB.COM/ATSEDAVID",
  location: "Abidjan, Côte d'Ivoire & Télétravail",
  status: "DISPONIBLE POUR PROJETS & CDI / CDD",
  bio: "Développeur Web & Fullstack passionné par la conception d'applications web modernes, réactives et hautement performantes. Doté d'une solide expertise en front-end (React, Vite, JavaScript ES6+) et back-end (PHP, Laravel, APIs REST), je m'attache à créer des expériences utilisateur fluides et à relever des défis techniques stimulants."
};

export const educationData = [
  {
    id: "edu1",
    title: "Formation Développement Web & Mobile",
    institution: "Spécialisation Ingénierie Web",
    date: "2023 — 2025",
    desc: "Spécialisation en ingénierie logicielle web, architectures modernes (React, Vite, Node, Laravel) et conception d'applications évolutives."
  },
  {
    id: "edu2",
    title: "Baccalauréat Scientifique & Technologique",
    institution: "Sciences & Informatique",
    date: "2020 — 2023",
    desc: "Solides fondations en algorithmique, logique mathématique, programmation informatique et sciences des données."
  }
];

export const experienceData = [
  {
    id: "exp1",
    title: "Projets Web & Développeur Freelance",
    role: "Développeur Web Fullstack",
    date: "2024 — Présent",
    desc: "Conception d'applications web complètes de A à Z (Pierres Vivantes, BabiFab Sound) : intégration front-end réactive, création d'APIs RESTful avec Laravel, optimisation des flux."
  },
  {
    id: "exp2",
    title: "Développements & Intégrations",
    role: "Développeur Front-End & Intégrateur",
    date: "2023 — 2024",
    desc: "Création d'interfaces web adaptatives (plateforme Emploi-Jeune, API Film/Météo), résolution de bugs, intégration d'APIs tierces et respect des standards W3C."
  }
];

export const skillsData = [
  "React 19 & Vite",
  "JavaScript (ES6+)",
  "PHP & Laravel",
  "HTML5 & CSS3",
  "Tailwind CSS",
  "APIs RESTful",
  "Responsive Web Design",
  "UI/UX Fundamentals",
  "Git & GitHub",
  "MySQL & Base de données",
  "Node.js Basics",
  "Architecture Web"
];

export const projectsData = [
  {
    id: "pierres",
    title: "Pierres Vivantes",
    category: "fullstack react",
    badge: "Fullstack React + Laravel",
    bannerClass: "project-banner-pierres",
    desc: "Application web complète avec architecture découplée : Frontend dynamique sous React 19 & React Router, backend API Laravel & TailwindCSS, gestion de données interactive.",
    tags: ["React 19", "Laravel", "Tailwind", "Vite"],
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
    highlights: [
      "Lecteur audio interactif avec contrôles de lecture temps réel",
      "Gestion fluide des pistes audio, métadonnées et playlists",
      "Conception rigoureuse basée sur un cahier des charges fonctionnel et technique",
      "Interface d'administration Laravel pour la gestion du contenu musical",
      "Design moderne axé sur une excellente expérience auditeur"
    ]
  },
  {
    id: "emploi",
    title: "Plateforme Emploi Jeune",
    category: "react fullstack",
    badge: "Recrutement & Insertion",
    bannerClass: "project-banner-emploi",
    desc: "Solution web dédiée à l'orientation et à la mise en relation entre recruteurs et jeunes talents. Filtrage d'offres en direct, dépôt de candidatures et interface ergonomique.",
    tags: ["JavaScript", "HTML5/CSS3", "Responsive", "UI moderne"],
    highlights: [
      "Filtrage instantané et recherche multi-critères des opportunités",
      "Formulaires de contact et de candidature avec validation en temps réel",
      "Architecture front-end responsive pensée pour une utilisation sur smartphone et tablette",
      "Structure sémantique accessible et optimisée pour le référencement"
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
    highlights: [
      "Mise en place d'une logique métier rigoureuse pour les calculs de débits/crédits",
      "Contrôle de conformité des montants et validation des règles de gestion",
      "Historique interactif mis à jour dynamiquement dans le DOM",
      "Mise en page modulaire et claire sous CSS Grid"
    ]
  },
  {
    id: "netflix",
    title: "Netflix Clone & Réseau Social",
    category: "react",
    badge: "Streaming UI & Réseau Social",
    bannerClass: "project-banner-netflix",
    desc: "Reproduction d'interfaces complexes : bannières héro dynamiques, carrousels de vidéos défilants, flux d'actualités avec likes et commentaires en temps réel.",
    tags: ["UI/UX Avancé", "JavaScript", "Carrousel CSS", "Composants"],
    highlights: [
      "Développement de carrousels défilants fluides en CSS & JS",
      "Gestion d'interactions sociales dynamiques (likes, ajouts aux favoris)",
      "Ambiance sombre cinématographique et respect des codes UI modernes",
      "Composants réutilisables et code maintenable"
    ]
  }
];
