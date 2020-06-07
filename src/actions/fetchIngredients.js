import { config } from '../constants';

export function fetchIngredients() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_INGREDIENTS_REQUEST' });
      fetch(`${config.url.API_URL}/grains`)
        .then(response => response.json())
        .then(grains => dispatch({ type: 'GET_GRAINS', grains }))
        .catch(error => console.log(error));

      fetch(`${config.url.API_URL}/hops`)
        .then(response => response.json())
        .then(hops => dispatch({ type: 'GET_HOPS', hops }))
        .catch(error => console.log(error));

      fetch(`${config.url.API_URL}/malts`)
        .then(response => response.json())
        .then(malts => dispatch({ type: 'GET_MALTS', malts }))
        .catch(error => console.log(error));

      fetch(`${config.url.API_URL}/yeasts`)
        .then(response => response.json())
        .then(yeasts => dispatch({ type: 'GET_YEASTS', yeasts }))
        .catch(error => console.log(error));
    };
  }