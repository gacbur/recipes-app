import { combineReducers } from 'redux'

import recipesReducer from './recipesReducer'
import singleRecipeReducer from './singleRecipeReducer'
import similiarRecipesReducer from './similiarRecipesReducer'

const RootReducer = combineReducers({
    recipes: recipesReducer,
    singleRecipe: singleRecipeReducer,
    similiarRecipes: similiarRecipesReducer
});

export default RootReducer