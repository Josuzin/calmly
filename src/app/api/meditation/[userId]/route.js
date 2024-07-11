 import { ObjectId } from "mongodb";
import dbConnect from "../../../../../lib/mongodb";

 export async function GET(request) {
   try {
     const userId = request.url.split("/").pop();
     if (!ObjectId.isValid(userId)) {
       return new Response(JSON.stringify({ error: "Invalid user ID" }), {
         status: 400,
         headers: { "Content-Type": "application/json" },
       });
     }

     const coll = await dbConnect("users");
     const id = new ObjectId(userId);
     const user = await coll.findOne({ _id: id });

     if (!user) {
       return new Response(JSON.stringify({ error: "User not found" }), {
         status: 404,
         headers: { "Content-Type": "application/json" },
       });
     }

     const today = new Date();
     today.setHours(0, 0, 0, 0);

     const lastMeditationDate = new Date(user.lastMeditationDate || 0);
     lastMeditationDate.setHours(0, 0, 0, 0);

     if (today.getTime() === lastMeditationDate.getTime()) {
       return new Response(JSON.stringify(user), {
         status: 200,
         headers: { "Content-Type": "application/json" },
       });
     }

     const oneDay = 24 * 60 * 60 * 1000;
     if (today.getTime() - lastMeditationDate.getTime() === oneDay) {
       user.meditationStreak += 1;
     } else {
       user.meditationStreak = 0;
     }

     user.lastMeditationDate = today;
     await coll.updateOne({ _id: id }, { $set: { lastMeditationDate: today, meditationStreak: user.meditationStreak } });

     return new Response(JSON.stringify(user), {
       status: 200,
       headers: { "Content-Type": "application/json" },
     });
   } catch (error) {
     console.error("Error fetching user:", error);
     return new Response(JSON.stringify({ error: "Internal Server Error" }), {
       status: 500,
       headers: { "Content-Type": "application/json" },
     });
   }
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 //  export async function GET(request) {
//    const userId = request.url.split("/").at(-1);
//    const coll = await dbConnect("users");
//    const id = new ObjectId(userId);
//    const res = await coll.find({ _id: id }).toArray();
//    const today = new Date();
//    today.setHours(0, 0, 0, 0);
//    if (res.length === 0) {
//      throw new Error("User not found");
//    }

//    const lastMeditationDate = new Date(res[0].lastMeditationDate);
//    lastMeditationDate.setHours(0, 0, 0, 0);

//    if (today.getTime() === lastMeditationDate.getTime()) {
//      return res;
//    }

//    const oneDay = 24 * 60 * 60 * 1000;
//    if (today.getTime() - lastMeditationDate.getTime() === oneDay) {
//      res[0].meditationStreak += 1;
//    } else {
//      res[0].meditationStreak = 0;
//    }
//    console.log(res[0]);
//    if (res[0].lastMeditationDate === null) {
//      res[0].lastMeditationDate = [today];
//    }
//    res[0].lastMeditationDate.push(today);
//    // res[0].lastMeditationDate = today;
//    return Response.json({ res });
//  }