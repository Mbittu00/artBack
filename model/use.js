import mongoose from'mongoose'

let schema=mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true
  },password:{
    type:String,
    required:true
  }
},{timestamps:true})
const user=mongoose.model('user',schema)
export default user