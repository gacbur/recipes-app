import React from 'react'

import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import './FavoriteRecipe.css'

import { recipe } from '../../redux/actions/favoriteRecipesActionTypes'

import { removeFromFavorites } from '../../redux/actions/favoriteRecipesActions'

import { CgClose } from 'react-icons/cg'

//@ts-ignore
import { NotificationManager } from 'react-notifications'

const PinnedRecipe: React.FC<recipe> = ({ id, title, image }) => {

    const dispatch = useDispatch()

    const handleDeleteFromFavorite = (id: number) => {
        dispatch(removeFromFavorites(id))
        NotificationManager.success("Recipe was successfully deleted from Favorite", '', 2000)
    }

    return (
        <div className="favorite-recipe">
            <div className="favorite-recipe__image">
                <Link to={`/recipe/${id}`}>
                    <img src={image} alt={title} />
                    <div className="favorite-recipe__overlay">
                        <span>{title.slice(0, 40) + "..."}</span>
                    </div>
                </Link>
            </div>
            <div className="favorite-recipe__text">
                <button
                    onClick={() => handleDeleteFromFavorite(id)}
                >
                    <CgClose />
                </button>
            </div>
        </div>
    )
}

export default PinnedRecipe
