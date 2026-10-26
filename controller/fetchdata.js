import {dataModel,  ObjectId } from "../model/userData.js"

export const getData = async(req,res) =>{
    try {
        const data =  await dataModel.find({})
        res.status(200).send(data)
        console.log('data fetched successfully')
    } catch (error) {
        res.status(404).send('server error please check')
    }

}
export const postData = async(req,res) =>{
    try {
        const id = req.params.id;
        const newStudent =  req.body;
        const data = await dataModel.create({
            _id : new ObjectId(id),
            ...newStudent
        })
        return res.status(201).send(data)
    } catch (error) {
        if(error.code === 11000){
            return res.status(405).json({message:'This id is already exist. please use a new id '})
        }else{
           res.stat(404).json({message:'student not found'})
        }
    }

}
