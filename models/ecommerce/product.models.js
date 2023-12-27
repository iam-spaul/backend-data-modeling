import mongoose from "mongoose";

const productSchema=new mongoose.Schema({

    productName:{
        type:String,
        required:true,

    },
    productDescription:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        default:0,
    },
    image:{
        type:String,
        required:true,
    },
    stock:{
        type:Number,
        default:0,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true,
    },
    owner:{
        type:mongoose.schqema.Types.ObjectId,
        ref:"User",
        required:true,
    }
},{timestamps:true});


export const Product=mongoose.model("Product",productSchema)