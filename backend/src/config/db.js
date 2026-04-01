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
});

export default pool;
