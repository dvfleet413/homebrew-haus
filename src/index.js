import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import manageRecipes from './reducers/manageRecipes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Layout from './containers/Layout';
import App from './App';
import LoginForm from './components/LoginForm';
import * as serviceWorker from './serviceWorker';

const store = createStore(manageRecipes, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout>
        <Route exact path="/" component={App} />
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
