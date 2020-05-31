import React, {Component} from 'react';

export default class LoginForm extends Component {
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
    }

    render(){
        return(
            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <span>Username: </span><input type="text" 
                                                  name="username" 
                                                  value={this.state.username}
                                                  onChange={event => this.handleChange(event)} />
                    <br />
                    <span>Password: </span><input type="password" 
                                                  name="password" 
                                                  value={this.state.password}
                                                  onChange={event => this.handleChange(event)} />
                    <br />
                    <input type="submit" value="Log In" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}