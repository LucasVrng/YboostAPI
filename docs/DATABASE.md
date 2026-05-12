# Schéma de données

## Base de données MySQL

La partie back-end utilise une base MySQL configurée dans `backend/src/config/db.js`.

### Configuration observée

- Base de données : `yboost_db`
- Utilisateur : `dev`
- Mot de passe : `dev`
- Hôte : `localhost`

### Table `User`

Le code interagit avec une table `User` qui expose les colonnes suivantes :

- `id` : identifiant numérique de l’utilisateur
- `username` : nom d’utilisateur
- `mail` : adresse email
- `password` : mot de passe hashé avec bcrypt
- `favorite` : identifiant de recette favori (nullable)

### Relations et usage

- Les opérations d’authentification et de gestion utilisateur (`register`, `login`, `delete`, `update`) reposent sur la table `User`.
- Le champ `favorite` semble stocker un identifiant de recette et est utilisé par les routes de favoris.

## Modèles de données côté application

Le backend stocke actuellement les recettes dans des fichiers `data/` en mémoire, non persistés dans la base MySQL.

### `data/recipes.js`

Chaque recette contient :

- `id`
- `name`
- `time`
- `instructions`
- `country`
- `image_url`
- `how_many`

### `data/ingredients.js`

Chaque ingrédient contient :

- `id`
- `name`

### `data/recipeIngredients.js`

La table d’association relie :

- `recipe_id`
- `ingredients_id`

Cette relation est utilisée par l’endpoint `GET /api/recipes/:id` pour reconstituer la liste des ingrédients d’une recette.

## Observations

- Les recettes ne sont pas gérées en base de données relationnelle dans la version actuelle.
- La base relationnelle est utilisée uniquement pour les utilisateurs et leurs favoris.
- Le modèle de données de recette est donc hybride :
  - persisté en mémoire par les fichiers `data/*.js`
  - enrichi à la volée via `recipeIngredients.js`
