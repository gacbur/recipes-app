import React from 'react'

import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import './PinnedRecipe.css'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { RootStore } from '../../redux/Store'

import { recipe } from '../../redux/actions/pinnedRecipesActionTypes'

import { removeFromPinned } from '../../redux/actions/pinnedRecipesActions'
import { addToDone } from '../../redux/actions/doneRecipesActions'
import { addToFavorites } from '../../redux/actions/favoriteRecipesActions'

import { AiOutlineHeart } from 'react-icons/ai'
import { CgClose } from 'react-icons/cg'
import { ImCheckmark2 } from 'react-icons/im'


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
                    toast.success("Recipe successfully removed from Pinned.")
                    dispatch(removeFromPinned(single_recipe_item.id))
                    break;
                case 'done':
                    const isInDone = done_recipes.find(item => item.id === single_recipe_item.id)
                    if (isInDone) {
                        toast.error("This recipe is already in Completed.")
                    }
                    else {
                        dispatch(addToDone(single_recipe_item))
                        dispatch(removeFromPinned(single_recipe_item.id))
                        toast.success("Recipe added to Completed.")
                    }
                    break;
                case 'favorite':
                    const isInFavorite = favorite_recipes.find(item => item.id === single_recipe_item.id)
                    if (isInFavorite) {
                        toast.error("This recipe is already in Favorite.")
                    }
                    else {
                        dispatch(addToFavorites(single_recipe_item))
                        dispatch(removeFromPinned(single_recipe_item.id))
                        toast.success("Recipe added to Favorite.")
                    }
                    break;
            }
        }
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover
            />
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
