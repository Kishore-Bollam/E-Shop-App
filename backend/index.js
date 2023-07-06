const express = require("express");
const cors = require("cors");
require("./DB/Config")
const user = require("./DB/Users");
const app = express();
app.use(express.json());
app.use(cors());
app.post("/register", async(req,resp)=>{
    let Users= new user(req.body );
    let result = await Users.save();
    resp.send(result)
})
app.listen(5000); 