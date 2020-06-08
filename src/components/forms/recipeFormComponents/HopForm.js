import React, { Component } from 'react';
import { connect } from 'react-redux';

class HopForm extends Component {
    state = {
        hopId: '1',
        hopType: "bittering",
        weight: '',
        alphaAcid: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        const options = this.props.hops.map(hop => <option key={`hop-${hop.id}`} value={hop.id}>{hop.name}</option>)
        return(
            <div className="hop-form">
                <div className="new-ingredient-inputs">
                    <select name="hopId" value={this.state.hopId} onChange={this.handleChange}>
                        { options }
                    </select>
                    <div className="input">
                        <span>Weight in Ounces: </span>
                        <input type="text" name="weight" onChange={this.handleChange} value={this.state.weight} />
                    </div>
                    <div className="input">
                        <span>Percent Alpha Acid (optional): </span>
                        <input type="text" name="alphaAcid" onChange={this.handleChange} value={this.state.alphaAcid} />
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

const mapStateToProps = (state) => {
    return {hops: state.hops}
}

export default connect(mapStateToProps)(HopForm)