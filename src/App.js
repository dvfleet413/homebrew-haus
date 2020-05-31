import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchRecipes } from './actions/fetchRecipes';
import { getCurrentUser } from './actions/getCurrentUser';

import Home from './components/Home';
import Layout from './containers/Layout';
import RecipesPage from './containers/RecipesPage';
import RecipeShow from './containers/RecipeShow';
import RecipeForm from './components/RecipeForm';
import LoginForm from './components/LoginForm';
import './App.css';


class App extends Component {
  componentDidMount(){
    this.props.fetchRecipes()
    const token = localStorage.getItem("token")
    if (token){this.props.getCurrentUser(token)}
  }

  render(){
    return (
      <Router>
        <Layout>
            <Switch>
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/logout" component={Home} />
              <Route exact path="/recipes/new" component={RecipeForm} />
              <Route path="/recipes/:recipeId" render={routerProps => {return <RecipeShow recipeId={routerProps.match.params.recipeId} />}}/>
              <Route path="/recipes" component={RecipesPage} />
              <Route exact path="/" component={Home} />
            </Switch>
        </Layout>
      </Router>
    )
  }
}

function mapStateToProps(state){
  return { recipes: state.recipes,
           currentUser: state.currentUser }
}

function mapDispatchToProps(dispatch){
  return { fetchRecipes: () => dispatch(fetchRecipes()),
           getCurrentUser: (token) => dispatch(getCurrentUser(token))}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
