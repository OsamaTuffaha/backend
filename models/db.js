const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// اتصال أولي (للتأكد)
pool.connect()
  .then(() => console.log("DB connected ✅"))
  .catch(err => console.error(err));

// events
pool.on("connect", () => {
  console.log("New DB connection 🔥");
});

pool.on("error", (err) => {
  console.error("Unexpected DB error", err);
});

module.exports = pool;