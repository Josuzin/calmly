import { connectMongoDB } from "../database/mongodb";
 

const userTextBlockSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    textBlockHistory: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const userTextBlock = async (userId, date) => {
  try {
    const db = await connectMongoDB();
    const result = await db
      .collection("userTextBlock")
      .insertOne({ userId, date });
    return result;
  } catch (error) {
    console.log (error);
  }
};
