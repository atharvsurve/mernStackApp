import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://surveatharv:993082@cluster0.magagno.mongodb.net/fooddel').then(()=>console.log("DB connected"));
}
