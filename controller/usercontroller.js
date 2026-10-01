
import user from "../model/usermodel.js"

export const getdata = ((req,res)=>{
  res.json(user)
})

export const createuser = ((req,res)=>{
  const UserId = user.length + 1;
  user.push({
    id: UserId,
    ...req.body
  })
  res.status(200).json({message:'user create successfully',UserId: UserId})
})

export const updateUser = ((req,res)=>{
  const userId = parseInt(req.params.id)
  const index =  user.findIndex(users=>users.id === userId)
  if(index === -1){
   return  res.status(404).json({message:'PAGE NOT FOUND'})
  }
  user[index] = {
    id : userId,
    ...req.body
  }
  res.status(200).json({message:"user created successfully", users:user[index]})
})

export const pathUser = ((req,res)=>{
  const userID = parseInt(req.params.id)
  const index = user.findIndex(users=>users.id === userID);
  if(index === -1){
   return  res.status(404).json({message:"PAGE NOT FOUND"})
  }
  user[index] = {
    ...user[index],
    ...req.body
  }
  res.status(200).send({message:'user updated succesfully',  users: user[index]})
})

 export const deleteUser = ((req,res)=>{
  const userId = parseInt(req.params.id)
  const index =  user.findIndex(user=> user.id === userId)
  if(index === -1){
    return res.status(200).json({message:'PAGE NOT FOUND'})
  }
  user.splice(index,1)
  res.status(200).send('user deleted successfully')
})