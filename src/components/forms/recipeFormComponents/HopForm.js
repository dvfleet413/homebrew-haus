import React, { Component } from 'react';

export default class HopForm extends Component {
    state = {
        //TODO change name to hopId
        name: '',
        hopType: "bittering",
        weight: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        //TODO change text input for name to select field
        return(
            <div className="hop-form">
                <div className="new-ingredient-inputs">
                    <div className="input">
                        <span>Name: </span>
                        <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                    </div>
                    <div className="input">
                        <span>Weight in Ounces: </span>
                        <input type="text" name="weight" onChange={this.handleChange} value={this.state.weight} />
                    </div>
                    <div className="input">
                        <span>Hop Type: </span>
                        <div className="hopType-radio-buttons">
                            <label>
                                <input type="radio" 
                                    name="hopType" 
                                    value="bittering"
                                    selected={this.state.hopType === "bittering"} 
                                    onChange={this.handleChange} />
                                    Bittering Hop
                            </label> 
                            <label>
                                <input type="radio" 
                                    name="hopType" 
                                    value="flavor"
                                    selected={this.state.hopType === "flavor"}
                                    onChange={this.handleChange} />
                                    Flavor Hop
                            </label> 
                            <label>
                                <input type="radio" 
                                    name="hopType" 
                                    value="aroma"
                                    selected={this.state.hopType === "aroma"}
                                    onChange={this.handleChange} />
                                    Aroma Hop
                            </label> 
                            <label>
                                <input type="radio" 
                                    name="hopType" 
                                    value="dry"
                                    selected={this.state.hopType === "dry"}
                                    onChange={this.handleChange} />
                                    Dry Hop
                            </label>
                        </div>
                    </div>
                </div>
                <div className="new-ingredient-btn">
                    <button className="btn btn-primary" onClick={event => this.props.addHop(event, this.state)}>Add Hop</button>
                </div>
            </div>
        )
    }
}