import pool from "../config/db.js"; // Import de la connexion BDD
import bcrypt from "bcrypt"; // Outil pour crypter les mots de passe

export const login = async (req, res) => {
    const { username, mail, password } = req.body;
    
    try {

        const [emailUser] = await pool.query("SELECT * FROM User WHERE email = ? ", [mail]);
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

        res.status(200).json({message: "Connexion réussie.", userId: user.id});
    } catch (error) {
        console.error("Erreur lors de la connexion :", error);
        res.status(500).json({ message: "Erreur serveur." });
    }
}