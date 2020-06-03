import { config } from '../constants';

export function removeFavorite(userId, recipeId){
    return (dispatch) => {
        dispatch({type: 'REMOVING_FAVORITE'})
        const configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({recipeId: recipeId})
        }
        fetch(`${config.url.API_URL}/users/${userId}/favorites/${recipeId}`, configObj)
            .then(response => {
            return response.json()
            })
            .then(json => {
                console.log(json)
                dispatch({type: 'REMOVE_FAVORITE_FROM_STORE', recipeId: recipeId})
            })
            .catch(error => {
                console.log(error)
            }) 
    }
}