// lib/db.js
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // your Neon database URL in .env
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
