const express = require("express");
const cors = require("cors");
const userRoutes = require("./router/user");
const connectDB = require("./config/db");



const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth",userRoutes);
connectDB();




app.listen(5000,()=>{
    console.log("server is running on 5000");
})