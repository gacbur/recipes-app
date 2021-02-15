import React from 'react'

import { useSelector } from 'react-redux'

import { RootStore } from '../../redux/Store'

import PinnedRecipe from '../../components/pinnedRecipe/PinnedRecipe'

import { recipe } from '../../redux/actions/pinnedRecipesActionTypes'

import "./Pinned.css"

const Pinned = () => {

    const pinned_recipes = useSelector((state: RootStore) => state.pinnedRecipes.pinned_recipes)

    return (
        <div className="pinned-recipes">
            <h2>Pinned Recipes</h2>
            <div className="pinned-recipes__content">
                {pinned_recipes.length > 0 &&
                    pinned_recipes.map((item: recipe) => (
                        <PinnedRecipe
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                        />
                    ))
                }
            </div>
            {pinned_recipes.length <= 0 &&
                <h3 className="pinned-recipes__message">You haven't pinned any recipes yet.</h3>}
        </div>
    )
}

export default Pinned
