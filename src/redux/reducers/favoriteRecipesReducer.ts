import { recipe, FavoriteRecipesDispatchTypes, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../actions/favoriteRecipesActionTypes'


interface InitialStateI {
    favorite_recipes: recipe[]
}

const initialState: InitialStateI = {
    favorite_recipes: localStorage.getItem('favoriteRecipes') ? JSON.parse(localStorage.getItem('favoriteRecipes') || '{}') : []
}

const favoriteRecipesReducer = (state: InitialStateI = initialState, action: FavoriteRecipesDispatchTypes): InitialStateI => {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return {
                favorite_recipes: [...state.favorite_recipes, action.payload]
            }
        case REMOVE_FROM_FAVORITES:

            const temp_facorite_recipes = state.favorite_recipes.filter(item => item.id !== action.payload.id)

            return {
                favorite_recipes: temp_facorite_recipes
            }
        default:
            return state
    }
}

export default favoriteRecipesReducer