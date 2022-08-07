import express from "express";
import jwt from "jsonwebtoken";
import user from "../model/use.js";
import art from "../model/art.js";
let app = express.Router();
//create an user
app.post('/user/register/an/user',async(req,res)=>{
  try {
    let rez=await user.create(req.body)
    let token=jwt.sign({_id:rez._id},'bsdk')
    res.status(200).send({token})
  } catch (e) {
    res.status(500).send({msg:e})
  }
})
//login an user
app.post('/login',async(req,res)=>{
  try {
  let rez=await user.findOne({username:req.body.username,
    password:req.body.password
  })
  let token=jwt.sign({_id:rez._id},'bsdk')
  res.status(200).send({token})
  } catch (e) {
    res.status(500).send({msg:e})
    console.log(e)
  }
})
//create an candident
app.post('/cendident',async(req,res)=>{
  try {
  let token=jwt.verify(req.body.token,'bsdk')
  let finn=await user.findOne({_id:token._id})
  if (finn) {
    let rez=await art.create(req.body)
  res.status(200).send(rez)
  }else{
    res.status(404).send({msg:'you are not othorige'})
  }
  } catch (e) {
    res.status(500).send({msg:e})
    console.log(e)
  }
})
//get all candident
app.post('/get/all',async(req,res)=>{
  try {
    let token=jwt.verify(req.body.token,'bsdk')
  let finn=await user.findOne({_id:token._id})
  if (finn) {
    let rez=await art.find({})
  res.status(200).send(rez)
  }else{
    res.status(404).send({msg:'you are not othorige'})
  }
  } catch (e) {
    res.status(500).send({msg:e})
    console.log(e)
  }
})
//get an singel candident
app.post('/find',async(req,res)=>{
  try {
  let rez=await art.findOne({_id:req.body._id})
  res.status(200).send(rez)
  } catch (e) {
    res.status(500).send({msg:e})
    console.log(e)
  }
})
//get all cat detels
app.get('/cat',async(req,res)=>{
  try {
  let data=await art.find({})
  let a=data.filter((n)=>n.group=='>4')
  let b=data.filter((n)=>n.group=='5-7')
  let c=data.filter((n)=>n.group=='8-10')
  let d=data.filter((n)=>n.group=='10-above')
  res.status(200).send({a:a.length,
  b:b.length,
  c:c.length,
  d:d.length})
  } catch (e) {}
})
export default app