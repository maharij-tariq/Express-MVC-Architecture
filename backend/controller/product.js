import mongoose from "mongoose";
import productModel from "../model/product.js";

//create the product cart

export const productcCreate = async (req, res) => {
  try {
    const product = await productModel.create(req.body);
    res.status(201).json({
      success: true,
      message: "Product Create Successfully",
      product,
      new: true,
    });
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};
export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await productModel.findById(id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            data: product
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getData = async (req, res) => {
  try {
    const{search, category} = req.query;
    const filter = {};
    if(search){
      filter.title = {$regex: search , $options: 'i'}
      filter.category = {$regex:search,$options:'i'}
    }
    if(category){
        filter.category = category
    }
    const product = await productModel.find(filter).sort({ iscreated: 1 });
    if (!product) {
      res.status(404).json({ success: false, message: "product not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Product Fetch successfully", product });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};

export const updateData = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await productModel.findByIdAndUpdate(id, req.body, {
      returnDocument: true,
      runValidators: true,
    });
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ success: false, message: "Invalid Product ID" });
    }
    res.status(200).json({
      success: true,
      message: "Product Update Successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({success:false,message:'Server Error',error:error.message})
  }
};

export const deleteData = async(req,res)=>{
    try {
        const data = await productModel.findByIdAndDelete(req.params.id);
if(!data){
    res.status(400).json({success:false,message:'Product is not Available'})
}
res.status(200).json({success:true,message:'Product Delete Successfully',data})
    } catch (error) {
     res.status(500).json({success:false,message:'SERVER ERROR', error:error.message})   
    }
}