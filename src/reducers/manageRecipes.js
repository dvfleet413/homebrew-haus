export default function manageRecipes(state={recipes: [], currentUser: {}, errorMessages: []}, action){
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
                currentUser: {
                    ...action.user,
                    recipes: action.user.recipes.map(recipe => recipe.id)
                }
            }
        case 'LOGOUT':
            return {
                ...state,
                currentUser: {}
            }
        case 'ADD_LOGIN_ERROR':
            return {
                ...state,
                errorMessages: [...state.errorMessages, action.errorMessage]
            }
        case 'CLEAR_ERRORS':
            return {
                ...state,
                errorMessages: []
            }
        default:
            return state
    }
}