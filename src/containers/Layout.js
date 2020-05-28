import React, { Component } from 'react';

export default class Layout extends Component {
    
    render(){
        return(
            <div className="app">
                <div className="navbar">
                    <h1>Homebrewer</h1>
                </div>
                {this.props.children}
                <div className="footer">
                    <p>Footer</p>
                </div>
            </div>
        )
    }
}