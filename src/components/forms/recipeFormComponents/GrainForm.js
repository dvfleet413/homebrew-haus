import React, { Component } from 'react';
import { connect } from 'react-redux';

class GrainForm extends Component {
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
        const options = this.props.grains.map(grain => <option value={grain.id} key={`grain-${grain.id}`}>{grain.name}</option>)
        return(
            <div className="grain-form">
                <div className="new-ingredient-inputs">
                    <select name="grainId" value={this.state.hopId} onChange={this.handleChange}>
                        { options }
                    </select>
                    <div className="input"><span>Weight in Ounces: </span><input type="text" name="weight" onChange={this.handleChange} value={this.state.weight} /></div>
                </div>
                <div className="new-ingredient-btn">
                    <button className="btn btn-primary" onClick={event => this.props.addGrain(event, this.state)}>Add Grain</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {grains: state.grains}
}

export default connect(mapStateToProps)(GrainForm)