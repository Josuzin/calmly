import { updateMeditationStreak } from "../../utils/updateStreak";

import dbConnect from "../../lib/mongodb";
export default async function handler(req, res) {
  if (req.method === 'POST') {
    await dbConnect();
    const { userId, date } = req.body;

    try {
      const user = await updateMeditationStreak(userId, date);
      res.status(200).json({ success: true, data: user });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
