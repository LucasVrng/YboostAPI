# API - Endpoints

Base path : `/api`

## Authentification

### POST `/api/auth/register`

- Description : crée un nouvel utilisateur.
- Corps de la requête :

```json
{
  "username": "string",
  "mail": "string",
  "password": "string"
}
```

- Réponses possibles :
  - `201` : inscription réussie
  - `400` : champs manquants
  - `409` : email déjà utilisé
  - `500` : erreur serveur

### POST `/api/auth/login`

- Description : authentifie un utilisateur par email ou nom d’utilisateur.
- Corps de la requête :

```json
{
  "username": "string", // optionnel
  "mail": "string",     // optionnel
  "password": "string"
}
```

- Réponses possibles :
  - `200` : connexion réussie
  - `400` : champs manquants
  - `401` : identifiants incorrects
  - `500` : erreur serveur

## Utilisateurs

### DELETE `/api/users/:id`

- Description : supprime un utilisateur existant.
- Paramètre :
  - `id` : identifiant utilisateur
- Réponses possibles :
  - `200` : suppression réussie
  - `404` : utilisateur introuvable
  - `500` : erreur serveur

### PUT `/api/users/:id`

- Description : met à jour un utilisateur existant.
- Paramètres :
  - `id` : identifiant utilisateur
- Corps de la requête :

```json
{
  "username": "string",
  "mail": "string",
  "password": "string",
  "favorite": 123
}
```

- Réponses possibles :
  - `200` : mise à jour réussie
  - `400` : aucune donnée à modifier
  - `404` : utilisateur introuvable
  - `409` : email déjà utilisé
  - `500` : erreur serveur

## Favoris

### POST `/api/favorites`

- Description : ajoute un favori pour un utilisateur.
- Corps de la requête :

```json
{
  "userId": 1,
  "favorite": 42
}
```

- Réponses possibles :
  - `200` : favori ajouté
  - `400` : identifiants invalides
  - `404` : utilisateur introuvable
  - `500` : erreur serveur

### DELETE `/api/favorites/:id`

- Description : supprime le favori d’un utilisateur.
- Paramètre :
  - `id` : identifiant utilisateur
- Réponses possibles :
  - `200` : favori supprimé
  - `400` : identifiant invalide
  - `404` : utilisateur introuvable
  - `500` : erreur serveur

### GET `/api/favorites/user/:userId`

- Description : récupère le favori d’un utilisateur.
- Paramètre :
  - `userId` : identifiant utilisateur
- Réponses possibles :
  - `200` : favori retourné
  - `400` : identifiant invalide
  - `404` : utilisateur introuvable
  - `500` : erreur serveur

## Recettes

### GET `/api/recipes`

- Description : liste toutes les recettes en mémoire.
- Réponse : `200`
- Remarque : les recettes sont chargées depuis `data/recipes.js`.

### GET `/api/recipes/:id`

- Description : retourne une recette unique avec sa liste d’ingrédients.
- Paramètre :
  - `id` : identifiant de la recette
- Réponses possibles :
  - `200` : recette retournée
  - `404` : recette non trouvée

### POST `/api/recipes`

- Description : ajoute une nouvelle recette en mémoire.
- Corps de la requête :

```json
{
  "name": "string",
  "time": 30,
  "instructions": "string",
  "country": "string",
  "image_url": "string",
  "how_many": 4,
  "ingredients": "ingredient1, ingredient2",
  "is_vegan": "string"
}
```

- Réponse : `201` avec l’objet recette créé.
- Remarque : l’endpoint traite `ingredients` comme une chaîne de caractères séparée par des virgules et lie chaque élément au dataset `data/ingredients.js`.

### PUT `/api/recipes/:id`

- Description : met à jour une recette en mémoire.
- Paramètre :
  - `id` : identifiant de la recette
- Corps de la requête : mêmes champs que pour la création.
- Réponses possibles :
  - `200` : recette mise à jour
  - `404` : recette non trouvée

## Notes de connexion

- Le frontend utilise l’URL fixe `http://127.0.0.1:5000/api` dans les composants React.
- La partie client n’a pas de configuration de proxy centralisée dans le code source visible.
