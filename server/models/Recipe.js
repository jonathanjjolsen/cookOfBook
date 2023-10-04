const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    ingredients: {
        type: String,
        required: true,
        trim: true,
    },
    instructions: {
        type: String,
        required: true,
        trim: true,
    },
    notes: {
        type: String,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;