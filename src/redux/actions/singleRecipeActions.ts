import { Dispatch } from 'redux';
import { SingleRecipeDispatchTypes, SINGLE_RECIPE_LOADED, SINGLE_RECIPE_NOT_LOADED, GET_SINGLE_RECIPE, singleRecipe } from './singleRecipeActionTypes'


export const getSingleRecipe = (single_recipe: singleRecipe) => (dispatch: Dispatch<SingleRecipeDispatchTypes>) => {
    dispatch({
        type: GET_SINGLE_RECIPE,
        payload: {
            single_recipe
        }
    })
}

export const singleRecipeLoaded = () => (dispatch: Dispatch<SingleRecipeDispatchTypes>) => {
    dispatch({
        type: SINGLE_RECIPE_LOADED,
    })
}

export const SingleRecipeNotLoaded = () => (dispatch: Dispatch<SingleRecipeDispatchTypes>) => {
    dispatch({
        type: SINGLE_RECIPE_NOT_LOADED,
    })
}