import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';

import initialState from './initialState';
import Main from './Main';
import Categories from './Categories';
import Article from './Article';
import Articles from './Articles';

export default createStore(combineReducers({
  Main,
  Categories,
  Article,
  Articles,
}), initialState);
