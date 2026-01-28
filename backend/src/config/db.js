import mysql from "mysql2/promise";

// Configuration de la connexion à la base de données
const pool = mysql.createPool({
  host: "localhost",
  user: "dev", // L'utilisateur principal
  password: "dev",
  database: "yboost_db",
  waitForConnections: true,
  connectionLimit: 10, // Nombre max de connexions simultanées
  queueLimit: 0,
});

export default pool;
