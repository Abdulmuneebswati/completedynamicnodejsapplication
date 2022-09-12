const mongoose = require("mongoose");

const myschema4 = mongoose.Schema({
    email:String,
    phone:String,
    query:String,
});

const Contactquery = new mongoose.model("contactquery",myschema4);

module.exports=Contactquery;