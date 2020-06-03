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
            .then(response => {
            return response.json()
            })
            .then(json => {
                console.log(json)
                dispatch({type: 'ADD_FAVORITE_TO_STORE', recipeId: recipeId})
            })
            .catch(error => {
                console.log(error)
            }) 
    }
}