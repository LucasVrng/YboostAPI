# YboostAPI

Application web fullstack composée d'un backend Node.js/Express et d'un frontend React.

## Structure du projet

\`\`\`
/backend      # API Express et services métiers
/frontend     # interface React
/data         # données en mémoire pour les recettes et ingrédients
/docs         # documentation technique
\`\`\`

## Backend

- Point d'entrée : `backend/server.js`
- Serveur Express sur `http://127.0.0.1:5000`
- Routes utilisateur, favoris et recettes
- Base MySQL utilisée pour l'authentification et la gestion des utilisateurs
- Recettes chargées en mémoire depuis `data/` (non persistées dans la base)

## Frontend

- Code React dans `frontend/src`
- Routes client :
  - `/` : liste des recettes
  - `/recipe` : création de recette
  - `/recipe/edit/:id` : édition de recette
  - `/recipe/:id` : détails d'une recette
- Appels API vers `http://127.0.0.1:5000/api`

## Installation et exécution

### Backend

\`\`\`bash
cd backend
npm install
npm run dev
\`\`\`

### Frontend

\`\`\`bash
cd frontend
npm install
npm start
\`\`\`

## Documentation complémentaire

Les documents techniques sont disponibles dans le dossier `docs/` :

- `docs/INSTALL.md`
- `docs/DATABASE.md`
- `docs/ENDPOINTS.md`