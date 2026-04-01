import pool from "../config/db.js";

/**
 * @file favorite.js
 * @description Data access for the `User.favorite` column.
 */

/**
 * @param {number} userId
 * @param {number} favorite
 * @returns {Promise<import("mysql2").ResultSetHeader>}
 */
export const setUserFavorite = async (userId, favorite) => {
  const [result] = await pool.query(
    "UPDATE User SET favorite = ? WHERE id = ?",
    [favorite, userId],
  );
  return result;
};

/**
 * @param {number} userId
 * @returns {Promise<import("mysql2").ResultSetHeader>}
 */
export const clearUserFavorite = async (userId) => {
  const [result] = await pool.query(
    "UPDATE User SET favorite = NULL WHERE id = ?",
    [userId],
  );
  return result;
};

/**
 * @param {number} userId
 * @returns {Promise<{id:number,favorite:number|null}|null>}
 */
export const getUserFavorite = async (userId) => {
  const [rows] = await pool.query(
    "SELECT id, favorite FROM User WHERE id = ?",
    [userId],
  );
  return rows[0] || null;
};
