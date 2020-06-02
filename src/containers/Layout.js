import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/logout';
import { clearErrors } from '../actions/clearErrors';
import { withRouter } from 'react-router-dom';
import AuthenticatedMenu from '../components/AuthenticatedMenu'
import UnauthenticatedMenu from '../components/UnauthenticatedMenu';
import Errors from '../components/Errors';

class Layout extends Component {

    handleLogout = (event) => {
        event.preventDefault()
        const { history } = this.props
        this.props.logout(history)
    }
    
    render(){
        return(
            <>
                {Object.keys(this.props.currentUser).length > 0 ? <AuthenticatedMenu user={this.props.currentUser} handleClick={this.handleLogout} /> : <UnauthenticatedMenu />}
                {<Errors errors={this.props.errors} clearErrors={this.props.clearErrors} />}
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
        logout: (history) => {dispatch(logout(history))},
        clearErrors: () => {dispatch(clearErrors())}
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout))