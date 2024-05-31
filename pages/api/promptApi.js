import connectToDatabase from "../../database/mongodb";

export default async function handler(req, res) {
  const { userId } = req.query;

  try {
    const client = await connectToDatabase();
    const db = client.db('CalmLy'); // Nome do banco de dados
    const collection = db.collection('prompts'); // Nome da coleção

    const prompts = await collection
      .find({ userId: userId })
      .sort({ createdAt: -1 })
      .limit(6)
      .toArray();

    res.status(200).json(prompts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch prompts' });
  }
}
