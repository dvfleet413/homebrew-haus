import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import manageRecipes from './reducers/manageRecipes';

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  let store
  if (process.env.NODE_ENV === 'development'){
    store = createStore(manageRecipes, preloadedState, composedEnhancers)
  } else {
    store = createStore(manageRecipes, applyMiddleware(thunkMiddleware))
  }
  return store
}