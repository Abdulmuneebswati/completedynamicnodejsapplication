const mongoose =require("mongoose");
const myschema5 = mongoose.Schema({
    img:String,
    description:String,
})

const Gallerydetail = new mongoose.model("gallery",myschema5);
module.exports = Gallerydetail;