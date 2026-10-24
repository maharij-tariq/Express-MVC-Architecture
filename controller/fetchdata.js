import { client, dbName } from "../model/student.js";

export const fetchData = async (req, res) => {
  try {
    await client.connect();
    console.log("mongodb connect successfully");
    const db = client.db(dbName);
    const collection = db.collection("student");
    const data = await collection.find({}).toArray();
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send("server error ");
  }
};

export const addData = async (req, res) => {
  try {
    await client.connect();
    const {name,city,age} = req.body;
    if(!name || !city || !age){
        res.send(`please fill all field
            <a href = "/">GO BACK TO HOME PAGE</a>`)
        
    }else{
            const studentData = {name , city , age}
         const db = client.db(dbName);
    const collection = await db.collection("student").insertOne(studentData);
    res.send(`<h1>save data successfully</h1>
        <a href = "/">go back</a>`)
    }
  } catch (error) {
    console.log(error)
    res.status(404).send(`<h1>server eroor> <a href = "/">GO BACK TO HOME PAGE</a></h1>`);
  }
}
