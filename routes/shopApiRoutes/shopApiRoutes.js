const { addShop, getShopDetails, EditShopDetails, getAllShopsNearYou } = require("../../Controllers/ShopControllers/shopControllers");


const router = require("express").Router();

// Adjust the registration route
router.post("/addshop", addShop);

// adjusts the get shop details routes

router.post("/getshopdetails", getShopDetails);


// adjusts the route for the editing the shops details

router.post("/editshopdetails", EditShopDetails);


// adjusts the route for the getting all the shops near you 
router.post("/getallshopsnearyou", getAllShopsNearYou);

// add the products in the shop bro
// router.post("/addproductsinshop", addProductsInShop);



module.exports = router;
