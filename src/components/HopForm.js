import React, { Component } from 'react';

export default class HopForm extends Component {
    state = {
        name: '',
        hopType: '',
        weight: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div className="hop-form">
                <div className="new-ingredient-inputs">
                    <div className="input">
                        <span>Name: </span>
                        <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                    </div>
                    <div className="input">
                        <span>Hop Type: </span>
                        <select type="text" name="hopType" onChange={this.handleChange} value={this.state.hopType}>
                            <option value='bittering'>Bittering</option>
                            <option value='flavor'>Flavor</option>
                            <option value='aroma'>Aroma</option>
                        </select>
                    </div>
                    <div className="input"><span>Weight in Ounces: </span><input type="text" name="weight" onChange={this.handleChange} value={this.state.weight} /></div>
                </div>
                <div className="new-ingredient-btn">
                    <button className="btn btn-primary" onClick={event => this.props.addHop(event, this.state)}>Add Hop</button>
                </div>
            </div>
        )
    }
}