export function fetchRecipes() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_RECIPES_REQUEST' });
      fetch('http://localhost:8080/recipes')
        .then(response => response.json())
        .then(recipes => dispatch({ type: 'GET_RECIPES', recipes }))
        .catch(error => console.log(error));
    };
  }