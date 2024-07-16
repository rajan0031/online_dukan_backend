const { response } = require("express");
const Shop = require("../../Models/shopModel/shopModel")


// start of the controllers for adding the shop
module.exports.addShop = async (req, res) => {

    try {

        const {
            userId,
            shopkeeperName,
            shopkeeperUsername,
            shopName,
            shopLogoUrl,
            shopMotto,
            shopCategory,
            otherCategory,
            paymentModes,
            shopkeeperMobile,
            shopkeeperEmail,
            shopAddress,
            totalEmployees,
            aboutShop,
            openingDate,
        } = req.body;

        // console.log(
        //     shopkeeperName,
        //     shopkeeperUsername,
        //     shopName,
        //     shopLogoUrl,
        //     shopMotto,
        //     shopCategory,
        //     otherCategory,
        //     paymentModes,
        //     shopkeeperMobile,
        //     shopkeeperEmail,
        //     shopAddress,
        //     totalEmployees,
        //     aboutShop,
        //     openingDate,
        // );

        const check1 = await Shop.find({
            shopkeeperUsername,
        });

        const check2 = await Shop.find({
            shopkeeperEmail,
        });

        if (check1.length > 0) {
            res.json({
                message: "Try another username",
            });
        } else if (check2.length > 0) {
            res.json({
                message: "Try another email id",
            });
        } else {
            const response = await Shop.create({
                userId,
                shopkeeperName,
                shopkeeperUsername,
                shopName,
                shopLogoUrl,
                shopMotto,
                shopCategory,
                otherCategory,
                paymentModes,
                shopkeeperMobile,
                shopkeeperEmail,
                shopAddress,
                totalEmployees,
                aboutShop,
                openingDate,
            });

            res.json({
                response: response,
                message: "Hello dear, your shop is open successfully",
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }

};

// start of the controllers for adding the shop



// start of the controllers for getting the shop details the shop
module.exports.getShopDetails = async (req, res) => {

    try {

        const {
            userId
        } = req.body;


        const check1 = await Shop.find({
            userId,
        });


        if (check1.length < 0) {
            res.json({
                message: "your shop does not exists please create it bhai",
            });

        } else {
            const response = await Shop.find({
                userId,
            });

            res.json({
                response: response,
                message: "Hello dear, your shop is open successfully",
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }

};

// end  of the controllers for getting the details of the the shop





// start of the controllers for editing the shops details
module.exports.EditShopDetails = async (req, res) => {

    try {

        const {
            userId,
            shopkeeperName,
            shopkeeperUsername,
            shopName,
            shopLogoUrl,
            shopMotto,
            shopCategory,
            otherCategory,
            paymentModes,
            shopkeeperMobile,
            shopkeeperEmail,
            shopAddress,
            totalEmployees,
            aboutShop,
            openingDate,
        } = req.body;


        console.log(userId,
            shopkeeperName,
            shopkeeperUsername,
            shopName,
            shopLogoUrl,
            shopMotto,
            shopCategory,
            otherCategory,
            paymentModes,
            shopkeeperMobile,
            shopkeeperEmail,
            shopAddress,
            totalEmployees,
            aboutShop,
            openingDate,)

        const response = await Shop.findOneAndUpdate({ userId: userId }, // filter condition
            {
                $set: {
                    shopkeeperName,
                    shopkeeperUsername,
                    shopName,
                    shopLogoUrl,
                    shopMotto,
                    shopCategory,
                    otherCategory,
                    paymentModes,
                    shopkeeperMobile,
                    shopkeeperEmail,
                    shopAddress,
                    totalEmployees,
                    aboutShop,
                    openingDate,
                },
            },
            { new: true });

        console.log(response);

        if (response) {
            res.json({
                response: response,
                message: "the shop details is updated successfully",
            })
        }



    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }

};

// end  of the controllers for editing the shops details



// start of the controllers for getting the shop details the shop
module.exports.getAllShopsNearYou = async (req, res) => {

    try {

        const {
            userId
        } = req.body;


        const response = await Shop.find({

        });

        console.log(response);


        if (response) {
            res.json({
                message: "here are the all shops near you bro"
                ,
                response: response
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }

};

// end  of the controllers for getting the details of the the shop

