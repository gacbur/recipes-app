import { Dispatch } from 'redux';
import { RecipesDispatchTypes, RECIPES_LOADED, GET_RECIPES, RECIPES_NOT_LOADED, Recipe } from './recipesActionTypes'


export const getRecipes = (recipes: Recipe[]) => (dispatch: Dispatch<RecipesDispatchTypes>) => {
    dispatch({
        type: GET_RECIPES,
        payload: {
            recipes
        }
    })
}

export const recipesLoaded = () => (dispatch: Dispatch<RecipesDispatchTypes>) => {
    dispatch({
        type: RECIPES_LOADED,
    })
}

export const recipesNotLoaded = () => (dispatch: Dispatch<RecipesDispatchTypes>) => {
    dispatch({
        type: RECIPES_NOT_LOADED,
    })
}