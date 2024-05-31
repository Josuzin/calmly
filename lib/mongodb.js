import { MongoClient } from 'mongodb';

// const uri = process.env.MONGODB_URI;
const uri = 'mongodb://localhost:27017';
let client;
let clientPromise;

if (!uri) {
    throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    global._mongoClientPromise = client.connect();
}
    // if (!global._mongoClientPromise) {
    //     client = new MongoClient(uri);
    //     global._mongoClientPromise = client.connect();
    // }
    clientPromise = global._mongoClientPromise;
} else {
    // client = new MongoClient(uri);
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    clientPromise = client.connect();
}

export default clientPromise;
