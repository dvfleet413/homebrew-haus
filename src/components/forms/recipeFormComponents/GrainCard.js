import React from 'react';
import {connect} from 'react-redux';

const GrainCard = (props) => {
    const storedGrain = props.grains.find(element => element.id === parseInt(props.grain.grainId, 10))
    return(
        <div className="grain-card">
            <span>{props.grain.weight} oz {storedGrain.name}</span>
            <button className="btn btn-secondary" onClick={event => props.removeGrain(event, props.grain.uuid)}>Remove Grain</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        grains: state.grains
    }
}

export default connect(mapStateToProps)(GrainCard)