import React, {Component} from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/login';

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
        // const configObject = {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accepts": 'application/json'
        //     },
        //     body: JSON.stringify(this.state)
        // }
        // fetch("http://localhost:8080/login", configObject)
        //     .then(response => {
        //         return response.json()
        //     })
        //     .then(json => {
        //         console.log(json.user)
        //         console.log(json.jwt)
        //         localStorage.setItem("token", json.jwt)
        //     })
        //     .catch(error => {
        //         console.log(error.message)
        //     })
        this.props.login(this.state)
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

const mapDispatchToProps = (dispatch) => {
    return {
        login: (credentials) => dispatch(login(credentials))
    }
}

export default connect(null, mapDispatchToProps)(LoginForm)