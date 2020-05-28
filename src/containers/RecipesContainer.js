import React, { Component } from 'react';
import { connect } from 'react-redux';
import Recipe from '../components/Recipe'

class RecipesContainer extends Component {

    // recipes = this.props.recipes.map(recipe => <Recipe />)

    render(){
        return(
            <div>

            </div>
        )
    }

}

export default connect()(RecipesContainer)