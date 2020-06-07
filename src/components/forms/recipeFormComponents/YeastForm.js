import React, { Component } from 'react';
import { connect } from 'react-redux';

class YeastForm extends Component {
    state = {
        yeastId: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        const options = this.props.yeasts.map(yeast => <option key={`yeast-${yeast.id}`} value={yeast.id}>{yeast.name}</option>)
        return(
            <div className="yeast-form">
                <div className="new-ingredient-inputs">
                    <div className="input">
                        <select name="yeastId" value={this.state.yeastId} onChange={this.handleChange}>
                            { options }
                        </select>
                    </div>
                </div>
                <div className="new-ingredient-btn">
                    <button className="btn btn-primary" onClick={event => this.props.addYeast(event, this.state)}>Add Yeast</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {yeasts: state.yeasts}
}

export default connect(mapStateToProps)(YeastForm)