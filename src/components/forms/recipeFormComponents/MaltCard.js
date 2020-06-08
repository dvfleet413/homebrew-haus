import React from 'react';
import { connect } from 'react-redux';

const MaltCard = (props) => {
    const storedMalt = props.malts.find(element => element.id === parseInt(props.malt.maltId, 10))
    return(
        <div className="malt-card">
            <span>{props.malt.weight} lb {storedMalt.name}</span>
            <button className="btn btn-secondary" onClick={event => props.removeMalt(event, props.malt.id)}>Remove Malt</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        malts: state.malts
    }
}

export default connect(mapStateToProps)(MaltCard)