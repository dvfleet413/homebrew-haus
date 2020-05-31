import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignupForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return (
            <div className="login-container">
                <h1>Create A New Account</h1>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <div className="login-input">
                        <span>Username: </span><input type="text" 
                                                    name="name" 
                                                    onChange={event => this.handleChange(event)} 
                                                    value={this.state.name} />
                    </div>
                    <br />
                    <div className="login-input">
                        <span>Email: </span><input type="text" 
                                                    name="email" 
                                                    onChange={event => this.handleChange(event)} 
                                                    value={this.state.email} />
                    </div>
                    <br />
                    <div className="login-input">
                        <span>Password: </span><input type="password" 
                                                    name="password" 
                                                    onChange={event => this.handleChange(event)} 
                                                    value={this.state.password} />
                    </div>
                    <br />
                    <div className="login-input">
                        <span>Confirm Password: </span><input type="password" 
                                                    name="passwordConfirmation" 
                                                    onChange={event => this.handleChange(event)} 
                                                    value={this.state.passwordConfirmation} />
                    </div>
                    <br />
                    <input type="submit" value="Create Account" className="btn btn-secondary" />
                </form>
            </div>
        )
    }
}

export default connect()(SignupForm)