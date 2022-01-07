const express = require("express");
const app = express();
app.use(express.json());
const {selectUser, addUser} = require ("./user");

const cors = require("cors");
app.use(cors());

app.listen(4000,() => console.log("Server Started"));

//http:localhost:4000/user

app.get("/user", async(req,res)=>{
    let list = await selectUser();
    res.json(list);
});

app.post("/add-user", async(req , res)=>{
    const message = req.body;
    console.log(message);
    await addUser(message);
    res.json({message:"User Added Successfully"});
});