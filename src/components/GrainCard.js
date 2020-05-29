import React from 'react';

const GrainCard = (props) => {
    return(
        <div className="grain-card">
            <span>{props.grain.weight} oz {props.grain.name}</span>
            <button className="btn btn-secondary">Remove Grain</button>
        </div>
    )
}

export default GrainCard