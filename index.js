const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
// my routes are startings from here

const ShopRoute = require("./routes/shopApiRoutes/shopApiRoutes")

// my router for the adding the products in the database 
const ProductsRoutes = require("./routes/ProductsRoutes/shopProductsRoutes");

const messageRoutes = require("./routes/DirectMessageRoutesToShops/DirectMessageRoutesToShops");  


// these below are the  middlewares that I have used in this project

app.use(cors());
app.use(express.json());
// Use express.urlencoded middleware
app.use(express.urlencoded({ extended: true }));
require("dotenv").config();




// from here the routes are starting all the routes 

// Adjust the registration route
app.use("/", ShopRoute); // Change the route path to /api

// api fo teh  handling the products related routes in the databs ebro

app.use('/', ProductsRoutes);


// api for the handling the message between users
app.use('/', messageRoutes);



// database connections 
// mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.LINK}`).then(() => {
//     console.log("Database connected succesfully")
// }).catch((err) => {
//     console.log(err)
// });

// database connection ended


// start odf the  atlas database connection 

mongoose.connect("mongodb+srv://raykushwaha0031:C1k4maJXzH2vAmh4@blog.zlf5agh.mongodb.net/Shop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000,  // Example: Increased timeout to 10 seconds
    socketTimeoutMS: 45000,           // Example: Increased socket timeout to 45 seconds
}).then(() => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.error("Error connecting to database:", err);
});



// end of the  atlas database connection


app.get("/", (req, res) => {
    res.send("this is home page");
});


const PORT = 8000;  // specify the port number
app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server is running at http://localhost:${PORT}`);
});

