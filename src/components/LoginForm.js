import React, {Component} from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/login';
import { withRouter } from "react-router";

class LoginForm extends Component {
    state = {
        username: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state, this.props.history)
    }

    render(){
        return(
            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <div className="login-input">
                        <span>Username: </span><input type="text" 
                                                    name="username" 
                                                    value={this.state.username}
                                                    onChange={event => this.handleChange(event)} />
                    </div>
                    <br />
                    <div className="login-input">
                        <span>Password: </span><input type="password" 
                                                    name="password" 
                                                    value={this.state.password}
                                                    onChange={event => this.handleChange(event)} />
                    </div>
                    <br />
                    <input type="submit" value="Log In" className="btn btn-secondary" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (credentials, history) => dispatch(login(credentials, history))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(LoginForm))