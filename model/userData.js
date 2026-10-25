import mongoose from "mongoose";

const dataStructure = new mongoose.Schema({
    name :String,
    city : String,
    age : Number
})

const dataModel = mongoose.model('student',dataStructure,'student')

export default dataModel;