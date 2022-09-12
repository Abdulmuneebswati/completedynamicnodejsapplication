const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/website_tut").then(()=> console.log("Connected")).catch((error)=>console.log(error));
 
