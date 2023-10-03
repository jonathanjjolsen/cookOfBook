import React from 'react';

const Recipe = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="../assets/Background2.jpg" alt="Food" /></figure>
            <div className="card-body">
                <h2 className="card-title">Chicken Tacos</h2>
                <p>This will be information about the recipe.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View</button>
                </div>
            </div>
        </div>
    )
}

export default Recipe;