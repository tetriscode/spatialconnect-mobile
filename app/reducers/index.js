'use strict';
import { combineReducers } from 'redux';
import tests from './tests';
import forms from './forms';

const reducer = combineReducers({
  tests,
  forms
});

export default reducer;