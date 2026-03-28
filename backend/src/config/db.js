import mysql from "mysql2/promise";

// Configuration de la connexion à la base de données
const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "dev", // L'utilisateur principal
  password: "dev",
  database: "yboost_db",
  waitForConnections: true,
  connectionLimit: 10, // Nombre max de connexions simultanées
  queueLimit: 0,
  charset: "utf8mb4",
});

pool.query("SET NAMES utf8mb4");

try {
  const [rows] = await pool.query("SELECT 1");
  console.log("Database connected");
} catch (err) {
  console.error(err);
}

export default pool;
