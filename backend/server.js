import express, { json } from "express";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";

import recipes from "../data/recipes.js";
import ingredients from "../data/ingredients.js";
import recipeIngredients from "../data/recipeIngredients.js";

const app = express();

// --- Middlewares ---
// Autorise les requêtes depuis l'extérieur et permet de lire le JSON entrant
app.use(cors());
app.use(json());

// --- ROUTES AUTHENTIFICATION ---
// Redirige tout ce qui commence par "/api/auth" (Login, Register) vers authRoutes
app.use("/api/auth", authRoutes);

// --- ROUTES GESTION UTILISATEURS ---
// Redirige tout ce qui commence par "/api/users" (Suppression, etc.) vers userRoutes
app.use("/api/users", userRoutes);

// --- ROUTES RECETTES ---
// Liste de toutes les recettes
app.get("/api/recipes", (_req, res) => {
  res.json(recipes);
});

// Une recette par ID avec jointure manuelle des ingrédients
app.get("/api/recipes/:id", (req, res) => {
  const recipe = recipes.find((r) => r.id === parseInt(req.params.id));
  if (!recipe) return res.status(404).json({ message: "Recette non trouvée" });

  const links = recipeIngredients.filter(
    (link) => link.recipe_id === recipe.id,
  );
  const recipeIngredientsList = links.map((link) =>
    ingredients.find((ing) => ing.id === link.ingredients_id),
  );

  res.json({ ...recipe, ingredients: recipeIngredientsList });
});

// Ajouter une nouvelle recette (stockage mémoire temporaire)
app.post("/api/recipes", (req, res) => {
  const newRecipe = { id: Date.now(), ...req.body };

  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
});

// Lancement du serveur
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`API en ligne sur http://localhost:${PORT}`),
);
