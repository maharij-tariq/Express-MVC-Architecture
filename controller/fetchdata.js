import { client, dbName } from "../model/student.js"

export const  fetchData = async(req,res)=>{
    try {
        await client.connect()
        console.log('mongodb connect successfully')
        const db = client.db(dbName)
        const collection =  db.collection('student')
        const data = await collection.find({}).toArray();
        res.status(200).send(data);
    } catch (error) {
    res.status(404).send('server error')
    }
}
export const showData = async(req,res) =>{
    try {
            await client.connect()
    console.log('mongodb connect successfully')
    const db = client.db(dbName)
    const collection = db.collection('student')
    const data = await collection.find({}).toArray()
    res.status(200).render('index',{student:data})   
    } catch (error) {
        console.log('server error')
        
    }    
}