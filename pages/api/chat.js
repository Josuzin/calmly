import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('chatDB');
  const collection = db.collection('chat_history');

  if (req.method === 'GET') {
    const chats = await collection.find({}).toArray();
    res.status(200).json(chats);
  } else if (req.method === 'POST') {
    const chat = {
      ...req.body,
      timestamp: new Date().toISOString()
    };
    await collection.insertOne(chat);
    res.status(201).json(chat);
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

