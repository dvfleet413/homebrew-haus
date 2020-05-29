import { uuid } from 'uuid';

export default function manageRecipes(state={recipes: []}, action){
    switch(action.type){
        case 'GET_RECIPES':
            return {
                ...state,
                recipes: action.recipes
            }
        case 'ADD_RECIPE':
            return {
                ...state,
                recipes: [...state.recipes, {
                    name: action.recipe.name,
                    category: action.recipe.category,
                    summary: action.recipe.summary,
                    grains: action.recipe.grainsAttributes,
                    malts: action.recipe.maltsAttributes,
                    yeast: action.recipe.yeastAttributes
                }]
            }
        case 'POST_RECIPE':
            return {
                ...state,
                recipes: [...state.secipes, action.recipe]
            }
        default:
            return state
    }
}