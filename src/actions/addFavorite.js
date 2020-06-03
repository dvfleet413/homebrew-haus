import { config } from '../constants';

export function addFavorite(userId, recipeId){
    return (dispatch) => {
        dispatch({type: 'ADDING_NEW_FAVORITE'})
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({recipeId: recipeId})
        }
        fetch(`${config.url.API_URL}/users/${userId}/favorites`, configObj)
            .then(function(response){
            return response.json()
            })
            .then(function(json){
                console.log(json)
            })
            .catch(function(error){
                console.log(error)
            }) 
    }
}