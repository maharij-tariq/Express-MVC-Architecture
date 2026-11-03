import mongoose from "mongoose";

const dataSchemas = new mongoose.Schema({
    name : String,
    email : {type:String , unique : true},
    password :  String
 })

const datamodel = mongoose.model('student',dataSchemas,'student');

export default datamodel;