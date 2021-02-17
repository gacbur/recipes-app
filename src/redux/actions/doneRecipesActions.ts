import { Dispatch } from 'redux'
import { DoneRecipesDispatchTypes, ADD_TO_DONE, REMOVE_FROM_DONE, recipe } from './doneRecipesActionTypes'

export const addToDone = (recipe: recipe) => (dispatch: Dispatch<DoneRecipesDispatchTypes>, getState: any) => {
    dispatch({
        type: ADD_TO_DONE,
        payload: recipe
    })

    localStorage.setItem("doneRecipes", JSON.stringify(getState().doneRecipes.done_recipes));
}

export const removeFromDone = (id: number) => (dispatch: Dispatch<DoneRecipesDispatchTypes>, getState: any) => {
    dispatch({
        type: REMOVE_FROM_DONE,
        payload: {
            id
        }
    })

    localStorage.setItem("doneRecipes", JSON.stringify(getState().doneRecipes.done_recipes));
}


