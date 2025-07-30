import pool from "@/utils/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const result = await pool.query("SELECT * FROM users");
      res.status(200).json(result.rows);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Server error" });
    }
  } else if (req.method === "POST") {
    const { name, email, password } = req.body;

    try {
      const result = await pool.query(
        "INSERT INTO users (name, email, password, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *",
        [name, email, password]
      );

      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error("Error inserting user:", error);
      res.status(500).json({ error: "Server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
