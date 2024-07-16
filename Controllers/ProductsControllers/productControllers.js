const Product = require("../../Models/ProductsModel/productsModel")



// start of the controllers for adding the shop products
module.exports.addProductsInShop = async (req, res) => {

    try {

        const {
            userId,
            shopName,
            title,
            price,
            imageUrl,
            category,
            description,

        } = req.body;

        console.log(
            userId,
            shopName,
            title,
            price,
            imageUrl,
            category,
            description,
        );

        const response = await Product.create({
            userId,
            shopName,
            title,
            price,
            imageUrl,
            category,
            description,
        });

        // console.log(response);

        if (response) {
            res.json({
                response: response,
                message: "the product is added successfully",
            })
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }

};

// end of the controllers for adding the shop products




// start of the controllers for adding the shop products
module.exports.getAllProductsOfShop = async (req, res) => {

    try {

        const {
            userId,

        } = req.body;

        console.log(
            userId

        );

        const response = await Product.find({
            userId,

        });

        console.log(response);
        if (response) {
            res.json({
                response: response,
                message: "hello guys i am stucked in this loops of variables .... ",
            })
        }



    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }

};

// end of the controllers for adding the shop products



// start of the controllers for editing  the shop products
module.exports.editProductsInShop = async (req, res) => {

    try {

        const {
            productId,
            title,
            price,
            imageUrl,
            category,
            description,
        } = req.body;

        // console.log(
        //     productId,
        //     productTitle,
        //     productPrice,
        //     productImageUrl,
        //     productCategory,
        //     productDescription,
        // );

        const response = await Product.findByIdAndUpdate(productId, {
            title,
            price,
            imageUrl,
            category,
            description,
        },
            {
                new: true
            }
        );

        // console.log(response);
        if (response) {
            res.json({
                response: response,
                message: "your product is updated successfully",
            });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }

};

// end of the controllers for editing  the shop products




// start of the controllers for delete   the shop products
module.exports.deleteProductsInShop = async (req, res) => {

    try {

        const {
            productId,


        } = req.body;

        // console.log(
        //     productId,

        // );

        const response = await Product.findByIdAndDelete(productId,
            {
                new: true
            }
        );

        // console.log(response);
        if (response) {
            res.json({
                response: response,
                message: "your product is updated successfully",
            });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }

};

// end of the controllers for delete  the shop products






// start of the controllers for adding the shop products
module.exports.getAllProductsOfAllShop = async (req, res) => {

    try {



        const response = await Product.find({

        });

        console.log(response);
        if (response) {
            res.json({
                response: response,
                message: "hello guys i am stucked in this loops of variables .... ",
            })
        }



    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }

};

// end of the controllers for adding the shop products
