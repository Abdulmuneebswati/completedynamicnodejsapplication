const express = require("express");
const routes = express.Router();
const sliderdetail = require('../db/sliderm');
const Detail = require("../db/navbarm");
const Services = require("../db/servicesm");
const Contactquery =require("../db/contact");
const Gallerydetail = require("../db/gallerym");

routes.use(express.json());
routes.use(express.urlencoded({extended:true}));
routes.get("/",async (req,res)=>{
    const details = await Detail.findOne({_id:"631de2fc50f076788d3bd917"});
    const slides = await sliderdetail.find();
    const services = await Services.find();
    
    // console.log(slides);
    // console.log(details);
    res.render("index",{
        details:details,
        slides:slides,
        services:services,
    });
})

routes.get("/gallery",async (req,res)=>{
    const details = await Detail.findOne({_id:"631de2fc50f076788d3bd917"});
    const galleryservices = await Gallerydetail.find();
    // console.log(galleryservices);
    res.render("gallery",{
        details:details,
        galleryservices:galleryservices,
    });
    });

routes.post("/process-contact-form", async(req,res)=>{
    try {
        const contactData = new Contactquery({
            email: req.body.email,
            phone:req.body.phone,
            query:req.body.query
        })
        const saveData = await contactData.save();
        console.log(saveData);
        res.redirect("/");  
    } catch (error) {
        res.status(404).send(error);
    }
})




module.exports = routes;