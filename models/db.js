const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});


pool.on("connect", () => {
  console.log("New DB connection 🔥");
});

pool.on("error", (err) => {
  console.error("Unexpected DB error", err);
});

module.exports = pool;