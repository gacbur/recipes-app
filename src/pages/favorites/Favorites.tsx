import React from 'react'

import { useSelector } from 'react-redux'

import { RootStore } from '../../redux/Store'

import FavoriteRecipe from '../../components/favoriteRecipe/FavoriteRecipe'

import { recipe } from '../../redux/actions/pinnedRecipesActionTypes'

import "./Favorites.css"

const Favorites = () => {

    const favorite_recipes = useSelector((state: RootStore) => state.favoriteRecipes.favorite_recipes)

    return (
        <div className="favorite-recipes">
            <h2>Favorite Recipes</h2>
            <div className="favorite-recipes__content">
                {favorite_recipes.length > 0 &&
                    favorite_recipes.map((item: recipe) => (
                        <FavoriteRecipe
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                        />
                    ))
                }
            </div>
            {favorite_recipes.length <= 0 &&
                <h3 className="favorite-recipes__message">You haven't favorited any recipes yet.</h3>}
        </div>
    )
}

export default Favorites
