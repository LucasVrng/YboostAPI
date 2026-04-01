import pool from "../config/db.js";
import bcrypt from "bcrypt";

/**
 * @file loginController.js
 * @description Login controller with mail/username lookup and bcrypt verification.
 */

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const login = async (req, res) => {
  const { username, mail, password } = req.body;

  try {
    if ((!mail && !username) || !password) {
      return res.status(400).json({
        error: "ValidationError",
        details: "Email ou nom d'utilisateur et mot de passe requis.",
      });
    }

    const [users] = await pool.query(
      "SELECT * FROM User WHERE mail = ? OR username = ?",
      [mail || "", username || ""],
    );

    if (users.length === 0) {
      return res.status(401).json({
        error: "Unauthorized",
        details: "Identifiants incorrects.",
      });
    }

    const user = users[0];
    /** Compare plain input password against stored bcrypt hash. */
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        error: "Unauthorized",
        details: "Identifiants incorrects.",
      });
    }

    res.status(200).json({ message: "Connexion réussie.", userId: user.id });
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
    res.status(500).json({
      error: "InternalServerError",
      details: "Erreur serveur.",
    });
  }
};
