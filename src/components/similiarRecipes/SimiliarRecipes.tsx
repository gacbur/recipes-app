import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import Axios from 'axios'

import './SimiliarRecipes.css'

import { RootStore } from '../../redux/Store'

import { similiarRecipe } from '../../redux/actions/similiarRecipesActionTypes'

import { getSimiliarRecipes, similiarRecipesLoaded, similiarRecipesFail, } from '../../redux/actions/similiarRecipesActions'

import SimiliarRecipeItem from '../../components/similiarRecipeItem/SimiliarRecipeItem'

type SimiliarRecipesProps = {
    singleRecipeID: string
}

const SimiliarRecipes: React.FC<SimiliarRecipesProps> = ({ singleRecipeID }) => {

    const dispatch = useDispatch()

    const similiar_recipes_loaded = useSelector((state: RootStore) => state.similiarRecipes.similiar_recipes_loaded)
    const similiar_recipes_failed = useSelector((state: RootStore) => state.similiarRecipes.similiar_recipes_failed)
    const similiar_recipes = useSelector((state: RootStore) => state.similiarRecipes.similiar_recipes)

    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_API_URL}/recipes/${singleRecipeID}/similar?number=3&apiKey=${process.env.REACT_APP_API_KEY}`)
            .then(results => results.data)
            .then(data => {
                const similiarRecipes: similiarRecipe[] = [
                    ...data.map((item: similiarRecipe) => {
                        return {
                            id: item.id,
                            title: item.title,
                        }
                    })
                ]
                console.log(similiarRecipes)
                dispatch(getSimiliarRecipes(similiarRecipes))
                dispatch(similiarRecipesLoaded())
            })
            .catch(err => {
                console.log(err)
                dispatch(similiarRecipesFail())
            })
    }, [])

    return (
        <div className="similiar-recipes">
            <h2>Similiar Recipes</h2>
            <div className="similiar-recipes__content">
                {similiar_recipes_loaded ?
                    similiar_recipes.map(item => (
                        <SimiliarRecipeItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                        />
                    ))
                    :
                    <h3>Sorry, we couldn't load recipes due to error</h3>
                }
            </div>
        </div>
    )
}

export default SimiliarRecipes
