import pool from "../config/db.js";

/**
 * @file favorite.js
 * @description Modèle de données pour les favoris. Gère les requêtes à la base de données.
 */

/**
 * Met à jour le favori d'un utilisateur.
 * @param {number} userId - L'ID de l'utilisateur
 * @param {number} favorite - L'ID du favori
 * @returns {Promise<import("mysql2").ResultSetHeader>} Le résultat de la requête
 */
export const setUserFavorite = async (userId, favorite) => {
  const [result] = await pool.query(
    "UPDATE User SET favorite = ? WHERE id = ?",
    [favorite, userId],
  );
  return result;
};

/**
 * Efface (met à NULL) le favori d'un utilisateur.
 * @param {number} userId - L'ID de l'utilisateur
 * @returns {Promise<import("mysql2").ResultSetHeader>} Le résultat de la requête
 */
export const clearUserFavorite = async (userId) => {
  const [result] = await pool.query(
    "UPDATE User SET favorite = NULL WHERE id = ?",
    [userId],
  );
  return result;
};

/**
 * Récupère le favori actuel de l'utilisateur.
 * @param {number} userId - L'ID de l'utilisateur
 * @returns {Promise<{id:number,favorite:number|null}|null>} Les données utilisateur ou null si non trouvé
 */
export const getUserFavorite = async (userId) => {
  const [rows] = await pool.query(
    "SELECT id, favorite FROM User WHERE id = ?",
    [userId],
  );
  return rows[0] || null;
};
