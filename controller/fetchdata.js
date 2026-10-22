import { client, dbName } from "../model/user.js"

 export async function handleData(req,res){
    try {
        await client.connect()
        console.log('monoddb connected successfully')
        const db = client.db(dbName)
        const collection =  db.collection('student')
        const data =  await collection.find({}).toArray()
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send('page not found')
    }
 }