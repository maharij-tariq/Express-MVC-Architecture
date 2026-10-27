import mongoose from "mongoose";
import { dataModel, ObjectId } from "../model/userData.js";

export const getData = async (req, res) => {
  try {
    const data = await dataModel.find({});
    res.status(200).send(data);
    console.log("data fetched successfully");
  } catch (error) {
    res.status(404).send("server error please check");
  }
};
export const postData = async (req, res) => {
  try {
    const id = req.params.id;
    const newStudent = req.body;
    const data = await dataModel.create({
      _id: new ObjectId(id),
      ...newStudent,
    });
    return res.status(201).send(data);
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(405)
        .json({ message: "This id is already exist. please use a new id " });
    } else {
      res.stat(404).json({ message: "student not found" });
    }
  }
};


export const putData = async (req,res) =>{
  const id = req.params.id;
   if(!ObjectId.isValid(id)){
    res.status(404).json({message:'invalid id please check',
      success: false
    })
   }
    if(!req.body || Object.keys(req.body).length === 0){
     return res.status(400).json({message:'please provide  data to updated ',
        success: false
      })
    }
    const data = await dataModel.findOneAndReplace(
      {_id: id},
      req.body,
      {returnDocument: true,runValidators : true}
    )
    if(!data){
      return res.status(404).josn({message: 'student not found',
        success: false
      })
    }else{
      res.status(200).json({
        message:'updated data successfully',
        success: true,
        restult : data
      })
    }
    if(data.matchCount === 0){
      res.status(404).json({message:'student not found',
        success:false
      })
    }
}

export const updatedData = async(req,res)=>{
try {
  const id = req.params.id;
  if(!ObjectId.isValid(id)){
    res.status(404).json({
      message:'please provide valid id',
      success : false 
    })
  }
  if(!req.body || Object.keys(req.body).length === 0){
    res.status(400).json({message:'provide data to updated you data is empty',success:false})
  }
 const data = await dataModel.findByIdAndUpdate(
    id,
    {$set:req.body},
    {returnDocument: true, runValidators:true}
  )
  if(data.matchedCount === 1){
    res.status(200).json({message:'your data updated successfully', success:true,result:data})
  }
} catch (error) {
  res.status(500).json({message:'server error please check',
    success: false 
  })

}
}