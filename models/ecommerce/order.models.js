import mongoose from "mongoose";

const orderItemSchema=new mongoose.Schema({
    product_id:{
        Type:mongoose.Schema.Types.ObjectId ,
        ref:"Product",
    },
    quantity:{
        type:Number,
        required:true,
    }
})

const orderSchema=new mongoose.Schema({
    orderedBy:{
        type:mongoose.Schema.Types.ObjectId,    
        ref:"User",
        required:true,
    },
    orderPrice:{
        type:Number,
        required:true,
    },
    orderItem:{
        type:[orderItemSchema],
        required:true,
    },
    address:{
        type:String,
        required:true,

    },
    status:{
        type:String,
        enum:["pending","delivered","cancelled"],
        default:"pending",
    }

},{timestamps:true});


export const Order=mongoose.model("Order",orderSchema)