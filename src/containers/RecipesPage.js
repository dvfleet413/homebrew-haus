import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeSummary from '../components/RecipeSummary';


class RecipesPage extends Component {
    
    render(){
        const recipes = this.props.recipes.map(recipe => <RecipeSummary key={`${recipe.id}-recipe`} recipe={recipe} match={this.props.match}/>)
        return(
            <div className="recipe-container">
                {recipes}
            </div>
        )
     }
}

const mapStateToProps = (state) => {
    return {recipes: state.recipes}
}


export default connect(mapStateToProps)(RecipesPage);