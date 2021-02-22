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
            <h2>Choose from the great selection of recepies that foodies presents to you, just search for something in your interest and enjoy! </h2>
            {recipes_loaded === false ?
                <Loading />
                :
                <div className="recipes-list__items-cnt">
                    {
                        recipes.length > 0 ?
                            recipes.map(item => (
                                <RecipeItem
                                    key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    title={item.title}
                                />
                            ))

                            :
                            recipes_loaded ? <h3>No results were found...</h3> : null
                    }
                </div>
            }
        </div>
    )
}

export default RecipesList
