const { Recipe } = require('../models');

const resolvers = {
    Query: {
        recipes: async () => {
            return Recipe.find();
        },
    },
    Mutation: {
        addRecipe: async (parent, args) => {
            const recipe = await Recipe.create(args);
            return recipe;
        },
    },
};

module.exports = resolvers;