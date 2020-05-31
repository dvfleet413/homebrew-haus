export default function manageRecipes(state={recipes: [], currentUser: {}}, action){
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
        case 'ASSIGN_CURRENT_USER':
            return {
                ...state,
                currentUser: action.user
            }
        default:
            return state
    }
}