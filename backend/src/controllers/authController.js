import pool from "../config/db.js";
import bcrypt from "bcrypt";

/**
 * @file authController.js
 * @description Registration controller backed by MySQL.
 */

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const register = async (req, res) => {
  try {
    const { username, mail, password } = req.body;

    /** Validate required fields before querying the database. */
    if (!username || !mail || !password) {
      return res.status(400).json({
        error: "ValidationError",
        details: "Tous les champs sont requis.",
      });
    }

    /** Enforce email uniqueness before insert. */
    const [existingUser] = await pool.query(
      "SELECT * FROM User WHERE mail = ?",
      [mail],
    );

    if (existingUser.length > 0) {
      return res.status(409).json({
        error: "Conflict",
        details: "Cet email est déjà utilisé.",
      });
    }

    /** Hash the password to avoid storing plain-text credentials. */
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    /** Insert the user only after validation and hashing complete. */
    const [result] = await pool.query(
      "INSERT INTO User (username, mail, password) VALUES (?, ?, ?)",
      [username, mail, hashedPassword],
    );

    /** Return the inserted user identifier. */
    res.status(201).json({
      message: "Utilisateur inscrit avec succès",
      userId: result.insertId,
    });
  } catch (error) {
    /** Keep internal details in logs and expose a safe API error payload. */
    console.error("Erreur Register:", error);
    res.status(500).json({
      error: "InternalServerError",
      details: "Erreur Serveur.",
    });
  }
};
