import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/RecipeDetailsPage.css'

import { fetchRecipeById, saveRecipeToFavorites } from '../api/api';
import ShimmerLoader from '../components/ShimmerLoader';

export default function RecipeDetailsPage() {
    const [recipe, setRecipe] = useState({});
    const [loading, setLoading] = useState(true);
    const [recipeFetched, setRecipeFetched] = useState(false);

    const navigate = useNavigate();

    const id = window.location.pathname.split('/')[2];

    useEffect(() => {
        document.title = recipe.title ? recipe.title : 'Recipe Details';
        try {
            fetchRecipeById(id)
                .then((data) => {
                    console.log(data);
                    setRecipe(data);
                    setLoading(false);
                    setRecipeFetched(true);
                })
                .catch((error) => {
                    console.error(error);
                });
        } catch (error) {
            console.error(error);
        }
    }, []);

    if (loading) return <ShimmerLoader />;

    return (
        <div className="recipe container"
            style={{ padding: '20px' }}
        >
            <img src={recipe.image_url} alt="Recipe Image" className="recipe-image" />

            <h1>{recipe.title}</h1>

            <div className="meta-info">
                <span>Ready in Minutes: {recipe.readyInMinutes} mins</span>
                <span>Servings: {recipe.servings}</span>
            </div>

            <div className="ingredients">
                <h2>Ingredients</h2>
                <ul>
                    {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.name} - {ingredient.amount} {ingredient.unit}</li>
                    ))}
                </ul>
            </div>

            <div className="instructions">
                <h2>Instructions</h2>
                <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
            </div>

            <button
                onClick={() => saveRecipeToFavorites(id).then(() => navigate('/saved-recipes'))}
                className="save-button">Save to Favorites</button>
        </div>
    )
}
