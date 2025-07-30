import pool from "@/utils/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userId, planId, amount } = req.body;

    if (!userId || !planId || !amount) {
      return res.status(400).json({ error: "Missing fields" });
    }

    try {
      await pool.query(
        `INSERT INTO investments (user_id, plan_id, amount, invested_at)
         VALUES ($1, $2, $3, NOW())`,
        [userId, planId, amount]
      );

      res.status(200).json({ message: "Investment successful" });
    } catch (err) {
      console.error("Investment error:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
