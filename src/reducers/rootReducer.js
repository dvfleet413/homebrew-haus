import { errorReducer } from './errorReducer';
import { recipeReducer } from './recipeReducer';
import { grainReducer, hopReducer, maltReducer, yeastReducer } from './ingredientReducers';
import { userReducer } from './userReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    recipes: recipeReducer,
    grains: grainReducer,
    hops: hopReducer,
    malts: maltReducer,
    yeasts: yeastReducer,
    currentUser: userReducer,
    errorMessages: errorReducer
})

export default rootReducer;