import connectToDatabase from "../../database/mongodb";
import Prompt from "../../models/promptsbd";

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'GET') {
    const { id } = req.query;
    try {
      const prompt = await Prompt.findById(id);
      if (!prompt) {
        return res.status(404).json({ error: 'Prompt not found' });
      }
      res.status(200).json(prompt);
    } catch (error) {
      res.status(500).json({ error: 'Failed to load prompt' });
    }
  }
}
