import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = (props) => {
    return(
        <div className="beer-card">
            <h1>{props.recipe.name}</h1>
            <h3>{props.recipe.category}</h3>
            <p>{props.recipe.summary}</p>
            <Link to={`/recipes/${props.recipe.id}`}>View Recipe</Link>
        </div>
    )
}

export default Recipe