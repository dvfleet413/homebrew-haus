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
                recipes: [...state.recipes, action.recipe]
            }
        default:
            return state
    }
}