import express from "express"
import cors from "cors" 
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"



// app config 
const app = express()
const port = 3000

//middleware
app.use(express.json())
app.use(cors())

//connectDB 
connectDB();

app.use("/api/food" , foodRouter)
 
app.get("/" , (req , res )=>{
    res.send("api working")
})

app.listen(port , ()=>{
    console.log(`Server Started on http://loacalhost:${port}`)
})



