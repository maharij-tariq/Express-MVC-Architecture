import mongoose, { model, mongo } from "mongoose";
import modelTodo from "../model/modelTodo.js";
import { asyncHandler } from "../middleware/asyncHandler.js";


export const postData = asyncHandler(async (req, res) => {
    const { title, description } = req.body;
    if (!title || title.trim() === "") {
      res
        .status(500)
        .json({ message: "please provide the title", success: false });
    }

    const data = await modelTodo.create({
      title,
      description,
    });
    res.status(201).json({
      message: "user created successfully",
      success: true,
      todo: data,
    });
  })

export const getdata = asyncHandler(async(req,res) =>{
  try {
    const{search,sort,page=1,limit=10} = req.query;
const query = {};
if(search){
  query.title = {$regex:search, $options:'i'}
}
const sortOption = {};
if(sort === 'asc'){
  sortOption.createdAt = 1;
}else if(sort === 'desc'){
  sortOption.createdAt = -1
}
const skip = (page - 1) * limit;
const todos = await modelTodo.find(query)
.sort(sortOption)
.skip(skip)
.limit(parseInt(limit))

const totalTods = await modelTodo.countDocuments(query)
return res.status(200).json({
  success: true,
  message:'data fetched successfully',
  todo : totalTods,
  page: Number(page),
  limit: Number(limit),
  data: todos

})
} catch (error) {
    success: false,
    res.status(500).json({
      message: 'server error',
      error : error.message
    })
  }

})

export const getId = asyncHandler(async(req,res)=>{
      const id = req.params.id;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({
      success: false,
      message: 'InValid ID',
    })
  }
  const todos = await modelTodo.findById(id)
  if(!todos){
    return res.status(404).json({
      success:false,
      message:'todos is not provided '
    })
  }
  res.status(200).json({
    success:true,
    message:'data fetched successfully',
    data: todos
  })
  })



export const putData = asyncHandler(async(req,res) =>{
  const id = req.params.id;
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(400).json({
      success:false,
      message:'Invalid id'
    })
  }
  const todos =  await modelTodo.findByIdAndUpdate(
    id,
    req.body,{
      returnDocument: 'after',
      runValidators: true
    }
  )
  if(!todos){
    res.status(404).json({
      success: false,
      message:'Todos is not Found'
    })
  }
  res.status(200).json({
    success: true,
    message: 'userUpdated is successfully',
    data: todos
  })
})

export const updatedData =  asyncHandler(async (req,res) =>{
      const id = req.params.id;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({
      success: false,
      message:'Invalid ID'
    })
  }
  const todos = await modelTodo.findById(id);
  if(!todos){
   return res.status(404).json({
      success: false,
      message:'Todos is not  provided'
    })
  }

  todos.isCompleted = !todos.isCompleted;
  await todos.save();
 return res.status(200).json({
  success: true,
  message:'todos updated is successfully',
  data: todos
 })
  
})

export const deleteData = asyncHandler( async(req,res)=>{
  const id = req.params.id;
  if(!mongoose.Types.ObjectId.isValid(id)){
     return res.status(400).json({
      success: false,
      message:'Invalid ID'
     })  
    }
    const todos = await modelTodo.findByIdAndDelete(id);
    if(!todos){
      return res.status(404).json({
        success: false,
        message:'todos is not provided'
      })
    }

     return res.status(200).json({
      success: true,
      message:'todos deleted is successfully',
      data: todos
     })
})