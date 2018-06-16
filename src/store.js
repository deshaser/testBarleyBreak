import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from './reducers/rootReducer';

const composeEnhancers = composeWithDevTools({});
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

let store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default function configureStore() {
  return store;
}

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});