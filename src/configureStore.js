import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import manageRecipes from './reducers/manageRecipes';

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = process.env.NODE_ENV === 'development' ? composeWithDevTools(...enhancers) : enhancers

  const store = createStore(manageRecipes, preloadedState, composedEnhancers)

  return store
}