# Installation et lancement

## Prérequis

- Node.js 18+ ou version compatible avec React 19 / Express 5
- npm
- MySQL local ou accessible

## Backend

1. Ouvrir un terminal dans `backend/`
2. Installer les dépendances :

```bash
cd backend
npm install
```

3. Lancer le serveur de développement :

```bash
npm run dev
```

4. Le backend écoute par défaut sur :

```
http://127.0.0.1:5000
```

## Frontend

1. Ouvrir un terminal dans `frontend/`
2. Installer les dépendances :

```bash
cd frontend
npm install
```

3. Lancer l’application React :

```bash
npm start
```

4. Le frontend s’exécute par défaut sur :

```
http://localhost:5173/
```

## Notes sur les variables d’environnement

Le projet ne charge pas de `.env` dans la version actuelle du code. La configuration MySQL est définie dans :

- `backend/src/config/db.js`

Actuellement, les valeurs sont :

- host: `localhost`
- user: `dev`
- password: `dev`
- database: `yboost_db`

Pour un environnement de production, il est conseillé de remplacer ces valeurs par des variables d’environnement et de ne pas les conserver en dur dans le code.

## Commandes utiles

### Backend

```bash
npm run dev
```

```bash
npm start
```

### Frontend

```bash
npm run dev
```

```bash
npm run build
```
