import pool from "../config/db.js"; // Import de la connexion BDD
import bcrypt from "bcrypt"; // Outil pour crypter les mots de passe

export const register = async (req, res) => {
  try {
    const { username, mail, password } = req.body;

    // 1. Validation : On vérifie que tout est rempli
    if (!username || !mail || !password) {
      return res.status(400).json({ message: "Tous les champs sont requis." });
    }

    // 2. Vérification : On regarde si l'email existe déjà en base
    const [existingUser] = await pool.query(
      "SELECT * FROM User WHERE mail = ?",
      [mail],
    );

    if (existingUser.length > 0) {
      return res.status(409).json({ message: "Cet email est déjà utilisé." });
    }

    // 3. Sécurité : On hache le mot de passe (ne jamais stocker en clair !)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Insertion : On crée l'utilisateur dans la base de données
    const [result] = await pool.query(
      "INSERT INTO User (username, mail, password) VALUES (?, ?, ?)",
      [username, mail, hashedPassword],
    );

    // 5. Succès : On renvoie l'ID du nouvel utilisateur
    res.status(201).json({
      message: "Utilisateur inscrit avec succès",
      userId: result.insertId,
    });
  } catch (error) {
    // Gestion des erreurs imprévues (ex: BDD éteinte)
    console.error("Erreur Register:", error);
    res.status(500).json({ message: "Erreur Serveur." });
  }
};
