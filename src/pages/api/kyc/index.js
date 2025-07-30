// pages/api/kyc/index.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userId, fullName, idNumber } = req.body;

    if (!userId || !fullName || !idNumber) {
      return res.status(400).json({ message: 'Missing required KYC fields.' });
    }

    try {
      // Simulate saving to DB (replace with your real DB logic)
      const kycRequest = {
        id: Date.now(),
        userId,
        fullName,
        idNumber,
        status: 'pending',
        submittedAt: new Date(),
      };

      console.log("KYC Request Saved:", kycRequest);

      return res.status(200).json({
        message: 'KYC submission successful. Awaiting admin review.',
        kyc: kycRequest,
      });
    } catch (error) {
      console.error("KYC error:", error);
      return res.status(500).json({ message: 'Server error. Please try again.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
