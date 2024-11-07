import React, { useEffect, useState, useContext } from 'react'
import '../css/RecipeSuggestionsPage.css'
import RecipeCard from '../components/RecipeCard'

import { fetchSuggestedRecipes } from '../api/api'
import { UserContext } from '../context/UserContext'

export default function RecipeSuggestionsPage() {

    const [recipes, setRecipes] = useState([])
    const [searchString, setSearchString] = useState('')
    const { user } = useContext(UserContext)
    
    const fetchRecipes = async () => {
        try {
            const ingredients = searchString.split(',').map(ingredient => ingredient.trim());
            const data = await fetchSuggestedRecipes(ingredients,[])
            const dataTrans = await data.map(recipe => {
                return {
                    id: recipe.id,
                    title: recipe.title,
                    image_url: recipe.image,
                    readyInMinutes: recipe.readyInMinutes,
                    servings: recipe.servings
                }
            })
            console.log(dataTrans)
            setRecipes(dataTrans)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="container">
            <div className="search-bar">
                <input 
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
                type="text" placeholder="Enter ingredients..." />
                <button 
                    onClick={fetchRecipes}
                className="search-button">Search</button>
            </div>

            <div className="recipe-grid">
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}
