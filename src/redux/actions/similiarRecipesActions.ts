import { Dispatch } from 'redux'
import { SimiliarRecipesDispatchTypes, GET_SIMILIAR_RECIPES, SIMILIAR_RECIPES_FAIL, SIMILIAR_RECIPES_LOADED, similiarRecipe } from './similiarRecipesActionTypes'

export const getSimiliarRecipes = (similiar_recipes: similiarRecipe[]) => (dispatch: Dispatch<SimiliarRecipesDispatchTypes>) => {
    dispatch({
        type: GET_SIMILIAR_RECIPES,
        payload: {
            similiar_recipes
        }
    })
}

export const similiarRecipesLoaded = () => (dispatch: Dispatch<SimiliarRecipesDispatchTypes>) => {
    dispatch({
        type: SIMILIAR_RECIPES_LOADED
    })
}

export const similiarRecipesFail = () => (dispatch: Dispatch<SimiliarRecipesDispatchTypes>) => {
    dispatch({
        type: SIMILIAR_RECIPES_FAIL
    })
}
