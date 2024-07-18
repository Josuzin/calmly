import dbConnect from "../../../lib/mongodb";
import User from "../../../models/user";

export default async function handler(req, res) {
  await dbConnect();

  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const now = new Date();
  const lastMeditation = user.lastMeditationDate ? new Date(user.lastMeditationDate) : null;

  let newStreak = user.currentStreak || 0;

  if (lastMeditation) {
    const diff = Math.floor((now - lastMeditation) / (1000 * 60 * 60 * 24));

    if (diff === 1) {
      newStreak += 1;
    } else if (diff > 1) {
      newStreak = 1;
    }
  } else {
    newStreak = 1;
  }

  user.currentStreak = newStreak;
  user.lastMeditationDate = now;
  user.meditationDates.push(now); // Adicionando a data de meditação ao array

  await user.save();

  res.status(200).json({
    res: [{
      currentStreak: user.currentStreak,
      lastMeditationDate: user.lastMeditationDate,
    }],
  });
}