import { combineReducers } from 'redux'

import recipesReducer from './recipesReducer'

const RootReducer = combineReducers({
    recipes: recipesReducer
});

export default RootReducer