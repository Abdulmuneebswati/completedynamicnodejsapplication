const mongoose = require("mongoose");
const myschema2 = mongoose.Schema({
    title:String,
    subtitle:String,
    imageurl:String,
    class:String
})
const Sliderdetail = new mongoose.model("sliderdetail",myschema2); 
module.exports = Sliderdetail;