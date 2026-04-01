import pool from "../config/db.js";

export const setUserFavorite = async (userId, favorite) => {
  const [result] = await pool.query(
    "UPDATE User SET favorite = ? WHERE id = ?",
    [favorite, userId],
  );
  return result;
};

export const clearUserFavorite = async (userId) => {
  const [result] = await pool.query(
    "UPDATE User SET favorite = NULL WHERE id = ?",
    [userId],
  );
  return result;
};

export const getUserFavorite = async (userId) => {
  const [rows] = await pool.query(
    "SELECT id, favorite FROM User WHERE id = ?",
    [userId],
  );
  return rows[0] || null;
};
