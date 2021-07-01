import { combineReducers, applyMiddleware, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import favouritesReducer from './favourites/reducer';
import { Favourites } from './favourites/type';

export interface GlobalState {
  favouritesState: Favourites;
}

const combinedReducer = combineReducers<GlobalState>({
  favouritesState: favouritesReducer,
});

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const store = createStore(combinedReducer, bindMiddleware([thunk]));

export default store;
