export function userReducer(state={}, action){
    let index
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
        case 'REMOVE_FAVORITE_FROM_STORE':
            index = state.recipes.indexOf(action.recipeId)
            return {
                ...state,
                recipes: state.recipes.slice(0, index).concat(state.recipes.slice(index + 1))
            }  
        case 'LOGOUT':
            return {}
        default:
            return state
    }
}