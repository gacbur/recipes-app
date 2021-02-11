import { SingleRecipeDispatchTypes, SINGLE_RECIPE_LOADED, SINGLE_RECIPE_NOT_LOADED, GET_SINGLE_RECIPE, singleRecipe } from '../actions/singleRecipeActionTypes'

interface initialStateI {
    recipe_loaded: boolean,
    single_recipe?: singleRecipe
}

const initialState: initialStateI = {
    recipe_loaded: false
}

const singleRecipeReducer = (state: initialStateI = initialState, action: SingleRecipeDispatchTypes): initialStateI => {
    switch (action.type) {
        case SINGLE_RECIPE_LOADED:
            return {
                ...state,
                recipe_loaded: true
            }
        case SINGLE_RECIPE_NOT_LOADED:
            return {
                ...state,
                recipe_loaded: false
            }
        case GET_SINGLE_RECIPE:
            return {
                ...state,
                single_recipe: action.payload.single_recipe
            }
        default:
            return state;
    }
}

export default singleRecipeReducer