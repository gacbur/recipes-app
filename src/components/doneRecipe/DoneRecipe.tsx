import React from 'react'

import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import './DoneRecipe.css'

import { recipe } from '../../redux/actions/doneRecipesActionTypes'
import { removeFromDone } from '../../redux/actions/doneRecipesActions'

import { CgClose } from 'react-icons/cg'
import { AiOutlineHeart } from 'react-icons/ai'


const DoneRecipe: React.FC<recipe> = ({ id, title, image }) => {

    const dispatch = useDispatch()

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
                <button><AiOutlineHeart /></button>
                <button
                    onClick={() => dispatch(removeFromDone(id))}
                >
                    <CgClose />
                </button>
            </div>
        </div>
    )
}

export default DoneRecipe
