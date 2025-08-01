import express from "express";
import { getAllUser, storeUser } from "./controllers/user.controllers.js";
import { connectDB } from "./db/connection.js";
const app=express()

app.use(express.json())

app.post("/api/users",storeUser)
app.get("/api/users",getAllUser)

const port=80


connectDB().then(()=>{
    app.listen(80,()=>{
        console.log(`server running at http://localhost:${port}`)
    })
})