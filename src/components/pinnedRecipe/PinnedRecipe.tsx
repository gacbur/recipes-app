import React from 'react'

import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import './PinnedRecipe.css'

import { RootStore } from '../../redux/Store'

import { recipe } from '../../redux/actions/pinnedRecipesActionTypes'

import { removeFromPinned } from '../../redux/actions/pinnedRecipesActions'
import { addToDone } from '../../redux/actions/doneRecipesActions'
import { addToFavorites } from '../../redux/actions/favoriteRecipesActions'

import { AiOutlineHeart } from 'react-icons/ai'
import { CgClose } from 'react-icons/cg'
import { ImCheckmark2 } from 'react-icons/im'

import 'react-notifications/lib/notifications.css';

// @ts-ignore
import { NotificationManager } from 'react-notifications';

const PinnedRecipe: React.FC<recipe> = ({ id, title, image }) => {


    const dispatch = useDispatch()

    const single_recipe = useSelector((state: RootStore) => state.singleRecipe.single_recipe)

    const done_recipes = useSelector((state: RootStore) => state.doneRecipes.done_recipes)
    const favorite_recipes = useSelector((state: RootStore) => state.favoriteRecipes.favorite_recipes)

    const handleActionButtons = (type: string) => {
        if (single_recipe) {
            const single_recipe_item = {
                id: single_recipe.id,
                title: single_recipe.title,
                image: single_recipe.image
            }
            switch (type) {
                case 'remove-from-pinned':
                    dispatch(removeFromPinned(single_recipe_item.id))
                    NotificationManager.success("Recipe was successfully deleted from Pinned", '', 2000)
                    break;
                case 'done':
                    const isInDone = done_recipes.find(item => item.id === single_recipe_item.id)
                    if (isInDone) {
                        NotificationManager.error("This recipe is already in Completed", '', 2000)
                    }
                    else {
                        dispatch(addToDone(single_recipe_item))
                        dispatch(removeFromPinned(single_recipe_item.id))
                        NotificationManager.success("Recipe was successfully added to Completed", '', 2000)
                    }
                    break;
                case 'favorite':
                    const isInFavorite = favorite_recipes.find(item => item.id === single_recipe_item.id)
                    if (isInFavorite) {
                        NotificationManager.error("This recipe is already in Favorite", '', 2000)
                    }
                    else {
                        dispatch(addToFavorites(single_recipe_item))
                        dispatch(removeFromPinned(single_recipe_item.id))
                        NotificationManager.success("Recipe was successfully added to Favorite", '', 2000)
                    }
                    break;
            }
        }
    }

    return (
        <>
            <div className="pinned-recipe">
                <div className="pinned-recipe__image">
                    <Link to={`/recipe/${id}`}>
                        <img src={image} alt={title} />
                        <div className="pinned-recipe__overlay">
                            <span>{title.slice(0, 40) + "..."}</span>
                        </div>
                    </Link>
                </div>
                <div className="pinned-recipe__text">
                    <button
                        onClick={() => handleActionButtons('favorite')}
                    >
                        <AiOutlineHeart /></button>
                    <button
                        onClick={() => handleActionButtons('remove-from-pinned')}
                    >
                        <CgClose />
                    </button>
                    <button
                        onClick={() => handleActionButtons('done')}
                    ><ImCheckmark2 /></button>
                </div>
            </div>
        </>
    )
}

export default PinnedRecipe
