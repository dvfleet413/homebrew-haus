import React, { Component } from 'react';

export default class Errors extends Component {

    render(){
        let className = "alert alert-danger hidden"
        if (this.props.errors.length > 0){
            className = "alert alert-danger show"
            setTimeout(this.props.clearErrors, 6000)
        }
        return (
            <div className={className} role="alert">
                {this.props.errors.join(', ')}
            </div>
        )
    }
}