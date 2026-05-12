import {
  addFavoriteForUser,
  fetchUserFavorite,
  removeFavoriteForUser,
} from "../services/favoriteService.js";

/**
 * @file favoriteController.js
 * @description Contrôleur HTTP pour la gestion des favoris.
 * Les contrôleurs font le lien entre la requête HTTP (req, res) et la logique métier (services).
 */

/**
 * Ajoute un favori pour un utilisateur.
 * @param {import("express").Request} req - La requête (attend userId et favorite dans le body)
 * @param {import("express").Response} res - La réponse
 */
export const addFavorite = async (req, res) => {
  try {
    const { userId, favorite } = req.body;
    const result = await addFavoriteForUser(userId, favorite);
    return res.status(200).json(result);
  } catch (error) {
    if (error.status) {
      return res
        .status(error.status)
        .json({ error: error.error, details: error.details });
    }

    console.error("Error in addFavorite:", error);
    return res.status(500).json({
      error: "InternalServerError",
      details: "Erreur serveur.",
    });
  }
};

/**
 * Supprime le favori d'un utilisateur.
 * @param {import("express").Request} req - La requête (attend l'ID utilisateur dans les paramètres de l'URL)
 * @param {import("express").Response} res - La réponse
 */
export const removeFavorite = async (req, res) => {
  try {
    const result = await removeFavoriteForUser(req.params.id);
    return res.status(200).json({
      ...result,
      details: "Favori supprime avec succes.",
    });
  } catch (error) {
    if (error.status) {
      return res
        .status(error.status)
        .json({ error: error.error, details: error.details });
    }

    console.error("Error in removeFavorite:", error);
    return res.status(500).json({
      error: "InternalServerError",
      details: "Erreur serveur.",
    });
  }
};

/**
 * Récupère le favori d'un utilisateur spécifique.
 * @param {import("express").Request} req - La requête (attend l'ID utilisateur dans les paramètres de l'URL)
 * @param {import("express").Response} res - La réponse
 */
export const getUserFavorites = async (req, res) => {
  try {
    const result = await fetchUserFavorite(req.params.userId);
    return res.status(200).json(result);
  } catch (error) {
    if (error.status) {
      return res
        .status(error.status)
        .json({ error: error.error, details: error.details });
    }

    console.error("Error in getUserFavorites:", error);
    return res.status(500).json({
      error: "InternalServerError",
      details: "Erreur serveur.",
    });
  }
};
