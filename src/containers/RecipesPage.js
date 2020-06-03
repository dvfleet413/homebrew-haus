import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavorite } from '../actions/addFavorite'
import { removeFavorite } from '../actions/removeFavorite';
import RecipeSummary from '../components/RecipeSummary';


class RecipesPage extends Component {
    
    handleLikeClick = (event, userId, recipeId) => {
        event.preventDefault()
        this.props.addFavorite(userId, recipeId)
    }

    handleUnlikeClick = (event, userId, recipeId) => {
        event.preventDefault()
        this.props.removeFavorite(userId, recipeId)
    }

    render(){
        const recipes = this.props.recipes.map(recipe => <RecipeSummary key={`${recipe.id}-recipe`} 
                                                                        recipe={recipe} 
                                                                        match={this.props.match} 
                                                                        handleLikeClick={this.handleLikeClick}
                                                                        handleUnlikeClick={this.handleUnlikeClick}
                                                                        currentUser={this.props.currentUser} />)
        return(
            <div className="recipe-container">
                <Link to={`/recipes/new`} className="btn btn-primary">Add New Recipe</Link>
                {recipes}
            </div>
        )
     }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes,
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFavorite: (userId, recipeId) => dispatch(addFavorite(userId, recipeId)),
        removeFavorite: (userId, recipeId) => dispatch(removeFavorite(userId, recipeId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage);