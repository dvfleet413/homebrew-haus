import React from 'react';

const MaltCard = (props) => {
    return(
        <div className="malt-card">
            <span>{props.malt.weight} lb {props.malt.name}</span>
            <button className="btn btn-secondary">Remove Malt</button>
        </div>
    )
}

export default MaltCard