import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import './DoneRecipe.css'

import { RootStore } from '../../redux/Store'

import { recipe } from '../../redux/actions/doneRecipesActionTypes'
import { removeFromDone } from '../../redux/actions/doneRecipesActions'
import { addToFavorites } from '../../redux/actions/favoriteRecipesActions'

import { CgClose } from 'react-icons/cg'
import { AiOutlineHeart } from 'react-icons/ai'

//@ts-ignore
import { NotificationManager } from 'react-notifications'


const DoneRecipe: React.FC<recipe> = ({ id, title, image }) => {

    const favorite_recipes = useSelector((state: RootStore) => state.favoriteRecipes.favorite_recipes)

    const dispatch = useDispatch()

    const [singleRecipeItem, setSingleRecipeItem] = useState({
        id,
        title,
        image
    })

    const handleActionButtons = (type: string) => {

        switch (type) {
            case 'remove-from-completed':
                dispatch(removeFromDone(id))
                NotificationManager.success("Recipe was successfully deleted from Completed", '', 2000)
                break;
            case 'favorite':
                const isInFavorite = favorite_recipes.find(item => item.id === id)
                if (isInFavorite) {
                    NotificationManager.error("This recipe is already in Favorite", '', 2000)
                }
                else {
                    dispatch(addToFavorites(singleRecipeItem))
                    NotificationManager.success("Recipe was successfully added to Favorite", '', 2000)
                }
                break;
        }
    }

    return (
        <div className="done-recipe">
            <div className="done-recipe__image">
                <Link to={`/recipe/${id}`}>
                    <img src={image} alt={title} />
                    <div className="done-recipe__overlay">
                        <span>{title.slice(0, 40) + "..."}</span>
                    </div>
                </Link>
            </div>
            <div className="done-recipe__text">
                <button
                    onClick={() => handleActionButtons('favorite')}
                >
                    <AiOutlineHeart /></button>
                <button
                    onClick={() => handleActionButtons('remove-from-completed')}
                >
                    <CgClose />
                </button>
            </div>
        </div>
    )
}

export default DoneRecipe
