import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  const { id } = req.query;

  try {
    const client = await clientPromise;
    const db = client.db("Calmly");
    const meditation = await db
      .collection("meditations")
      .findOne({ _id: new ObjectId(id) });

    if (!meditation) {
      return res.status(404).json({ message: "Meditation not found" });
    }

    res.json(meditation);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
