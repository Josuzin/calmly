import { MongoClient } from 'mongodb';

// const uri = 'mongodb://localhost:27017/CalmLy';
const uri = 'mongodb://localhost:27017';
// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// let cachedClient = null;
// let cachedDb = null;

// export async function connectToDatabase() {
//   if (cachedDb) {
//     return cachedDb;
//   }

//   try {
//     const client = await MongoClient.connect(uri, options);
//     const db = client.db();
//     cachedClient = client;
//     cachedDb = db;
//     return db;
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     throw error;
//   }
// }

let client
async function connectToMongo() {
  try {
    if (!client) {
      client = await MongoClient.connect(uri)
    }
    return client;
  } catch (err) {
    console.log(err)
  }
}

export async function connectToDatabase(collectionName) {
    const client = await connectToMongo()
    return client.db("CalmLy").collection(collectionName)
  }
