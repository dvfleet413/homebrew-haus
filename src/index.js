import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './containers/Layout';
import RecipesContainer from './containers/RecipesContainer';
import App from './App'
import LoginForm from './components/LoginForm';
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout>
        <Route exact path="/" component={App} />
        <Route exact path="/recipes" component={RecipesContainer} />
        <Route exact path="/login" component={LoginForm} />
      </Layout>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
