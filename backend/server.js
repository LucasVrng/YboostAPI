import express, { json } from "express";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes.js";
import loginRoutes from "./src/routes/loginRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import favoriteRoutes from "./src/routes/favoriteRoutes.js";

import recipes from "../data/recipes.js";
import ingredients from "../data/ingredients.js";
import recipeIngredients from "../data/recipeIngredients.js";

const app = express();

/**
 * @file server.js
 * @description Backend API entrypoint and route mounting.
 */

/** Configure global middlewares. */
app.use(cors());
app.use(json());
app.use((req, res, next) => {
  if (req.path.startsWith("/api/recipes")) {
    console.log(`[DEBUG] ${req.method} ${req.path}`);
    console.log("[DEBUG] Request body:", req.body);
  }
  next();
});

/** Mount authentication routes under /api/auth. */
app.use("/api/auth", authRoutes);
app.use("/api/auth", loginRoutes);

/** Mount user and favorite routes. */
app.use("/api/users", userRoutes);
app.use("/api/favorites", favoriteRoutes);

/** Return all in-memory recipes. */
app.get("/api/recipes", (_req, res) => {
  res.json(recipes);
});

/** Return one recipe with its ingredients assembled from local datasets. */
app.get("/api/recipes/:id", (req, res) => {
  const recipe = recipes.find((r) => r.id === parseInt(req.params.id));
  if (!recipe) {
    return res
      .status(404)
      .json({ error: "NotFound", details: "Recette non trouvée" });
  }

  const links = recipeIngredients.filter(
    (link) => link.recipe_id === recipe.id,
  );
  const recipeIngredientsList = links.map((link) =>
    ingredients.find((ing) => ing.id === link.ingredients_id),
  );

  res.json({ ...recipe, ingredients: recipeIngredientsList });
});

/** Add a recipe to in-memory storage (non-persistent). */
app.post("/api/recipes", (req, res) => {
  console.log("[DEBUG] POST /api/recipes body:", req.body);
  const { ingredients: ingredientsString, ...recipeData } = req.body;
  const newRecipe = { id: Date.now(), ...recipeData };

  recipes.push(newRecipe);

  // Handle ingredients
  if (ingredientsString) {
    const ingredientNames = ingredientsString.split(',').map(name => name.trim());
    console.log("[DEBUG] Parsed ingredient names:", ingredientNames);
    ingredientNames.forEach(name => {
      const ingredient = ingredients.find(ing => ing.name === name);
      if (ingredient) {
        recipeIngredients.push({ recipe_id: newRecipe.id, ingredients_id: ingredient.id });
      } else {
        console.log("[DEBUG] Ingredient not found in dataset:", name);
      }
    });
  }

  console.log("[DEBUG] Created recipe:", newRecipe);
  res.status(201).json(newRecipe);
});

/** Update a recipe in in-memory storage. */
app.put("/api/recipes/:id", (req, res) => {
  console.log("[DEBUG] PUT /api/recipes/:id body:", req.body);
  const index = recipes.findIndex((r) => r.id === parseInt(req.params.id));
  if (index === -1) {
    return res
      .status(404)
      .json({ error: "NotFound", details: "Recette non trouvée" });
  }

  const updatedRecipe = { ...recipes[index], ...req.body };
  recipes[index] = updatedRecipe;
  console.log("[DEBUG] Updated recipe:", updatedRecipe);
  res.json(updatedRecipe);
});

/** Start the API server. */
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`API en ligne sur http://localhost:${PORT}`),
);
