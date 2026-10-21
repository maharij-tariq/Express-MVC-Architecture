import { client, dbName } from "../model/user.js"

export async function fetchData(req,res){
try {
    await client.connect()
    console.log('database connect successfully')
    const db =  client.db(dbName)
    const collection =  db.collection('student')
    const data = await collection.find({}).toArray()
    res.status(200).send(data)
} catch (error) {   
    console.log(error)
    res.status(404).send('server error')
}
}