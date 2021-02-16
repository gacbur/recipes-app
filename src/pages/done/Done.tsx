import React from 'react'

import { useSelector } from 'react-redux'

import { RootStore } from '../../redux/Store'

import DoneRecipe from '../../components/doneRecipe/DoneRecipe'

import { recipe } from '../../redux/actions/pinnedRecipesActionTypes'

import "./Done.css"

const Done = () => {

    const done_recipes = useSelector((state: RootStore) => state.doneRecipes.done_recipes)

    return (
        <div className="done-recipes">
            <h2>Completed Recipes</h2>
            <div className="done-recipes__content">
                {done_recipes.length > 0 &&
                    done_recipes.map((item: recipe) => (
                        <DoneRecipe
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                        />
                    ))
                }
            </div>
            {done_recipes.length <= 0 &&
                <h3 className="done-recipes__message">You haven't completed any recipes yet.</h3>}
        </div>
    )
}

export default Done
