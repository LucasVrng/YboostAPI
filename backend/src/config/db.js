import mysql from "mysql2/promise";

/**
 * @file db.js
 * @description Shared MySQL pool configuration used by backend layers.
 */
const pool = mysql.createPool({
  host: "localhost",
<<<<<<< HEAD
  user: "dev",
=======
  port: 3306,
  user: "dev", // L'utilisateur principal
>>>>>>> 4176b88d224fdd15e28d01a74d797e5e27c27149
  password: "dev",
  database: "yboost_db",
  waitForConnections: true,
  connectionLimit: 10,
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
