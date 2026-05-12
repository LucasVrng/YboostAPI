import express, { json } from "express";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes.js";
import loginRoutes from "./src/routes/loginRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import recipeRoutes from "./src/routes/recipesRoutes.js";
import favoriteRoutes from "./src/routes/favoriteRoutes.js";
import recipeIngredientRoutes from "./src/routes/recipeIngredientsRoutes.js";

import pool from "./src/config/db.js"

const app = express();

app.use(cors());
app.use(json());

app.use("/api/auth", authRoutes);
app.use("/api/auth", loginRoutes);
app.use("/api/users", userRoutes);
app.use("/api/favorites", favoriteRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api", recipeIngredientRoutes); // 👈 ajouter

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`API en ligne sur http://localhost:${PORT}`),
);