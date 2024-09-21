require("dotenv").config()
const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.status(200).json({
        message : "hello world..."
    })
})

app.get("/twitter",(req,res)=>{
    res.status(200).json({
        message : "backend delopy project has been started..."
    })
})

app.listen(process.env.PORT,()=>{
    console.log("app is listening at the port number 4000....")
})