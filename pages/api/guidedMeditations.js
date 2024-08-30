
import dbConnect from '../../lib/mongodb';
import Meditations from '../../models/meditation';

export default async function handler(req, res) {
  try {
    await dbConnect();
    console.log('Database connection established');

    if (req.method === 'GET') {
      const meditations = await Meditations.find({}, { _id: 1, title: 1, description: 1, imgSrc: 1, audioSrc: 1, length: 1, content: 1}).lean();
      console.log('Meditations found:', meditations);
      res.json(meditations);
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error fetching meditations:', error);
    res.status(500).json({ message: 'Error fetching meditations' });
  }
}
