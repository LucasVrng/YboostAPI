// backend/server.js
import express, { json } from "express";
import cors from "cors";
import recipes from "../data/recipes.js";

const app = express();
app.use(cors());
app.use(json());

// 🧾 Liste de toutes les recettes
app.get("/api/recipes", (req, res) => {
  res.json(recipes);
});

// 🍽️ Une recette par ID
app.get("/api/recipes/:id", (req, res) => {
  const recipe = recipes.find(r => r.id === parseInt(req.params.id));
  if (!recipe) {
    return res.status(404).json({ message: "Recette non trouvée" });
  }
  res.json(recipe);
});

// ➕ Ajouter une nouvelle recette
app.post("/api/recipes", (req, res) => {
  const newRecipe = { id: Date.now(), ...req.body };
  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ API en ligne sur http://localhost:${PORT}`));
