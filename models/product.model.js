const mongoose = require('mongoose');

// model for an entry in the DB
const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Product name required"]
        },

        quantity: {
            type: Number,
            required: true,
            default: 0
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        image: {
            type: String,
            required: false
        }

    },
    {
        timestamps: true
    }
)

// name of model should be singular. Will be all lowercase and add an "s" in MongoDB
const Product = mongoose.model("Product", ProductSchema);

// export the model for use
module.exports = Product;