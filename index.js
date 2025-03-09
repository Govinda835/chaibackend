require("dotenv").config()

const express = require("express")
const app = express()
//const port = 3000

app.get("/",(req,res)=>{
    res.status(200).json({
        message: "HELLO WORLD..."
    })
})

app.get("/youtube",(req,res)=>{
    res.status(200).json({
        message:"chai aur code...."
    })
})

app.get("/twitter",(req,res)=>{
    res.send({
        message:"This is twitter...."
    })
})

app.listen(process.env.port,()=>{
    console.log(`Example app listening on port ${process.env.port}` );
})