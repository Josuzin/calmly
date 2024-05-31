import { connectToDatabase } from "../../database/mongodb";

export default async function handler(req, res) {
  const client = await connectToDatabase("chat_history");

  if (req.method === 'GET') {
    const chats = await client.find({}).toArray();
    res.status(200).json(chats);
  } else if (req.method === 'POST') {
    const chat = {
      ...req.body,
      timestamp: new Date().toISOString()
    };
    await client.insertOne(chat);
    res.status(201).json(chat);
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

