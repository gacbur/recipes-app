import { SimiliarRecipesDispatchTypes, GET_SIMILIAR_RECIPES, SIMILIAR_RECIPES_FAIL, SIMILIAR_RECIPES_LOADED, similiarRecipe } from '../actions/similiarRecipesActionTypes';

interface InitialStateI {
    similiar_recipes_loaded: boolean
    similiar_recipes_failed: boolean
    similiar_recipes: similiarRecipe[]
}

const initialState: InitialStateI = {
    similiar_recipes_loaded: false,
    similiar_recipes_failed: false,
    similiar_recipes: []
}

const similiarRecipesReducer = (state: InitialStateI = initialState, action: SimiliarRecipesDispatchTypes): InitialStateI => {
    switch (action.type) {
        case GET_SIMILIAR_RECIPES:
            return {
                ...state,
                similiar_recipes: action.payload.similiar_recipes
            }
        case SIMILIAR_RECIPES_LOADED:
            return {
                ...state,
                similiar_recipes_loaded: true
            }
        case SIMILIAR_RECIPES_FAIL:
            return {
                ...state,
                similiar_recipes_failed: false
            }
    }
    return state
}

export default similiarRecipesReducer