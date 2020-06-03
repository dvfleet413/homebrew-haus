export function userReducer(state={}, action){
    switch(action.type){
        case 'ASSIGN_CURRENT_USER':
            return {
                ...action.user,
                recipes: action.user.recipes.map(recipe => recipe.id)
            }
        case 'ADD_FAVORITE_TO_STORE':
            return {
                ...state,
                recipes: [...state.recipes, action.recipeId]
            }
        case 'LOGOUT':
            return {}
        default:
            return state
    }
}