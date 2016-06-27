'use strict';
import { stores } from 'spatialconnect/native';

export const loadStores = () => {
  return dispatch => {
    stores().first().subscribe(data => {
      dispatch({
        type: 'ADD_STORE_LIST',
        stores: data.stores
      });
    });
  };
};