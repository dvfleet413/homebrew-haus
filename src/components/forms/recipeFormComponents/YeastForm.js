import React, { Component } from 'react';

export default class YeastForm extends Component {
    state = {
        //TODO change name to yeastId
        name: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        //TODO change text input for name to select field
        return(
            <div className="yeast-form">
                <div className="new-ingredient-inputs">
                    <div className="input">
                        <span>Name: </span>
                        <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                    </div>
                </div>
                <div className="new-ingredient-btn">
                    <button className="btn btn-primary" onClick={event => this.props.addYeast(event, this.state)}>Add Yeast</button>
                </div>
            </div>
        )
    }

}