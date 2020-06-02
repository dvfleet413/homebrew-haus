import React from 'react';

const GrainCard = (props) => {
    return(
        <div className="grain-card">
            <span>{props.grain.weight} oz {props.grain.name}</span>
            <button className="btn btn-secondary" onClick={event => props.removeGrain(event, props.grain.id)}>Remove Grain</button>
        </div>
    )
}

export default GrainCard