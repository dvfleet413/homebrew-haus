import React from 'react';

const YeastCard = (props) => {
    return(
        <div className="yeast-card">
            <span>{props.yeast.name}</span>
            <button className="btn btn-secondary" onClick={event => props.removeYeast(event)}>Remove Yeast</button>
        </div>
    )
}

export default YeastCard