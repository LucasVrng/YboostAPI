import pool from "../config/db.js";

// Supression d'un utilisateur par son ID
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params; // On récupère l'ID dans l'url (ex: /users/1)

    // Exécution de la requête SQL
    const [result] = await pool.query("DELETE FROM User WHERE id = ?", [id]);

    // Si aucune ligne n'a été affectée, c'est que l'utilisateur n'existait pas
    if (result.affectedRows === 0) {
      return res.status(400).json({ message: "Utilisateur non trouvé." });
    }
    res.status(200).json({ message: "Utilisateur supprimé avec succès." });
  } catch (error) {
    console.error("Erreur Delete User: ", error);
    res.status(500).json({ message: "Erreur Serveur." });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, mail, password, favorite } = req.body;

    const [users] = await pool.query("SELECT * FROM User WHERE id = ?", [id]);
    if (users.length === 0) {
      return res.status(404).json({ message: "Utilisateur non trouvé." });
    }

    const fieldsToUpdate = [];
    const values = [];

    if (username) {
      fieldsToUpdate.push("username = ?");
      values.push(username);
    }

    if (favorite) {
      fieldsToUpdate.push("favorite = ?");
      values.push(favorite);
    }

    if (mail) {
      const [existingMail] = await pool.query(
        "SELECT * FROM User WHERE mail = ? AND id != ?"[(mail, id)],
      );
      if (existingMail.length > 0) {
        return res.status(409).json({
          message: "Cet email est déjà utilisé par un autre utilisateur.",
        });
      }
      fieldsToUpdate.push("mail = ?");
      values.push(mail);
    }

    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      fieldsToUpdate.push("password = ?");
      values.push(hashedPassword);
    }

    if (fieldsToUpdate.length === 0) {
      return res.status(400).json({ message: "Aucune donnée à modifier." });
    }

    const sql = `UPDATE User SET ${fieldsToUpdate.join(", ")} WHERE id = ?`;
    values.push(id);

    await pool.query(sql, values);

    res.status(200).json({ message: "Utilisateur mis à jour avec succès." });
  } catch (error) {
    console.error("Erreur Update User: ", error);
    res.status(500).json({ message: "Erreur Serveur." });
  }
};
