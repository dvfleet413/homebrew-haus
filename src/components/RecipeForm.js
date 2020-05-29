import React, { Component } from 'react';

export default class RecipeForm extends Component {
    state = {
        name: '',
        category: '',
        summary: '',
        grainsAttributes: [],
        maltsAttributes: [],
        yeastAttributes: {}
    }

    render(){
        return(
            <div className="beer-form-container">
                <h1>Add New Recipe</h1>
            </div>
        )
    }
}