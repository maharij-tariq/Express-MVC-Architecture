import { MongoClient,ObjectId } from "mongodb";

const url = 'mongodb://localhost:27017';
const dbName =  'studentDB'
const client =  new MongoClient(url)
  

export {dbName,client,ObjectId}