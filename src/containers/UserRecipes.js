import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavorite } from '../actions/addFavorite'
import { removeFavorite } from '../actions/removeFavorite';
import RecipeSummary from '../components/RecipeSummary';


class UserRecipes extends Component {

    handleLikeClick = (event, userId, recipeId) => {
        event.preventDefault()
        this.props.addFavorite(userId, recipeId)
    }

    handleUnlikeClick = (event, userId, recipeId) => {
        event.preventDefault()
        this.props.removeFavorite(userId, recipeId)
    }

    render(){
        if (Object.keys(this.props.currentUser).length > 0){
            const userRecipes = this.props.recipes.filter(recipe => this.props.currentUser.recipes.includes(recipe.id))
            const recipes = userRecipes.map(recipe => <RecipeSummary key={`${recipe.id}-recipe`} 
                                                                     recipe={recipe} 
                                                                     match={this.props.match} 
                                                                     handleLikeClick={this.handleLikeClick}
                                                                     handleUnlikeClick={this.handleUnlikeClick}
                                                                     currentUser={this.props.currentUser}/>)
            return(
                <div className="recipe-container">
                    {parseInt(this.props.userId, 10) !== this.props.currentUser.id ? <Redirect to='/recipes' /> : <h1>Your Saved Recipes</h1>}
                    {recipes}
                </div>
            )
        } else {
            return(
                <div className="recipe-container">
                    <h2>Loading</h2>
                </div>
            )
        }
    }
}

function mapStateToProps(state){
    return { 
        recipes: state.recipes,
        currentUser: state.currentUser }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFavorite: (userId, recipeId) => dispatch(addFavorite(userId, recipeId)),
        removeFavorite: (userId, recipeId) => dispatch(removeFavorite(userId, recipeId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRecipes);