import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected");
    } catch (error) {
        console.log("MongoDB error", error);
        
    }
}




 import mongoose from 'mongoose';

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