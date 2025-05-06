import mongoose from "mongoose";

const postSchema = mongoose.model({
  title:{
    type:string,
    required:[true,"title is required!"],
    trime:true,
  }
})