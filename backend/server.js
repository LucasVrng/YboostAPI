import express, { json } from "express";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import recipesRoutes from "./src/routes/recipesRoutes.js";

import pool from "./src/config/db.js"

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
// Redirige tout ce qui commence par "/api/recipes" (Suppression, etc.) vers recipesRoutes
app.use("/api/recipes", recipesRoutes);

// Lancement du serveur
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`API en ligne sur http://localhost:${PORT}`),
);
