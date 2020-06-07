import React, { Component } from 'react';
import { connect } from 'react-redux';

class MaltForm extends Component {
    state = {
        maltId: '',
        weight: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        const options = this.props.malts.map(malt => <option key={`malt-${malt.id}`} value={malt.id}>{malt.name}</option>)
        return(
            <div className="malt-form">
                <div className="new-ingredient-inputs">
                    {/* <div className="input"><span>Name: </span><input type="text" name="name" onChange={this.handleChange} value={this.state.name} /></div> */}
                    <select name="maltId" value={this.state.maltId} onChange={this.handleChange}>
                        { options }
                    </select>
                    <div className="input"><span>Weight in Pounds: </span><input type="text" name="weight" onChange={this.handleChange} value={this.state.weight} /></div>
                </div>
                <div className="new-ingredient-btn">
                    <button className="btn btn-primary" onClick={event => this.props.addMalt(event, this.state)}>Add Malt</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {malts: state.malts}
}

export default connect(mapStateToProps)(MaltForm)