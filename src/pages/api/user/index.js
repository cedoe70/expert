import pool from '@/lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const result = await pool.query(`
        SELECT k.*, u.name AS user_name, u.email
        FROM kyc_requests k
        JOIN users u ON k.user_id = u.id
        ORDER BY submitted_at DESC
      `);
      res.status(200).json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch KYC requests' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
