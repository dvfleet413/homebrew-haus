import { config } from '../constants';

export function addRecipe(recipe, history){
    return (dispatch) => {
        dispatch({type: 'POSTING_NEW_RECIPE'})
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({recipe})
        }
        fetch(`${config.url.API_URL}/recipes`, configObj)
            .then(function(response){
            return response.json()
            })
            .then(function(json){
                dispatch({type: 'ADD_RECIPE', recipe: json})
                history.push(`/recipes/${json.id}`)
            })
            .catch(function(error){
                console.log(error)
            }) 
    }
}