
import dbConnect from '../../lib/mongodb';
import meditations from '../../models/meditations';



export default async function handler(req, res) {
  await dbConnect();

  try {
    const meditation = await meditations.find({});
    res.status(200).json(meditation);
  } catch (error) {
    console.error("Error fetching meditations:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
