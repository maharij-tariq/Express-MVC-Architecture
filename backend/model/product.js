import mongoose  from "mongoose";

const productSchema = mongoose.Schema({
    title:{
  type : String,
  required: true
    },
    description:{
        type: String
    },
    price:{
        type:Number,
        required : true,
    },
    category:{
        type:String,
        required: true,
        trim:true
    },
    images:{
        type:[String],
        required: true,
    },
    stock:{
        type:Number,
        required:true,
        default: 0
    }
},{
    timestamps: true
})

const productModel = mongoose.model('product',productSchema)

export default productModel;