
import modelTodo from "../model/modelTodo.js";


export const postData = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getdata = async(req,res) =>{
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

}

