<<<<<<< HEAD
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
=======
    import pool from "../config/db.js"; // Import de la connexion BDD
    import bcrypt from "bcrypt"; // Outil pour crypter les mots de passe

    export const login = async (req, res) => {
        const { username, email, password } = req.body;
        
        try {
            const [emailUser] = await pool.query("SELECT * FROM User WHERE email = ? ", [email]);
            if (emailUser.length === 0) { 
                return res.status(401).json({ message: "Email ou mot de passe incorrect." });
            }

            const [userUsername] = await pool.query("SELECT * FROM User WHERE username = ? ", [username]);
            if (userUsername.length === 0) { 
                return res.status(401).json({ message: "Nom d'utilisateur ou mot de passe incorrect." });
            }

            const user = emailUser[0];
            // 2. Comparer le mot de passe saisi avec le mot de passe haché en base
            // bcrypt.compare(mot_de_passe_clair, mot_de_passe_haché)
            const isMatch = await bcrypt.compare(password, user.password); 

            if (!isMatch) {
                return res.status(401).json({ message: "Email ou mot de passe incorrect." });
            }

            res.status(200).json({
                message: "Connexion réussie.",
                user: { id: user.id, username: user.username, email: user.email, admin: user.admin }
            });
        } catch (error) {
            console.error("Erreur lors de la connexion :", error);
            res.status(500).json({ message: "Erreur serveur." });
        }
    }
>>>>>>> 4176b88d224fdd15e28d01a74d797e5e27c27149
