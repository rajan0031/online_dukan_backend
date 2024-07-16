const mongoose = require('mongoose');

const ShopProducts = new mongoose.Schema({



    userId: {
        type: String
    },

    shopName: {
        type: String
    },


    title: {
        type: String,
    },
    price: {
        type: String,
    },
    imageUrl: {
        type: String,
    },

    category: {
        type: String,
    },
    description: {
        type: String,
    },


});
const Product = mongoose.model("Product", ShopProducts);
module.exports = Product;






