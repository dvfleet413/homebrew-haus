import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RecipeSummary from '../components/RecipeSummary';


class RecipesPage extends Component {
    
    render(){
        const recipes = this.props.recipes.map(recipe => <RecipeSummary key={`${recipe.id}-recipe`} recipe={recipe} match={this.props.match}/>)
        return(
            <div className="recipe-container">
                <Link to={`/recipes/new`} className="btn btn-primary">Add New Recipe</Link>
                {recipes}
            </div>
        )
     }
}

const mapStateToProps = (state) => {
    return {recipes: state.recipes}
}


export default connect(mapStateToProps)(RecipesPage);