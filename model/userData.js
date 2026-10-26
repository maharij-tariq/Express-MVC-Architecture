import mongoose from "mongoose";
export const ObjectId = mongoose.Types.ObjectId;
 const dataStructure = new mongoose.Schema({
    name :String,
    city : String,
    age : Number
})

export const dataModel = mongoose.model('student',dataStructure,'student')
