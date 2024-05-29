import connectMongoDB from '../../utils/connectMongoDB';
import Prompt from '../../models/Prompt';

export default async function handler(req, res) {
  await connectMongoDB();

  if (req.method === 'GET') {
    const { category } = req.query;
    try {
      const prompts = await Prompt.find({ promptCategory: category });
      res.status(200).json(prompts);
    } catch (error) {
      res.status(500).json({ error: 'Failed to load prompts' });
    }
  }
}