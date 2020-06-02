import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import RecipeSummary from '../components/RecipeSummary';


class UserRecipes extends Component {
    render(){
        if (Object.keys(this.props.currentUser).length > 0){
            const userRecipes = this.props.recipes.filter(recipe => this.props.currentUser.recipes.includes(recipe.id))
            const recipes = userRecipes.map(recipe => <RecipeSummary key={`${recipe.id}-recipe`} recipe={recipe} match={this.props.match}/>)
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


export default connect(mapStateToProps)(UserRecipes);