import { Dispatch } from 'redux'
import { FavoriteRecipesDispatchTypes, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, recipe } from './favoriteRecipesActionTypes'

export const addToFavorites = (recipe: recipe) => (dispatch: Dispatch<FavoriteRecipesDispatchTypes>) => {
    dispatch({
        type: ADD_TO_FAVORITES,
        payload: recipe
    })
}

export const removeFromFavorites = (id: number) => (dispatch: Dispatch<FavoriteRecipesDispatchTypes>) => {
    dispatch({
        type: REMOVE_FROM_FAVORITES,
        payload: {
            id
        }
    })
}