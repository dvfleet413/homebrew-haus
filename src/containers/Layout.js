import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/logout';
import AuthenticatedMenu from '../components/AuthenticatedMenu'
import UnauthenticatedMenu from '../components/UnauthenticatedMenu';
import Errors from '../components/Errors';

class Layout extends Component {

    handleLogout = () => {
        this.props.logout()
    }
    
    render(){
        return(
            <>
                {Object.keys(this.props.currentUser).length > 0 ? <AuthenticatedMenu user={this.props.currentUser} handleClick={this.handleLogout} /> : <UnauthenticatedMenu />}
                {this.props.errors.length > 0 ? <Errors errors={this.props.errors} /> : null}
                {this.props.children}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        errors: state.errorMessages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {dispatch(logout())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)