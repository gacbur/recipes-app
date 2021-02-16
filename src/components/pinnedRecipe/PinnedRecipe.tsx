import React from 'react'

import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import './PinnedRecipe.css'

import { recipe } from '../../redux/actions/pinnedRecipesActionTypes'

import { addToPinned, removeFromPinned } from '../../redux/actions/pinnedRecipesActions'
import { addToDone } from '../../redux/actions/doneRecipesActions'

import { AiOutlineHeart } from 'react-icons/ai'
import { CgClose } from 'react-icons/cg'
import { ImCheckmark2 } from 'react-icons/im'


const PinnedRecipe: React.FC<recipe> = ({ id, title, image }) => {

    const dispatch = useDispatch()

    const single_recipe_item: recipe = {
        id,
        title,
        image
    }

    const handleAddToPinned = (single_recipe_item: recipe) => {
        dispatch(addToPinned(single_recipe_item))
        dispatch(removeFromPinned(single_recipe_item.id))
    }

    return (
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
                <button><AiOutlineHeart /></button>
                <button
                    onClick={() => dispatch(removeFromPinned(id))}
                >
                    <CgClose />
                </button>
                <button
                    onClick={() => handleAddToPinned(single_recipe_item)}
                ><ImCheckmark2 /></button>
            </div>
        </div>
    )
}

export default PinnedRecipe
