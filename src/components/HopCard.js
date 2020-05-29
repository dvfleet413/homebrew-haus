import React from 'react';

const HopCard = (props) => {
    return(
        <div className="hop-card">
            <span>{props.hop.weight} oz {props.hop.name}</span>
            <button className="btn btn-secondary" onClick={event => props.removeHop(event, props.hop.id)}>Remove Hop</button>
        </div>
    )
}

export default HopCard