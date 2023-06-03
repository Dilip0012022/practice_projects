const express=require("express")
const app=express()

//Routes
app.get("/hello",(req,res)=>{
    res.send("Task Manager App")
})

// I have to complete this now
// jaldi se jaldi
const PORT=8080
app.listen(PORT,()=>{
    console.log(`Serevr is listening to port ${PORT}...`)
})