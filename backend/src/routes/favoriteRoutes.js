import express from "express";
import {
  addFavorite,
  getUserFavorites,
  removeFavorite,
} from "../controllers/favoriteController.js";

const router = express.Router();

/**
 * @file favoriteRoutes.js
 * @description Définition des routes pour la gestion des favoris.
 */

// Route pour ajouter un favori (attend { userId, favorite } dans le corps de la requête)
router.post("/", addFavorite);

// Route pour supprimer le favori d'un utilisateur (attend l'ID de l'utilisateur dans l'URL)
router.delete("/:userId/:recipeId", removeFavorite);

// Route pour récupérer le favori d'un utilisateur donné
router.get("/user/:userId", getUserFavorites);

export default router;
