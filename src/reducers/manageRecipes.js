import { uuid } from 'uuid';

export default function manageRecipes(state={recipes: []}, action){
    let newId;
    switch(action.type){
        case 'GET_RECIPES':
            return {
                ...state,
                recipes: action.recipes
            }
        case 'ADD_RECIPE':
            newId = uuid()
            return {
                ...state,
                recipes: [...state.recipes, {
                    id: newId,
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