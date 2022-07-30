import mongoose from'mongoose'

let schema=mongoose.Schema({
  name:{
    type:String,
    required:true
  },age:{
    type:Number,
    required:true
  },phone:{
    type:Number,
    required:true
  }
},{timestamps:true})
const art=mongoose.model('art',schema)
export default art