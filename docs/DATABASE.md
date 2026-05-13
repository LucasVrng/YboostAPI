# Schéma de données

## Base de données MySQL

La partie back-end utilise une base MySQL configurée dans `backend/src/config/db.js`.

### Configuration

- Base de données : `yboost_db`
- Utilisateur : `dev`
- Mot de passe : `dev`
- Hôte : `localhost`

---

## Tables

### `country`

Référentiel des pays d'origine des recettes.

| Colonne | Type | Description |
|---|---|---|
| `id` | INT, PK, AUTO_INCREMENT | Identifiant unique |
| `name` | VARCHAR(100), UNIQUE | Nom complet du pays (ex: "France") |

---

### `recipes`

Table principale des recettes.

| Colonne | Type | Description |
|---|---|---|
| `id` | INT, PK, AUTO_INCREMENT | Identifiant unique |
| `name` | VARCHAR(255) | Nom de la recette |
| `time` | INTEGER | Temps de cuisson (en minutes) |
| `instructions` | TEXT | Étapes de préparation |
| `country_id` | INTEGER, FK | Référence vers `country(id)` |
| `image_url` | TEXT | URL de l'image (optionnel) |
| `how_many` | INTEGER | Nombre de personnes |
| `ingredients_summary` | TEXT | Résumé textuel des ingrédients |
| `is_vegan` | BOOLEAN | Indique si la recette est végane |

---

### `ingredients`

Référentiel des ingrédients.

| Colonne | Type | Description |
|---|---|---|
| `id` | INT, PK, AUTO_INCREMENT | Identifiant unique |
| `name` | VARCHAR(255) | Nom de l'ingrédient |

---

### `recipeIngredients`

Table d'association entre recettes et ingrédients (relation many-to-many).

| Colonne | Type | Description |
|---|---|---|
| `recipe_id` | INTEGER, FK | Référence vers `recipes(id)` |
| `ingredient_id` | INTEGER, FK | Référence vers `ingredients(id)` |

---

### `User`

Table des utilisateurs de l'application.

| Colonne | Type | Description |
|---|---|---|
| `id` | INT, PK, AUTO_INCREMENT | Identifiant unique |
| `username` | VARCHAR(255) | Nom d'utilisateur |
| `password` | VARCHAR(255) | Mot de passe hashé (bcrypt) |
| `email` | VARCHAR(255) | Adresse email |
| `verified` | BOOLEAN, défaut 0 | Compte vérifié ou non |
| `admin` | BOOLEAN, défaut 0 | Droits administrateur |

---

### `UserFav`

Table d'association entre utilisateurs et recettes favorites (relation many-to-many).

| Colonne | Type | Description |
|---|---|---|
| `user_id` | INTEGER, FK | Référence vers `User(id)` |
| `recipe_id` | INTEGER, FK | Référence vers `recipes(id)` |

---

### `UserLike`

Table de gestion des likes par utilisateur.

| Colonne | Type | Description |
|---|---|---|
| `user_id` | INTEGER, FK | Référence vers `User(id)` |
| `recipe_id` | INTEGER, FK | Référence vers `recipes(id)` |
| `can_like` | BOOLEAN, défaut 1 | Indique si l'utilisateur peut encore liker |

---

## Relations

```
country (1) ──── (N) recipes (N) ──── (N) ingredients
                     │                    via recipeIngredients
                     │
User (N) ──── (N) recipes   (via UserFav)
User (N) ──── (N) recipes   (via UserLike)
```