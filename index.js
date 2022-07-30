import express from'express'
import cors from'cors'
import mongodb from'./db.js'
import User from'./route/main.js'

//app config 
let app=express()
mongodb()
let port=process.env.PORT || 8080
//middleware
app.use(express.json())
app.use(cors())

//application route's
app.use('/',User)



//app listen
app.listen(port,()=>{
  console.log(port)
})