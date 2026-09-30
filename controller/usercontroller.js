import user from "../model/usermodel.js"

export const getdata = ((req,res)=>{
  res.json(user)
})

export const createuser = ((req,res)=>{
  const UserId = user.length + 1;
  user.push({
    user: UserId,
    ...req.body
  })
  res.status(200).json({message:'user create successfully',UserId: UserId})
})
