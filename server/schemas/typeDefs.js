const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Recipe {
        _id: ID
        title: String
        ingredients: String
        instructions: String
        notes: String
        category: String
    }

    type Query {
        recipes: [Recipe]
    }

    type Mutation {
        addRecipe(title: String!, ingredients: String!, instructions: String!, notes: String!, category: String!): Recipe
    }
`;

module.exports = typeDefs;