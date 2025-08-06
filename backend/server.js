const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors")


const app = express();
dotenv.config()
app.use(cors());

app.get("/",(req,res)=>{
    res.send("working starts");
});
app.get("/chats",(req,res)=>{
    res.send("working >>>>>");
});

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log("server started"))