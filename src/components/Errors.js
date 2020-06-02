import React, { Component } from 'react';

export default class Errors extends Component {
    
    componentDidMount(){
        this.interval = setInterval(this.props.clearErrors, 5000)
    }

    componentWillUnmount(){
        if(this.props.errors.length > 0){this.props.clearErrors()}
        clearInterval(this.interval)
    }

    render(){
        return (
            <div className="alert alert-danger" role="alert">
                {this.props.errors.join(', ')}
            </div>
        )
    }
}