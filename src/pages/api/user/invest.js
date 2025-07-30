import pool from "@/utils/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userId, planId, amount } = req.body;

    try {
      const result = await pool.query(
        "INSERT INTO investments (user_id, plan_id, amount, invested_at) VALUES ($1, $2, $3, NOW()) RETURNING *",
        [userId, planId, amount]
      );

      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error("Error creating investment:", error);
      res.status(500).json({ error: "Server error" });
    }
  } else if (req.method === "GET") {
    const { userId } = req.query;

    try {
      const result = await pool.query(
        "SELECT i.*, p.name AS plan_name, p.interest_rate FROM investments i JOIN investment_plans p ON i.plan_id = p.id WHERE i.user_id = $1",
        [userId]
      );

      res.status(200).json(result.rows);
    } catch (error) {
      console.error("Error fetching investments:", error);
      res.status(500).json({ error: "Server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
