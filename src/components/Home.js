import React from 'react';
import { Link } from 'react-router-dom';
import homeBrewPub from '../assets/homeBrewPub.png';

const Home = (props) => {
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
                    <Link to='/login'>Login</Link>
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

export default Home;