import pool from "@/utils/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userId, planId, amount } = req.body;

    try {
      const result = await pool.query(
        "INSERT INTO investments (user_id, plan_id, amount, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *",
        [userId, planId, amount]
      );

      res.status(201).json({ success: true, investment: result.rows[0] });
    } catch (error) {
      console.error("Error inserting investment:", error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
