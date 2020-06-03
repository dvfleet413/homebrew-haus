export function recipeReducer(state=[], action){
    switch(action.type){
        case 'GET_RECIPES':
            return action.recipes
        case 'ADD_RECIPE':
            return [...state.recipes, action.recipe]
        default:
            return state
    }
}