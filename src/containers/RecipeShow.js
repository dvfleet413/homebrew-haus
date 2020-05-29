import React, {Component} from 'react';
import { connect } from 'react-redux';
import RecipeDetail from '../components/RecipeDetail'

class RecipeShow extends Component {
    render(){
        const recipe = this.props.recipes.find(recipe => recipe.id === parseInt(this.props.recipeId, 10))
        if (recipe) {
            return(
                <RecipeDetail recipe={recipe} />
            )
        } else {
            return(
                <div>
                    <h3>Loading</h3>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {recipes: state.recipes}
}

export default connect(mapStateToProps)(RecipeShow);