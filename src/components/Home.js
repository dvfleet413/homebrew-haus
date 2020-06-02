import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/logout';
import homeBrewPub from '../assets/homeBrewPub.png';

class Home extends Component {

    handleLogout = (event) => {
        event.preventDefault()
        const { history } = this.props
        this.props.logout(history)
    }
    
    render(){
        return(
            <div className="home-container">
                <div className="col-one">
                    <div className="top-left">
                        <img src={homeBrewPub} alt="logo" />
                    </div>
                    <div className="bottom-left">
                        <h5>Recipes</h5>
                        <Link to='/recipes' >View All Recipes</Link> <br />
                        <Link to='/recipes/new' >Add a New Recipe</Link><br />
                        <br />
                        <h5>Account</h5>
                        {Object.keys(this.props.currentUser).length > 0 ? 
                            <div>
                                <Link to={`/users/${this.props.currentUser.id}/recipes`}>Your Recipes</Link><br />
                                <Link to='/logout' onClick={this.handleLogout}>Logout</Link>
                            </div> 
                            : 
                            <Link to='/login'>Login</Link>}
                    </div>
                </div>
                <div className="col-two">
                    <div className="right">
                        <h5>HomeBrew.pub</h5>
                        <p>HomeBrew.pub is here to help you find and store your favorite homebrew recipes. Browse our list of recipes, or add your own! And remember...<br /><em>Relax - Have a homebrew!</em></p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (history) => {dispatch(logout(history))},
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))