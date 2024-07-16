const { addProductsInShop, getAllProductsOfShop, editProductsInShop, deleteProductsInShop, getAllProductsOfAllShop } = require("../../Controllers/ProductsControllers/productControllers")
// const router = require("../shopApiRoutes/shopApiRoutes")

// now make a route r from the express 
const router = require("express").Router();



// api router for the adding a products to teh database 


router.post("/addproductsinshop", addProductsInShop);

// api for the getting all the product sfrom the database 
router.post("/getallproductsofshop", getAllProductsOfShop);



// api for the getting all the product sfrom the database 
router.post("/editproductinshop", editProductsInShop);


// api for the deleteting the products from the database
router.post("/deleteproductinshop", deleteProductsInShop);

// api for getting all the products from  all the shops registers on the Online Dukan

router.post("/getallproductsofallshop", getAllProductsOfAllShop);




module.exports = router;