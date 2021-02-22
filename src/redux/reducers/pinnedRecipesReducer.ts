import { recipe, PinnedRecipesDispatchTypes, ADD_TO_PINNED, REMOVE_FROM_PINNED } from '../actions/pinnedRecipesActionTypes'

interface InitialStateI {
    pinned_recipes: recipe[]
}

const initialState: InitialStateI = {
    pinned_recipes: localStorage.getItem('pinnedRecipes') ? JSON.parse(localStorage.getItem('pinnedRecipes') || '{}') : []
}

const pinnedRecipesReducer = (state: InitialStateI = initialState, action: PinnedRecipesDispatchTypes) => {
    switch (action.type) {
        case ADD_TO_PINNED:
            return {
                pinned_recipes: [...state.pinned_recipes, action.payload]
            }
        case REMOVE_FROM_PINNED:
            const temp_pinned_recipes = state.pinned_recipes.filter(item => item.id !== action.payload.id)
            return {
                pinned_recipes: temp_pinned_recipes
            }
        default:
            return state
    }
}

export default pinnedRecipesReducer