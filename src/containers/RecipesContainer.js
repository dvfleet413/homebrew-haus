import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions/fetchRecipes'
import Recipe from '../components/Recipe'


class RecipesContainer extends Component {



    recipes = this.props.recipes.map(recipe => <Recipe />)

    render(){
        return(
            <div>

            </div>
        )
    }

}

function mapStateToProps(state){
    return {recipes: state.recipes}
}

function mapDispatchToProps(dispatch){
    return { fetchRecipes: () => dispatch(fetchRecipes())}
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)