import React from 'react'

import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import './PinnedRecipe.css'

import { recipe } from '../../redux/actions/pinnedRecipesActionTypes'
import { removeFromPinned } from '../../redux/actions/pinnedRecipesActions'

import { AiOutlineHeart } from 'react-icons/ai'
import { CgClose } from 'react-icons/cg'

const PinnedRecipe: React.FC<recipe> = ({ id, title, image }) => {

    const dispatch = useDispatch()

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
            </div>
        </div>
    )
}

export default PinnedRecipe
