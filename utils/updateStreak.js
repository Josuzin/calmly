import { ObjectId } from "mongodb";
import { getMongoCollection } from "../database/mongodb";
// import User from "./models/user";

// export const updateMeditationStreak = async (userId, date) => {
//   const coll = await getMongoCollection("User");
//   // const user = await User.findOne({ userId });
//   const id = new ObjectId(userId);
//   const res = await coll.find({ _id: id }).toArray();
//   const today = new Date();
//   today.setHours(0, 0, 0, 0);
//   if (res.length === 0) {
//     throw new Error("User not found");
//   }

//   const lastMeditationDate = new Date(res[0].lastMeditationDate);
//   lastMeditationDate.setHours(0, 0, 0, 0);

//   if (today.getTime() === lastMeditationDate.getTime()) {
//     return res;
//   }

//   const oneDay = 24 * 60 * 60 * 1000;
//   if (today.getTime() - lastMeditationDate.getTime() === oneDay) {
//     res[0].meditationStreak += 1;
//   } else {
//     res[0].meditationStreak = 0;
//   }
//   res[0].lastMeditationDate.push(today);
//   res[0].lastMeditationDate = today;
//   return res;
// };
export const updateMeditationStreak = async (userId) => {
  const res = await fetch("/api/meditation/" + userId, {
    method: "PATCH",
  });

  if (res.status === 200) {
    const data = await res.json();
    return data;
  }
  return;
};
