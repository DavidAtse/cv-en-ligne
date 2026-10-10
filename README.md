# 🌌 CV en Ligne Futuriste — David Atsé

<div align="center">

  ![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![Vite](https://img.shields.io/badge/Vite-6.0.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-1.16.0-F56565?style=for-the-badge&logo=lucide&logoColor=white)
  ![CSS3](https://img.shields.io/badge/Style-Glassmorphism_Cyber_Neon-a855f7?style=for-the-badge&logo=css3&logoColor=white)
  ![License](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)

  <p align="center">
    <strong>CV en ligne et portfolio interactif de David Atsé, Développeur Web & Fullstack.</strong><br>
    Conçu avec React 19 et Vite, reproduisant une interface moderne <em>Cyber-Luxe & Glassmorphism</em> avec des finitions violettes luminescentes.
  </p>

  <p align="center">
    <a href="#-fonctionnalités-clés">Fonctionnalités</a> •
    <a href="#-arborescence-détaillée-des-fichiers">Architecture & Fichiers</a> •
    <a href="#-lancement-en-local">Installation</a> •
    <a href="#-comment-personnaliser-vos-informations">Personnalisation</a> •
    <a href="#-guide-de-mise-en-ligne-github--vercel">Déploiement</a>
  </p>

</div>

---

## 🌟 Aperçu & Démarche

Ce portfolio a été conçu pour allier **élégance visuelle** et **rigueur technique** :
- **Design Cyber-Luxe** : Palette sombre (`#070312`), reflets de verre dépoli (*backdrop-filter: blur*), halos d'ambiance et néons violets.
- **Technologies modernes** : Composants React 19 ultra-légers, bundler Vite pour des performances instantanées, icônes SVG haute précision via Lucide.
- **Expérience recruteur** : Consultation fluide de vos expériences, formations, compétences et de vos **6 projets phares** avec fiches techniques détaillées.

---

## ✨ Fonctionnalités Clés

- 🎭 **Effet Photo Commutable** : Bouton dans la barre de navigation permettant de basculer en 1 clic entre le rendu *Cyber Synthwave* (reflets néon violet) et le rendu *Naturel* de la photo d'origine.
- 📂 **Filtrage Dynamique des Projets** : Triez vos réalisations en temps réel (*Tous*, *Fullstack*, *React / Front*, *APIs & Apps*).
- 🔍 **Fiches Techniques Modales** : Cliquez sur *"Détails & Stack"* pour ouvrir une vue détaillée de l'architecture et des points forts de chaque projet.
- 📋 **Copie de Contact Rapide** : Copie l'adresse email dans le presse-papier avec confirmation visuelle (*Toast animé*).
- 🖨️ **Format Impression & Export PDF** : Feuille de style dédiée `@media print` qui masque les éléments superflus et génère un CV propre et épuré prêt pour l'embauche.
- 📱 **100% Responsive** : Adaptation parfaite sur smartphones, tablettes et écrans haute résolution.

---

## 📁 Arborescence Détaillée des Fichiers

Voici l'organisation complète du projet et le rôle précis de chaque élément :

```text
cv-en-ligne/
├── 📁 public/
│   └── 🖼️ profile.jpg               # Image de profil statique accessible publiquement
│
├── 📁 src/
│   ├── 📁 assets/
│   │   └── 🖼️ profile.jpg           # Image de profil importée dans les composants React
│   │
│   ├── 📁 components/               # Composants modulaires et indépendants
│   │   ├── 🧩 TopNav.jsx            # Barre flottante supérieure (Statut, bouton effet photo, copie email, PDF)
│   │   ├── 🧩 SystemHeader.jsx      # En-tête de style terminal (Label 'RESUME | 2026', onglet aux 3 points)
│   │   ├── 🧩 ProfileCard.jsx       # Carte principale (Cadre photo, halo néon, titre, bio, liens GitHub/Email)
│   │   ├── 🧩 ExperienceEducationCard.jsx # Timeline lumineuse (Formation & Expérience) et compétences
│   │   ├── 🧩 ProjectsSection.jsx   # Grille des 6 projets avec onglets de filtrage par catégorie
│   │   ├── 🧩 ProjectModal.jsx      # Fenêtre modale affichant la fiche technique détaillée du projet
│   │   ├── 🧩 Footer.jsx            # Pied de page vitré avec bouton de retour fluide vers le haut
│   │   └── 🧩 Toast.jsx             # Notification éphémère de confirmation (ex: 'Email copié')
│   │
│   ├── 📁 data/
│   │   └── 📄 resumeData.js         # SOURCE UNIQUE DE DONNÉES (Nom, bio, timeline, skills, projets)
│   │
│   ├── 📄 App.jsx                   # Composant racine orchestrant les états globaux (filtres, modale, toast)
│   ├── 📄 main.jsx                  # Point d'entrée React montant l'application dans le DOM
│   └── 🎨 index.css                 # Feuilles de style Glassmorphism, animations néon et règles d'impression
│
├── 📄 .gitignore                    # Fichiers et dossiers à exclure de Git (node_modules, dist, logs)
├── 📄 index.html                    # Fichier HTML hôte pour Vite (imports des polices Google Fonts)
├── 📄 package.json                  # Dépendances (React, Lucide, Vite) et commandes npm
├── 📄 package-lock.json             # Verrouillage exact des versions des packages installés
├── 📄 vite.config.js                # Configuration du compilateur Vite avec le plugin React
└── 📄 README.md                     # Documentation complète du projet (ce fichier)
```

### 🔎 Rôle des Fichiers Clés

| Fichier | Description |
| :--- | :--- |
| **`src/data/resumeData.js`** | **Le fichier le plus important pour vous.** C'est ici que sont écrites toutes vos informations. Vous n'avez pas besoin de toucher au code JSX pour mettre à jour vos dates, ajouter un projet ou modifier une compétence. |
| **`src/components/ProfileCard.jsx`** | Gère l'affichage de votre photo, l'application du filtre CSS cyber-lumineux et la typographie métallique du nom. |
| **`src/components/ProjectsSection.jsx`** | Gère le système de filtre par catégorie (*fullstack*, *react*, *api*) et la génération des cartes avec icônes. |
| **`src/index.css`** | Contient toutes les variables graphiques (`:root`), les dégradés violets, les effets de flou (*backdrop-filter*) et les médias queries. |

---

## 💻 Lancement en Local

### Prérequis
- [Node.js](https://nodejs.org/) (version 18 ou supérieure)
- Un terminal (PowerShell, Bash ou le terminal intégré d'Antigravity IDE)

### 1. Cloner le projet
```bash
git clone https://github.com/DavidAtse/cv-en-ligne.git
cd cv-en-ligne
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Lancer le serveur de développement
```bash
npm run dev
```
L'application sera accessible instantanément sur : **[http://localhost:5173](http://localhost:5173)**.

### 4. Compiler pour la production
```bash
npm run build
```
Le dossier optimisé et minifié sera généré dans `dist/`.

---

## ✏️ Comment Personnaliser Vos Informations

Toutes vos données sont centralisées dans **[`src/data/resumeData.js`](src/data/resumeData.js)** :

1. **Modifier votre profil / contact** :
   Modifiez l'objet `candidateData` (nom, rôle, email, lien GitHub, bio).
2. **Ajouter ou modifier une formation** :
   Ajoutez un élément dans le tableau `educationData`.
3. **Mettre à jour vos expériences** :
   Ajoutez un bloc dans le tableau `experienceData`.
4. **Ajouter des compétences** :
   Ajoutez simplement une chaîne de caractères dans le tableau `skillsData`.
5. **Ajouter un nouveau projet** :
   Ajoutez un objet dans le tableau `projectsData` avec son titre, sa catégorie, sa description et ses technologies !

---

## 🚀 Guide de Mise en Ligne (GitHub & Vercel)

### Étape 1 : Initialiser et Pousser sur GitHub

1. Initialisez Git dans le dossier :
   ```bash
   git init
   git add .
   git commit -m "feat: Initialisation de mon CV en ligne en React 19 & Vite"
   ```

2. Créez un nouveau dépôt vide nommé **`cv-en-ligne`** sur votre compte [GitHub](https://github.com/new).

3. Liez votre dépôt local et poussez le code :
   ```bash
   git branch -M main
   git remote add origin https://github.com/DavidAtse/cv-en-ligne.git
   git push -u origin main
   ```

---

### Étape 2 : Déploiement Gratuit sur Vercel (En 1 minute)

1. Rendez-vous sur **[vercel.com](https://vercel.com)** et connectez-vous avec votre compte **GitHub**.
2. Cliquez sur **"Add New..."** puis sur **"Project"**.
3. Sélectionnez votre dépôt **`cv-en-ligne`** dans la liste.
4. Laissez les réglages par défaut (Vercel détecte automatiquement *Vite*).
5. Cliquez sur **"Deploy"**.
6. ⏱️ En 20 secondes, votre CV est en ligne avec un lien mondial gratuit en HTTPS (ex: `https://david-atse-cv.vercel.app`) !

> 💡 **Le + magique** : Dès que vous modifierez votre CV et ferez un `git push`, Vercel redéploiera votre site automatiquement sans que vous n'ayez rien d'autre à faire !

---

## 👨‍💻 Auteur

**David Atsé**
- 💼 Développeur Web & Fullstack
- 📧 Email : [daatsey24@gmail.com](mailto:daatsey24@gmail.com)
- 🐙 GitHub : [@DavidAtse](https://github.com/DavidAtse)

---

## 📄 Licence

Ce projet est sous licence [MIT](LICENSE). Libre d'utilisation et d'inspiration.
