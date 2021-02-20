import React from 'react'

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

    const single_recipe = useSelector((state: RootStore) => state.singleRecipe.single_recipe)
    const favorite_recipes = useSelector((state: RootStore) => state.favoriteRecipes.favorite_recipes)

    const dispatch = useDispatch()

    const handleActionButtons = (type: string) => {
        if (single_recipe) {
            const single_recipe_item = {
                id: single_recipe.id,
                title: single_recipe.title,
                image: single_recipe.image
            }
            switch (type) {
                case 'remove-from-completed':
                    dispatch(removeFromDone(single_recipe_item.id))
                    NotificationManager.success("Recipe was successfully deleted from Completed", '', 2000)
                    break;
                case 'favorite':
                    const isInFavorite = favorite_recipes.find(item => item.id === single_recipe_item.id)
                    if (isInFavorite) {
                        NotificationManager.error("This recipe is already in Favorite", '', 2000)
                    }
                    else {
                        dispatch(addToFavorites(single_recipe_item))
                        NotificationManager.success("Recipe was successfully added to Favorite", '', 2000)
                    }
                    break;
            }
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
