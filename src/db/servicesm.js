const mongoose = require("mongoose");
const myschema3 = mongoose.Schema({
    icon:String,
    title:String,
    description:String,
    linkText:String,
    link:String,
})

const Services = new mongoose.model("Service",myschema3);
module.exports = Services;