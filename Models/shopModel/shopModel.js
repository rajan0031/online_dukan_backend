const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({


    userId: {
        type: String
    },

    shopkeeperName: {
        tyep: String,
    },
    shopkeeperUsername: {
        type: String,
    },
    shopName: {
        type: String,
    },

    shopLogoUrl: {
        type: String,
    },
    shopMotto: {
        type: String,
    },
    shopCategory: {
        type: String,
    },
    otherCategory: {
        type: String,
    },
    paymentModes: {
        type: Array,
    },
    shopkeeperMobile: {
        type: String,
    },
    shopkeeperEmail: {
        type: String,
    },
    shopAddress: {
        type: String,
    },
    totalEmployees: {
        type: Number,
    },
    aboutShop: {
        type: String,
    },
    openingDate: {
        type: Date,
    },

});
const Shop = mongoose.model("Shop", shopSchema);
module.exports = Shop;






