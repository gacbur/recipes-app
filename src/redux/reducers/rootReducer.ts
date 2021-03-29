import { combineReducers } from 'redux'

import recipesReducer from './recipesReducer'
import singleRecipeReducer from './singleRecipeReducer'
import similiarRecipesReducer from './similiarRecipesReducer'
import pinnedRecipesReducer from './pinnedRecipesReducer'
import doneRecipesReducer from './doneRecipesReducer'
import favoriteRecipesReducer from './favoriteRecipesReducer'

const RootReducer = combineReducers({
    recipes: recipesReducer,
    singleRecipe: singleRecipeReducer,
    similiarRecipes: similiarRecipesReducer,
    pinnedRecipes: pinnedRecipesReducer,
    doneRecipes: doneRecipesReducer,
    favoriteRecipes: favoriteRecipesReducer
});

export default RootReducer;