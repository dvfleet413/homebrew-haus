import React, { Component } from 'react';
import Navbar from '../components/Navbar';

export default class Layout extends Component {
    
    render(){
        return(
            <div className="app">
                <div className="navbar">
                    <Navbar />
                </div>
                {this.props.children}
                <div className="footer">
                    <p>Footer</p>
                </div>
            </div>
        )
    }
}