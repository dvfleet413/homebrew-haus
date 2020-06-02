import { config } from '../constants';

export function fetchRecipes() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_RECIPES_REQUEST' });
      fetch(`${config.url.API_URL}/recipes`)
        .then(response => response.json())
        .then(recipes => dispatch({ type: 'GET_RECIPES', recipes }))
        .catch(error => console.log(error));
    };
  }