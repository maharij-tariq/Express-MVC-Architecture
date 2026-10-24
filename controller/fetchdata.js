import { client, dbName, ObjectId } from "../model/student.js";

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
    const { name, city, age } = req.body;
    if (!name || !city || !age) {
      res.send(`please fill all field
            <a href = "/">GO BACK TO HOME PAGE</a>`);
    } else {
      const studentData = { name, city, age };
      const db = client.db(dbName);
      const collection = await db.collection("student").insertOne(studentData);
      res.send(`<h1>save data successfully</h1>
        <a href = "/">go back</a>`);
    }
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .send(`<h1>server eroor> <a href = "/">GO BACK TO HOME PAGE</a></h1>`);
  }
};

export const putData = async (req, res) => {
  const id = req.params.id;
  const newData = req.body;
  if (!ObjectId.isValid(id)) {
    return res.status(404).json({ message: "you id is not correct" });
  }
  if (Object.keys(newData).length === 0) {
    return res
      .status(404)
      .json({ message: "you id is empty please fill the id" });
  }
  await client.connect();
  const db = client.db(dbName);
  const result = await db
    .collection("student")
    .replaceOne({ _id: new ObjectId(id) }, newData);
  if (result.matchedCount === 1) {
    res.status(200).json({ message: "your data updated successfully" });
  } else {
    res.status(404).json({ message: "student not found" });
  }
};

export const updatedData = async(req,res)=>{
  const id =  req.params.id;
  const newData =  req.body;
  if(!ObjectId.isValid(id)){
    res.status(404).json({message:'invalid id '})
  }
if(Object.keys(newData)=== 0){
  res.status(404).json({message:'your data is empty'})
}
await client.connect()
const db = client.db(dbName)
const result =  await db.collection('student').updateOne(
  {_id: new ObjectId(id)},
  {$set : newData}
)
if(result.matchedCount === 1){
  res.status(200).json({message:'user updated successfully'})
}
}
