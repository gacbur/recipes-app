import { combineReducers } from 'redux'

import recipesReducer from './recipesReducer'
import singleRecipeReducer from './singleRecipeReducer'


const RootReducer = combineReducers({
    recipes: recipesReducer,
    singleRecipe: singleRecipeReducer
});

export default RootReducer