import React from 'react';
import { connect } from 'react-redux';

const YeastCard = (props) => {
    const storedYeast = props.yeasts.find(element => element.id === parseInt(props.yeast.yeastId, 10))
    return(
        <div className="yeast-card">
            <span>{storedYeast.name}</span>
            <button className="btn btn-secondary" onClick={event => props.removeYeast(event)}>Remove Yeast</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        yeasts: state.yeasts
    }
}

export default connect(mapStateToProps)(YeastCard)