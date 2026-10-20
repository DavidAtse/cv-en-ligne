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
    id: "bibliotheque",
    title: "Ma Bibliothèque Web",
    category: "javascript front",
    badge: "JavaScript ES6 (POO) & LocalStorage",
    bannerClass: "project-banner-bibliotheque",
    desc: "Application web interactive de gestion et suivi de lectures : ajout de livres, bascule d'état (lu / non lu), suppression et persistance automatique des données via le LocalStorage du navigateur.",
    tags: ["JavaScript (POO)", "LocalStorage", "Manipulation DOM", "CSS3", "Vercel"],
    liveUrl: "https://bibliotheque-red-sigma.vercel.app",
    liveLabel: "Voir la démo (Vercel)",
    githubUrl: "https://github.com/DavidAtse/Bibliotheque",
    highlights: [
      "Conception orientée objet avec séparation stricte des classes (Livre, Bibliotheque) et logique découplée",
      "Persistance locale des données en temps réel via l'API Web LocalStorage",
      "Manipulation dynamique et réactive du DOM en JavaScript Vanilla moderne sans framework lourd",
      "Hébergement et déploiement continu sur la plateforme Vercel"
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
    liveUrl: "https://davedev.alwaysdata.net/portfolio/",
    liveLabel: "Visiter le portfolio",
    githubUrl: "https://github.com/DavidAtse/portfolio",
    highlights: [
      "Architecture modulaire et structure de composants réutilisables pour une maintenance aisée",
      "Design responsive et ergonomique adapté à tous types d'écrans (Mobile, Tablette, Desktop)",
      "Intégration d'animations fluides pour une expérience utilisateur interactive et engageante",
      "Optimisation du référencement (SEO) et des performances de chargement"
    ]
  },
  {
    id: "e-mairie-gmdi",
    title: "E-Mairie (GMDI)",
    category: "fullstack laravel php",
    badge: "Fullstack Angular 21 & Laravel 12",
    bannerClass: "project-banner-emairie",
    desc: "Plateforme municipale unifiée de Gestion Municipale Digitale Intégrée (GMDI) regroupant 7 modules métier (État civil, Finances, RH, Patrimoine, Services techniques, Urbanisme/SIG, Communication) avec API REST centralisée et authentification unique.",
    tags: ["Angular 21", "Laravel 12", "API REST", "Sanctum", "MySQL"],
    liveUrl: "https://e-mairie.voisilab.app/",
    liveLabel: "Accéder à E-Mairie",
    githubUrl: "https://github.com/DavidAtse/GMDI---Succ-s-perso.git",
    highlights: [
      "Architecture unifiée découplée Frontend SPA Angular 21 et API RESTful sous Laravel 12",
      "Conception et intégration de 7 modules métier communaux : État civil, Finances, RH, Patrimoine, Services techniques, Urbanisme / SIG et Communication",
      "Authentification centralisée et sécurisée avec jeton unique Laravel Sanctum (gmdi_token) et gestion des rôles / autorisations Spatie",
      "Optimisation des performances grâce à une architecture modulaire et le lazy loading complet côté Angular",
      "Projet d'envergure développé dans le cadre d'un stage à la Fabrique Numérique de l'UVCI et déployé en ligne"
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
    githubUrl: "https://github.com/DavidAtse/BabiFab.git",
    highlights: [
      "Lecteur audio interactif avec contrôles de lecture temps réel",
      "Gestion fluide des pistes audio, métadonnées et playlists",
      "Conception rigoureuse basée sur un cahier des charges fonctionnel et technique",
      "Interface d'administration Laravel pour la gestion du contenu musical",
      "Design moderne axé sur une excellente expérience auditeur"
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
    id: "imots-devinemot-ci",
    title: "iMots",
    category: "Jeu Ludo-Éducatif Web",
    badge: "PHP / JavaScript natif",
    bannerClass: "project-banner-imots",
    desc: "Plateforme web mobile interactive de devinette de mots 100 % ancrée dans la culture ivoirienne (nouchi, gastronomie, villes). Architecture légère avec sécurité anti-triche et synchronisation multi-appareils.",
    tags: ["PHP", "JavaScript", "Temps Réel", "Mobile-First"],
    liveUrl: "https://davedev.alwaysdata.net/imots/inscription/login.php",
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
    id: "cv-en-ligne",
    title: "CV Numérique & Portfolio Interactif",
    category: "react front",
    badge: "React 19 & Vite",
    bannerClass: "project-banner-cvenligne",
    desc: "Application web moderne de présentation professionnelle interactive : conception ultra-réactive sous React 19, interface futuriste en Glassmorphism avec filtres dynamiques, fenêtres modales détaillées et export PDF optimisé.",
    tags: ["React 19", "Vite", "JavaScript ES6+", "Glassmorphism", "Lucide Icons"],
    liveUrl: null,
    githubUrl: "https://github.com/DavidAtse/cv-en-ligne",
    highlights: [
      "Architecture moderne basée sur React 19 et Vite pour un bundle ultra-léger et des performances optimales",
      "Interface utilisateur haute fidélité avec design Glassmorphism, animations soignées et dark mode néon",
      "Système de filtrage dynamique des projets et fenêtres modales interactives avec navigation accessible",
      "Feuille de style d'impression dédiée (@media print) pour un export PDF propre et professionnel",
      "Organisation modulaire des composants et gestion centralisée des données de profil"
    ]
  },
  {
    id: "sbm-atelier",
    title: "Atelier de PERLAGE Sublimate — Système de Billetterie",
    category: "fullstack php",
    badge: "PHP 8.2 & JS Vanilla",
    bannerClass: "project-banner-sublimate",
    desc: "Plateforme web complète, légère et ultra-sécurisée de réservation de billets gérant le cycle de vente de bout en bout, intégrant une jauge stricte, des paiements Mobile Money et un tableau de bord de contrôle d'accès.",
    tags: ["PHP 8.2", "MySQL", "JavaScript ES6", "Webhook", "Mobile-First"],
    liveUrl: "https://davedev.alwaysdata.net/sublimate/",
    liveLabel: "Accéder à l'Atelier",
    githubUrl: "https://github.com/DavidAtse/sbm-atelier",
    highlights: [
      "Gestion automatisée d'une jauge stricte de 25 places avec réservation temporaire de 15 minutes et libération des paniers",
      "Intégration sécurisée des paiements Jèko / Wave Business avec traitement idempotent des webhooks et signature HMAC-SHA256",
      "Génération atomique des codes de confirmation (SBM-XXX) et envoi automatisé des billets par e-mail en HTML",
      "Espace staff protégé pour le check-in le jour J avec vérification instantanée des billets et détection des fraudes",
      "Architecture hautement sécurisée : rate-limiting IP, honeypot anti-bot, isolation stricte des secrets hors du webroot et en-têtes HTTP durcis"
    ]
  },
  {
    id: "taskly",
    title: "Taskly – Tableau de bord SaaS & Gestion de projets",
    category: "front angular",
    badge: "Angular & LibraryUI",
    bannerClass: "project-banner-taskly",
    desc: "Interface moderne, intuitive et 100% responsive développée avec Angular pour le LibraryUI Challenge, intégrant des composants phares et reproduisant fidèlement une maquette de tableau de bord SaaS.",
    tags: ["Angular", "TypeScript", "CSS", "GitHub Actions", "LibraryUI"],
    liveUrl: "https://davidatse.github.io/libraryui/",
    liveLabel: "Voir la démo (GitHub Pages)",
    githubUrl: "https://github.com/DavidAtse/libraryui",
    highlights: [
      "Intégration et mise en valeur de 4 composants LibraryUI (Navbar 9, Table interactive, Profil utilisateur et Formulaire de contact)",
      "Tableau de bord dynamique avec indicateurs clés (KPIs), courbe d'activité avec infobulles et diagramme de répartition en anneau",
      "Interface utilisateur immersive avec thème sombre (#111827), navigation latérale off-canvas responsive et bascule de thème clair/sombre",
      "Gestion avancée des tableaux (recherche en direct, filtrage, tri, sélection multiple et suppression avec Undo)",
      "Pipeline de déploiement continu (CI/CD) automatisé vers GitHub Pages via GitHub Actions"
    ]
  }
];
