const mongoose = require('mongoose');
const { type } = require('os');

const menuSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    taste: {
        type: [String],

        required: true
    },

    is_drink: {
        type: Boolean,
        required: true
    },

    ingredients: {
        type: [String],
        default: []
        
    },

    num_sales: {
        type: Number,
        default: true
    }
});

const menu = mongoose.model("menu", menuSchema);
module.exports = menu;