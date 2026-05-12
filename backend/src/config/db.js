import mysql from "mysql2/promise";

/**
 * @file db.js
 * @description Shared MySQL pool configuration used by backend layers.
 */
const pool = mysql.createPool({
  host: "localhost",
  user: "dev",
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
