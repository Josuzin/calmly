import dbConnect from "../../lib/mongodb";
import Sentence from "../../models/sentence";

export default async function handler(req, res) {
  await dbConnect();

  try {
    const count = await Sentence.countDocuments();
    const today = new Date();
    const dayOfYear = Math.floor(
      (today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
    );
    const index = dayOfYear % count;
    const sentence = await Sentence.findOne().skip(index);
    res.status(200).json(sentence);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
