import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/logout';
import AuthenticatedMenu from '../components/AuthenticatedMenu'
import UnauthenticatedMenu from '../components/UnauthenticatedMenu';

class Layout extends Component {

    handleLogout = () => {
        this.props.logout()
    }
    
    render(){
        return(
            <>
                {Object.keys(this.props.currentUser).length > 0 ? <AuthenticatedMenu user={this.props.currentUser} handleClick={this.handleLogout} /> : <UnauthenticatedMenu />}
                {this.props.children}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {dispatch(logout())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)