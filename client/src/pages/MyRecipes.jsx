import React from "react";
import Nav from "../components/Nav.jsx";
import Recipe from "../components/Recipe.jsx";

const MyRecipes = () => {
    return (
        <div>
            <div>
                <Nav />
            </div>
            <div className="pageBody">
                <h1 className="pageTitle">My Recipes</h1>
                <div>
                    <Recipe />
                </div>
            </div>
        </div>
    )
}

export default MyRecipes;