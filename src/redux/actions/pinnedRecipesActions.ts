import { Dispatch } from 'redux'
import { PinnedRecipesDispatchTypes, REMOVE_FROM_PINNED, ADD_TO_PINNED, recipe } from './pinnedRecipesActionTypes'

export const addToPinned = (recipe: recipe) => (dispatch: Dispatch<PinnedRecipesDispatchTypes>, getState: any) => {
    dispatch({
        type: ADD_TO_PINNED,
        payload: recipe
    })

    localStorage.setItem("pinnedRecipes", JSON.stringify(getState().pinnedRecipes.pinned_recipes));
}

export const removeFromPinned = (id: number) => (dispatch: Dispatch<PinnedRecipesDispatchTypes>, getState: any) => {

    dispatch({
        type: REMOVE_FROM_PINNED,
        payload: {
            id: id
        }
    })

    localStorage.setItem("pinnedRecipes", JSON.stringify(getState().pinnedRecipes.pinned_recipes));
}