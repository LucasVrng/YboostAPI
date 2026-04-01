import {
  clearUserFavorite,
  getUserFavorite,
  setUserFavorite,
} from "../models/favorite.js";

/**
 * @file favoriteService.js
 * @description Service layer for favorites.
 * Normalizes inputs, applies business validation, and throws typed errors
 * that controllers map to HTTP responses.
 */

/**
 * @param {number} status
 * @param {string} error
 * @param {string} details
 * @returns {Error & {status:number,error:string,details:string}}
 */
const createServiceError = (status, error, details) => {
  const serviceError = new Error(details);
  serviceError.status = status;
  serviceError.error = error;
  serviceError.details = details;
  return serviceError;
};

/**
 * @param {unknown} value
 * @returns {number|null}
 */
const toPositiveInt = (value) => {
  const parsed = Number.parseInt(value, 10);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
};

/**
 * @param {unknown} userIdValue
 * @param {unknown} favoriteValue
 * @returns {Promise<{userId:number,favorite:number}>}
 */
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

/**
 * @param {unknown} userIdValue
 * @returns {Promise<{userId:number}>}
 */
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

/**
 * @param {unknown} userIdValue
 * @returns {Promise<{userId:number,favorite:number|null}>}
 */
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
