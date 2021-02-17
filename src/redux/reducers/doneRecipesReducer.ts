import { DoneRecipesDispatchTypes, ADD_TO_DONE, REMOVE_FROM_DONE, recipe } from '../actions/doneRecipesActionTypes'

interface InitialStateI {
    done_recipes: recipe[]
}

const initialState: InitialStateI = {
    done_recipes: localStorage.getItem('doneRecipes') ? JSON.parse(localStorage.getItem('doneRecipes') || '{}') : []
}

const doneRecipesReducer = (state: InitialStateI = initialState, action: DoneRecipesDispatchTypes): InitialStateI => {
    switch (action.type) {
        case ADD_TO_DONE:
            return {
                done_recipes: [...state.done_recipes, action.payload]
            }
        case REMOVE_FROM_DONE:
            const temp_done_recipes = state.done_recipes.filter(item => item.id !== action.payload.id)
            return {
                done_recipes: temp_done_recipes
            }
        default:
            return state
    }
}

export default doneRecipesReducer