import { combineReducers } from 'redux'

import recipesReducer from './recipesReducer'
import singleRecipeReducer from './singleRecipeReducer'
import similiarRecipesReducer from './similiarRecipesReducer'
import pinnedRecipesReducer from './pinnedRecipesReducer'

const RootReducer = combineReducers({
    recipes: recipesReducer,
    singleRecipe: singleRecipeReducer,
    similiarRecipes: similiarRecipesReducer,
    pinnedRecipes: pinnedRecipesReducer
});

export default RootReducer