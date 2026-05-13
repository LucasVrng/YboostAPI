import express, { json } from "express";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes.js";
import loginRoutes from "./src/routes/loginRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import favoriteRoutes from "./src/routes/favoriteRoutes.js";
import recipeRoutes from "./src/routes/recipesRoutes.js";
import ingredientsRoutes from "./src/routes/recipeIngredientsRoutes.js";

const app = express();

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
app.use("/api/users", userRoutes);
app.use("/api/favorites", favoriteRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api", ingredientsRoutes)
  
/** Start the API server. */
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`API en ligne sur http://localhost:${PORT}`),
);