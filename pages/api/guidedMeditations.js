import dbConnect from '../../lib/mongodb';
import Meditations from '../../models/meditation';

export default async function handler(req, res) {
  try {
    await dbConnect();
    console.log('Database connection established');

    if (req.method === 'GET') {
      const meditations = await Meditations.find({}, { title: 1, description: 1 }).lean();
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