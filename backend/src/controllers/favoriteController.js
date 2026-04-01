import {
  addFavoriteForUser,
  fetchUserFavorite,
  removeFavoriteForUser,
} from "../services/favoriteService.js";

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
