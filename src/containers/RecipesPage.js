import React, { Component } from 'react';
import { connect } from 'react-redux';
import Recipe from '../components/Recipe';


class RecipesPage extends Component {
    
    render(){
        const recipes = this.props.recipes.map(recipe => <Recipe key={`${recipe.id}-recipe`} recipe={recipe} match={this.props.match}/>)
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