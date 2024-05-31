import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../../../database/mongodb";

export async function GET(request) {
  const userId = request.url.split("/").at(-1);
  const coll = await connectToDatabase("users");
  const id = new ObjectId(userId);
  const res = await coll.find({ _id: id }).toArray();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (res.length === 0) {
    throw new Error("User not found");
  }

  const lastMeditationDate = new Date(res[0].lastMeditationDate);
  lastMeditationDate.setHours(0, 0, 0, 0);

  if (today.getTime() === lastMeditationDate.getTime()) {
    return res;
  }

  const oneDay = 24 * 60 * 60 * 1000;
  if (today.getTime() - lastMeditationDate.getTime() === oneDay) {
    res[0].meditationStreak += 1;
  } else {
    res[0].meditationStreak = 0;
  }
  console.log(res[0]);
  if (res[0].lastMeditationDate === null) {
    res[0].lastMeditationDate = [today];
  }
  res[0].lastMeditationDate.push(today);
  // res[0].lastMeditationDate = today;
  return Response.json({ res });
}
