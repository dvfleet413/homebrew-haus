import React from 'react';
import { Link } from 'react-router-dom';
import homeBrewHaus from '../assets/homeBrewHaus.png';

const Home = () => {
    return(
        <div className="home-container">
            <div className="col-one">
                <div className="top-left">
                    <img src={homeBrewHaus} alt="logo" />
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
                    <h5>HomeBrew.haus</h5>
                    <p>HomeBrew.haus is here to help you find and store your favorite homebrew recipes. Browse our list of recipes, or add your own! And remember - <em>Enjoy your homebrew!</em></p>
                </div>
            </div>
        </div>
    )
}

export default Home;