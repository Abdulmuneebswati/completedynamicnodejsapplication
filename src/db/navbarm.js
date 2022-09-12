const mongoose = require("mongoose");


const myschema = mongoose.Schema({
    brandName:String,
    BrandIconUrl:String,
    links:[{
        label:String,
        url:String,
    }]
});


const Detail = new mongoose.model("detail",myschema);

module.exports = Detail;