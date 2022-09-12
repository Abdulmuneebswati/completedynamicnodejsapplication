const express = require("express");
const Detail = require("./db/navbarm");
const Sliderdetail = require("./db/sliderm");
require("./db/conn");
const routes = require("./routes/maiin");
const hbs = require("hbs");
const Services = require("./db/servicesm");
const Gallerydetail = require("./db/gallerym");
const port = process.env.PORT || 9010;
const app = express("");
const path = require("path");
app.use(routes);
const staticpath = path.join(__dirname,"../public"); 
app.use(express.static(staticpath));
const dynamicPath = path.join(__dirname,"../templates/views");
app.set("view engine","hbs");
app.set("views",dynamicPath);
const partialPath =path.join(__dirname,"../templates/partials");
hbs.registerPartials(partialPath);

// Detail.create({
//     brandName:"Code With Us",
//     BrandIconUrl:"images/image1.png",
//     links:[
//         {
//             label:"Home",
//             url:"/",
//         },
//         {
//             label:"Services",
//             url:"/Services",
//         },
//         {
//             label:"Gallery",
//             url:"/gallery",
//         },
//         {
//             label:"About",
//             url:"/about",
//         },
//         {
//             label:"Contact Us",
//             url:"/contactus",
//         }
//     ]
// })

// const createSliderData = async ()=>{
//       const firstSlider = new Sliderdetail(
//         {
//             title:"Learn Java In Very Easy Manner",
//             subtitle:"Java is one of the most popular programming language.",
//             imageurl:"images/s2.jpg"
//         }
//       );
//       const secondSlider = new Sliderdetail(
//         {
//             title:"What is Django in Python?",
//             subtitle:"Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.",
//             imageurl:"images/s3.jpg"
//         });
//     const thirdSlider = new Sliderdetail(
//         {
//             title:"What about Node JS?",
//             subtitle:"Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
//             imageurl:"images/s6.jpg"
//         }
//     );
//     const insertData = await Sliderdetail.insertMany([firstSlider,secondSlider,thirdSlider]);
//     console.log(insertData); 
// }createSliderData();

// Services.create ([
//     {
//     icon:"fa-brands fa-accusoft",
//     title:"Provide Best Courses",
//     description:"Software Programming and Development Services · Web Applications · Desktop Applications · Mobile Applications · Cloud Computing",
//     linkText:"Check",
//     link:"http://www.google.com",
//     },
//     {
//         icon:"fab fa-affiliatetheme",
//         title:"Learn Projects",
//         description:"Software Programming and Development Services · Web Applications · Desktop Applications · Mobile Applications · Cloud Computing",
//         linkText:"Learn",
//         link:"http://www.google.com",
//         },
//         {
//             icon:"fab fa-affiliatetheme",
//             title:"Learn Projects",
//             description:"Software Programming and Development Services · Web Applications · Desktop Applications · Mobile Applications · Cloud Computing",
//             linkText:"Learn",
//             link:"http://www.google.com",
//             }
// ])

// Gallerydetail.create([
//     {
//     img:"images/s8.jpg",
//     description:"Test 1",
//     },
//     {
//         img:"images/s9.png",
//         description:"Test 2",
//     },
//     {
//     img:"images/s10.png",
//     description:"Test 3",
//     },
//     {
//     img:"images/s11.png",
//     description:"Test 4",
//     },
//     {
//     img:"images/s12.png",
//     description:"Test 5",
//     },
//     {
//     img:"images/s13.png",
//     description:"Test 6",
//     },
// ])


app.listen(port,()=>console.log("Done"));