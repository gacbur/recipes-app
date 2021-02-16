import { Dispatch } from 'redux'
import { DoneRecipesDispatchTypes, ADD_TO_DONE, REMOVE_FROM_DONE, recipe } from './doneRecipesActionTypes'

export const addToDone = (recipe: recipe) => (dispatch: Dispatch<DoneRecipesDispatchTypes>) => {
    dispatch({
        type: ADD_TO_DONE,
        payload: recipe
    })
}

export const removeFromDone = (id: number) => (dispatch: Dispatch<DoneRecipesDispatchTypes>) => {
    dispatch({
        type: REMOVE_FROM_DONE,
        payload: {
            id
        }
    })
}


