import pool from "@/utils/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { kycId, status } = req.body;

    if (!kycId || !["approved", "rejected", "resubmit"].includes(status)) {
      return res.status(400).json({ error: "Invalid request" });
    }

    try {
      await pool.query(
        `UPDATE kyc_requests SET status = $1, reviewed_at = NOW() WHERE id = $2`,
        [status, kycId]
      );

      res.status(200).json({ message: `KYC ${status}` });
    } catch (err) {
      console.error("Admin KYC update error:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
