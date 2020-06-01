import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import RecipeSummary from '../components/RecipeSummary';


class UserRecipes extends Component {
    render(){
        if (Object.keys(this.props.currentUser).length > 0){
            const recipes = this.props.currentUser.recipes.map(recipe => <RecipeSummary key={`${recipe.id}-recipe`} recipe={recipe} match={this.props.match}/>)
            return(
                <div className="recipe-container">
                    {this.props.userId != this.props.currentUser.id ? <Redirect to='/recipes' /> : <h1>Your Saved Recipes</h1>}
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
    return { currentUser: state.currentUser }
}


export default connect(mapStateToProps)(UserRecipes);