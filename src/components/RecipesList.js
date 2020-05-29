import React from 'react';
import { Link } from 'react-router-dom';
 
const RecipesList = ({ recipes }) => {
  const renderRecipes = recipes.map(recipe =>
    <Link key={recipe.id} to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
  );
 
  return (
    <div>
      {renderRecipes}
    </div>
  );
};
 
export default RecipesList;