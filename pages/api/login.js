import { connectToDatabase } from '../../database/mongodb';

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body;
  
      try {
        const db = await connectToDatabase("users");
  
        const user = await db.findOne({ email });
  
        if (!user) {
          return res.status(401).json({ error: 'User does not exist' });
        }
  
        if (user.password !== password) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
  
        // Para simplificar, retornamos apenas uma mensagem de sucesso
        return res.status(200).json({ message: 'Login successful' });
      } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }