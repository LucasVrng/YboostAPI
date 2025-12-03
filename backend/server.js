// backend/server.js
import express, { json } from "express";
import cors from "cors";
import recipes from "../data/recipes.js";
import ingredients from "../data/ingredients.js";
import recipeIngredients from "../data/recipeIngredients.js";

const app = express();
app.use(cors());
app.use(json());

// Liste de toutes les recettes
app.get("/api/recipes", (_req, res) => {
  res.json(recipes);
});

// Une recette par ID
app.get("/api/recipes/:id", (req, res) => {
  const recipe = recipes.find((r) => r.id === parseInt(req.params.id));
  let links;
  let recipeIngredientsList;
  let completeRecipe;

  if (!recipe) {
    return res.status(404).json({ message: "Recette non trouvée" });
  }
  links = recipeIngredients.filter((link) => link.recipe_id === recipe.id);
  recipeIngredientsList = links.map((link) => {
    const ingredient = ingredients.find(
      (ing) => ing.id === link.ingredients_id,
    );
    return ingredient;
  });
  completeRecipe = {
    ...recipe,
    ingredients: recipeIngredientsList,
  };
  res.json(completeRecipe);
});

// Ajouter une nouvelle recette
app.post("/api/recipes", (req, res) => {
  const newRecipe = { id: Date.now(), ...req.body };

  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`API en ligne sur http://localhost:${PORT}`),
);
