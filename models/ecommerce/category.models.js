import mongoose from "mongoose";

const categorySchema=new mongoose.Schema({
  productCategoryName:{
    type:String,
    required:true,
  }
})

export const Category=mongoose.model("Category",categorySchema)