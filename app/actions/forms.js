'use strict';
import { forms } from 'spatialconnect/native';

export const loadForms = () => {
  console.log('loadForms');
  return dispatch => {
    forms().first().subscribe(data => {
      dispatch({
        type: 'ADD_FORM_LIST',
        forms: data.forms
      });
    });
  };
};