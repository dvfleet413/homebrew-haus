import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = (props) => {
    const userRecipeIds = ( Object.keys(props.currentUser).length > 0 ? props.currentUser.recipes : [])
    return(
        <div className="beer-card">
            <h1>{props.recipe.name}</h1>
            <h3>{props.recipe.category}</h3>
            <p>{props.recipe.summary}</p>
            <div className="recipe-links">
                <Link to={`/recipes/${props.recipe.id}`}>View Recipe</Link> 
                {userRecipeIds.includes(props.recipe.id) ? 
                (<span className="like-clicked"
                       onClick={(event) => props.handleUnlikeClick(event, props.currentUser.id, props.recipe.id)}>
                    <i className="fas fa-thumbs-up" />
                </span>
                )
                :
                (<span className="like-unclicked"
                       onClick={(event) => props.handleLikeClick(event, props.currentUser.id, props.recipe.id)}>
                    <i className="far fa-thumbs-up" />
                </span>
                )}
            </div>
        </div>
    )
}

export default Recipe