import pool from "@/utils/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userId, amount, walletAddress } = req.body;

    try {
      const result = await pool.query(
        "INSERT INTO withdrawals (user_id, amount, wallet_address, status, requested_at) VALUES ($1, $2, $3, 'pending', NOW()) RETURNING *",
        [userId, amount, walletAddress]
      );

      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error("Error creating withdrawal:", error);
      res.status(500).json({ error: "Server error" });
    }
  } else if (req.method === "GET") {
    const { userId } = req.query;

    try {
      const result = await pool.query(
        "SELECT * FROM withdrawals WHERE user_id = $1 ORDER BY requested_at DESC",
        [userId]
      );

      res.status(200).json(result.rows);
    } catch (error) {
      console.error("Error fetching withdrawals:", error);
      res.status(500).json({ error: "Server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
