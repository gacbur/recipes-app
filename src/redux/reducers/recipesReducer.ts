import { RecipesDispatchTypes, Recipe, RECIPES_LOADED, RECIPES_NOT_LOADED, GET_RECIPES } from '../actions/recipesActionTypes'

interface initialStateI {
    recipes_loaded?: boolean,
    recipes: Recipe[]
}

const initialState: initialStateI = {
    recipes: []
}

const recipesReducer = (state: initialStateI = initialState, action: RecipesDispatchTypes): initialStateI => {
    switch (action.type) {
        case RECIPES_NOT_LOADED:
            return {
                ...state,
                recipes_loaded: false
            }
        case RECIPES_LOADED:
            return {
                ...state,
                recipes_loaded: true
            }
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload.recipes
            }
        default:
            return state
    }

}

export default recipesReducer