import React from 'react';
import { connect } from 'react-redux';

const HopCard = (props) => {
    const storedHop = props.hops.find(element => element.id === parseInt(props.hop.hopId, 10))
    return(
        <div className="hop-card">
            <span>{props.hop.weight} oz {storedHop.name} ({props.hop.hopType} hop)</span>
            <button className="btn btn-secondary" onClick={event => props.removeHop(event, props.hop.uuid)}>Remove Hop</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        hops: state.hops
    }
}

export default connect(mapStateToProps)(HopCard)