import dotenv from "dotenv"
dotenv.config();
import express from "express";
import router from "./routers/auth/index.js";
import mongoose from "mongoose";
const url=process.env.URL;

const port = process.env.PORT||3000;
const app=express();
app.use(express.json());
app.use('/auth',router)
app.get('/',(req,res)=>{
    res.json("hii");
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: err.message || "Internal Server Error"
    });
});

async function startServer() {
    try {
        await mongoose.connect(url);
        console.log("db is successfully connected");
        app.listen(port,()=>{
            console.log(`server is running at port ${port}`);
        });
    } catch (error) {
        console.error("Error connecting to db:", error);
        // Optionally, exit the process if DB connection fails
        process.exit(1);
    }
}

startServer();