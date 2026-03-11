import express, { json } from "express";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import recipesRoutes from "./src/routes/recipesRoutes.js";

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

app.use("/api", recipesRoutes);

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
