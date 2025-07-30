// pages/api/withdraw/index.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userId, amount, method, walletAddress } = req.body;

    if (!userId || !amount || !method || !walletAddress) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    try {
      // Simulate DB operation (replace with your actual DB logic)
      const newWithdrawal = {
        id: Date.now(),
        userId,
        amount,
        method,
        walletAddress,
        status: 'pending',
        createdAt: new Date(),
      };

      console.log("Saved Withdrawal:", newWithdrawal);

      return res.status(200).json({
        message: "Withdrawal request submitted successfully.",
        withdrawal: newWithdrawal,
      });
    } catch (error) {
      console.error("Error submitting withdrawal:", error);
      return res.status(500).json({ message: "Something went wrong." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
