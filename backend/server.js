import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const recipesPath = path.join(__dirname, "data", "recipes.json");

const getRecipes = () =>
  JSON.parse(fs.readFileSync(recipesPath, "utf-8"));

app.get("/api/recipes", (req, res) => {
  res.json(getRecipes());
});

app.get("/api/recipes/:id", (req, res) => {
  const recipes = getRecipes();
  const recipe = recipes.find(r => r.id === Number(req.params.id));

  if (!recipe) {
    return res.status(404).json({ error: "Recette introuvable" });
  }

  res.json(recipe);
});

app.listen(5000, () =>
  console.log("✅ API en ligne sur http://localhost:5000")
);
