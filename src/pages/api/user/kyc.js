import { v2 as cloudinary } from 'cloudinary';
import formidable from 'formidable';
import fs from 'fs';
import pool from '@/lib/db';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.uploadDir = './';
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: 'Form parsing error' });
      }

      const { user_id, full_name, document_type } = fields;
      const file = files.document;

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      try {
        const uploadResult = await cloudinary.uploader.upload(file.filepath, {
          folder: 'expert-earn/kyc-documents',
        });

        const result = await pool.query(
          `INSERT INTO kyc_requests (user_id, full_name, document_type, document_url)
           VALUES ($1, $2, $3, $4) RETURNING *`,
          [user_id, full_name, document_type, uploadResult.secure_url]
        );

        fs.unlinkSync(file.filepath); // Delete local temp file
        res.status(200).json({ message: 'KYC submitted', data: result.rows[0] });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'KYC upload failed' });
      }
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
