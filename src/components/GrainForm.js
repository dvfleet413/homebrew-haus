import React, { Component } from 'react';

export default class GrainForm extends Component {
    state = {
        name: '',
        weight: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div className="grain-form">
                <div className="new-ingredient-inputs">
                    <div className="input"><span>Name: </span><input type="text" name="name" onChange={this.handleChange} value={this.state.name} /></div>
                    <div className="input"><span>Weight in Ounces: </span><input type="text" name="weight" onChange={this.handleChange} value={this.state.weight} /></div>
                </div>
                <div className="new-ingredient-btn">
                    <button className="btn btn-primary" onClick={event => this.props.addGrain(event, this.state)}>Add Grain</button>
                </div>
            </div>
        )
    }
}