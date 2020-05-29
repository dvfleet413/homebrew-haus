export function addRecipe(recipe){
    return (dispatch) => {
    
        dispatch({type: 'ADD_RECIPE', recipe: recipe})
    }
}