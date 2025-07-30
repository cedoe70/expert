import pool from '@/lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userId, fullName, idType, idNumber, documentUrl } = req.body;

    try {
      const result = await pool.query(
        `INSERT INTO kyc_requests 
          (user_id, full_name, id_type, id_number, document_url, status, submitted_at)
         VALUES ($1, $2, $3, $4, $5, 'pending', NOW())
         RETURNING *`,
        [userId, fullName, idType, idNumber, documentUrl]
      );

      res.status(200).json({ message: 'KYC submitted', kyc: result.rows[0] });
    } catch (error) {
      console.error('Error saving KYC:', error);
      res.status(500).json({ error: 'Failed to save KYC request' });
    }

  } else if (req.method === 'GET') {
    try {
      const result = await pool.query(
        'SELECT * FROM kyc_requests ORDER BY submitted_at DESC'
      );
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Error fetching KYC:', error);
      res.status(500).json({ error: 'Failed to fetch KYC requests' });
    }

  } else if (req.method === 'PUT') {
    const { id, status } = req.body;

    if (!id || !status) {
      return res.status(400).json({ error: 'Missing id or status' });
    }

    try {
      await pool.query(
        'UPDATE kyc_requests SET status = $1 WHERE id = $2',
        [status, id]
      );
      res.status(200).json({ message: 'KYC status updated' });
    } catch (error) {
      console.error('Error updating KYC status:', error);
      res.status(500).json({ error: 'Failed to update KYC status' });
    }

  } else {
    res.setHeader('Allow', ['POST', 'GET', 'PUT']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
