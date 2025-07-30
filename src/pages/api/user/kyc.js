import pool from "@/utils/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userId, fullName, documentType, documentUrl } = req.body;

    try {
      const result = await pool.query(
        "INSERT INTO kyc_requests (user_id, full_name, document_type, document_url, status, submitted_at) VALUES ($1, $2, $3, $4, 'pending', NOW()) RETURNING *",
        [userId, fullName, documentType, documentUrl]
      );

      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error("Error submitting KYC request:", error);
      res.status(500).json({ error: "Server error" });
    }
  } else if (req.method === "GET") {
    const { userId } = req.query;

    try {
      const result = await pool.query(
        "SELECT * FROM kyc_requests WHERE user_id = $1 ORDER BY submitted_at DESC",
        [userId]
      );

      res.status(200).json(result.rows);
    } catch (error) {
      console.error("Error fetching KYC requests:", error);
      res.status(500).json({ error: "Server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
