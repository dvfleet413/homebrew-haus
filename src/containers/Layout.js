import React, { Component } from 'react';
import Menu from '../components/Menu';

export default class Layout extends Component {
    
    render(){
        return(
            <>
                <Menu />
                {this.props.children}
            </>
        )
    }
}