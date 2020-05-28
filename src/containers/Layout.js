import React, { Component } from 'react';
import Menu from '../components/Menu';

export default class Layout extends Component {
    
    render(){
        return(
            <div>
                <Menu />
                {this.props.children}
                <div className="footer">
                    <p>Footer</p>
                </div>
            </div>
        )
    }
}