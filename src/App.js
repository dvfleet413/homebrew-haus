import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchRecipes } from './actions/fetchRecipes'

import Home from './components/Home';
import Layout from './containers/Layout';
import RecipesPage from './containers/RecipesPage';
import RecipeShow from './containers/RecipeShow';
import LoginForm from './components/LoginForm';
import './App.css';


class App extends Component {
  componentDidMount(){
    this.props.fetchRecipes()
  }

  render(){
    return (
      <Router>
        <Layout>
            <Switch>
              <Route exact path="/login" component={LoginForm} />
              <Route path="/recipes/:recipeId" render={routerProps => {return <RecipeShow />}}/>
              <Route path="/recipes" render={routerProps => <RecipesPage />} />
              <Route exact path="/" component={Home} />
            </Switch>
        </Layout>
      </Router>
    )
  }
}

function mapDispatchToProps(dispatch){
  return { fetchRecipes: () => dispatch(fetchRecipes())}
}

export default connect(null, mapDispatchToProps)(App)
