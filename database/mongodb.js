// import mongoose from "mongoose";

<<<<<<< HEAD
export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.log("MongoDB error", error);
        
=======
// export const connectMongoDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL);
//         console.log("MongoDB connected");
//     } catch (error) {
//         console.log("MongoDB error", error);

//     }
// }

//  import mongoose from 'mongoose';

//  const MONGODB_URI = process.env.MONGODB_URI;

//  if (!MONGODB_URI) {
//    throw new Error(
//      'Por favor, defina a variável de ambiente MONGODB_URI no seu arquivo .env.local'
//    );
//  }

//  let cached = global.mongoose;

//  if (!cached) {
//    cached = global.mongoose = { conn: null, promise: null };
//  }

//  async function connectToDatabase() {
//    if (cached.conn) {
//      return cached.conn;
//    }

//    if (!cached.promise) {
//      const opts = {
//        useNewUrlParser: true,
//        useUnifiedTopology: true,
//      };

//      cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//        return mongoose;
//      });
//    }
//    cached.conn = await cached.promise;
//    return cached.conn;
//  }

//  export default connectToDatabase;

import { MongoClient } from "mongodb";
const URL = process.env.MONGODB_URI ?? "mongodb://localhost:27017";

let client;
async function connectToMongo() {
  try {
    if (!client) {
      client = await MongoClient.connect(URL);
>>>>>>> df4b516627f543f9f9bbbd47f3ad1df5ed24a06a
    }
    return client;
  } catch (err) {
    console.log(err);
  }
}

<<<<<<< HEAD

 const MONGODB_URI = process.env.MONGODB_URI;

 if (!MONGODB_URI) {
   throw new Error(
     'Por favor, defina a variável de ambiente MONGODB_URI no seu arquivo .env.local'
   );
 }

 let cached = global.mongoose;

 if (!cached) {
   cached = global.mongoose = { conn: null, promise: null };
 }

 async function connectToDatabase() {
   if (cached.conn) {
     return cached.conn;
   }

   if (!cached.promise) {
     const opts = {
       useNewUrlParser: true,
       useUnifiedTopology: true,
     };

     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
       return mongoose;
     });
   }
   cached.conn = await cached.promise;
   return cached.conn;
 }

 export default connectToDatabase;
=======
export async function getMongoCollection(collectionName) {
  const client = await connectToMongo();
  return client.db("CalmLy").collection(collectionName);
}
>>>>>>> df4b516627f543f9f9bbbd47f3ad1df5ed24a06a
