import React from 'react';

const Errors = (props) => {
    return (
        <div className="alert alert-danger" role="alert">
            {props.errors.join(', ')}
        </div>
    )
}

export default Errors