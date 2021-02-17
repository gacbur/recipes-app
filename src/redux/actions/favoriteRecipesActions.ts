import { Dispatch } from 'redux'
import { FavoriteRecipesDispatchTypes, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, recipe } from './favoriteRecipesActionTypes'

export const addToFavorites = (recipe: recipe) => (dispatch: Dispatch<FavoriteRecipesDispatchTypes>, getState: any) => {
    dispatch({
        type: ADD_TO_FAVORITES,
        payload: recipe
    })

    localStorage.setItem("favoriteRecipes", JSON.stringify(getState().favoriteRecipes.favorite_recipes));
}

export const removeFromFavorites = (id: number) => (dispatch: Dispatch<FavoriteRecipesDispatchTypes>, getState: any) => {
    dispatch({
        type: REMOVE_FROM_FAVORITES,
        payload: {
            id
        }
    })

    localStorage.setItem("favoriteRecipes", JSON.stringify(getState().favoriteRecipes.favorite_recipes));
}