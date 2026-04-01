import {
  clearUserFavorite,
  getUserFavorite,
  setUserFavorite,
} from "../models/favorite.js";

const createServiceError = (status, error, details) => {
  const serviceError = new Error(details);
  serviceError.status = status;
  serviceError.error = error;
  serviceError.details = details;
  return serviceError;
};

const toPositiveInt = (value) => {
  const parsed = Number.parseInt(value, 10);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
};

export const addFavoriteForUser = async (userIdValue, favoriteValue) => {
  const userId = toPositiveInt(userIdValue);
  const favorite = toPositiveInt(favoriteValue);

  if (!userId || !favorite) {
    throw createServiceError(
      400,
      "ValidationError",
      "userId et favorite doivent etre des entiers positifs.",
    );
  }

  const result = await setUserFavorite(userId, favorite);
  if (result.affectedRows === 0) {
    throw createServiceError(404, "NotFound", "Utilisateur non trouve.");
  }

  return { userId, favorite };
};

export const removeFavoriteForUser = async (userIdValue) => {
  const userId = toPositiveInt(userIdValue);

  if (!userId) {
    throw createServiceError(
      400,
      "ValidationError",
      "L'identifiant utilisateur doit etre un entier positif.",
    );
  }

  const result = await clearUserFavorite(userId);
  if (result.affectedRows === 0) {
    throw createServiceError(404, "NotFound", "Utilisateur non trouve.");
  }

  return { userId };
};

export const fetchUserFavorite = async (userIdValue) => {
  const userId = toPositiveInt(userIdValue);

  if (!userId) {
    throw createServiceError(
      400,
      "ValidationError",
      "L'identifiant utilisateur doit etre un entier positif.",
    );
  }

  const user = await getUserFavorite(userId);
  if (!user) {
    throw createServiceError(404, "NotFound", "Utilisateur non trouve.");
  }

  return { userId: user.id, favorite: user.favorite };
};
