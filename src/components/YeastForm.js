import React, { Component } from 'react';

export default class YeastForm extends Component {
    state = {
        name: ''
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
                </div>
                <div className="new-ingredient-btn">
                    <button className="btn btn-primary" onClick={event => this.props.addYeast(event, this.state)}>Add Yeast</button>
                </div>
            </div>
        )
    }

}