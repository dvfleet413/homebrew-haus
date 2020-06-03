import { errorReducer } from './errorReducer';
import { recipeReducer } from './recipeReducer';
import { userReducer } from './userReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    recipes: recipeReducer,
    currentUser: userReducer,
    errorMessages: errorReducer
})

export default rootReducer;