import React from 'react'

import { useSelector } from 'react-redux'

import Loading from '../loading/Loading'
import RecipeItem from '../recipeItem/RecipeItem'

import { RootStore } from '../../redux/Store'


import './RecipesList.css'

const RecipesList = () => {

    const recipes_loaded = useSelector((state: RootStore) => state.recipes.recipes_loaded)
    const recipes = useSelector((state: RootStore) => state.recipes.recipes)

    return (
        <div className="recipes-list">
            {recipes_loaded === false ?
                <Loading />

                :
                <div className="recipes-list__items-cnt">
                    {recipes.map(item => (
                        <RecipeItem
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                        />
                    ))}
                </div>
            }
        </div>
    )
}

export default RecipesList
