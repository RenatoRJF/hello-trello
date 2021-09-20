import { Reducer } from 'redux';
import { ActionType } from 'redux-promise-middleware';
import { FluxStandardAction } from 'redux-promise-middleware';

import { FETCH_USER_BOARDS } from '../actions/boards';

interface State {
  data: Array<any> | null; 
  isFetching: boolean;
}

const intialState = {
  data: null,
  isFetching: false,
};

const boardsReducer: Reducer = (state: State = intialState, action: FluxStandardAction) => {
  switch (action.type) {
    case `${FETCH_USER_BOARDS}_${ActionType.Pending}`:
      return {
        ...state,
        isFetching: true,
        errors: null,
      };
    case `${FETCH_USER_BOARDS}_${ActionType.Rejected}`:
      return {
        ...state,
        isFetching: false,
        errors: null,
      };
    case `${FETCH_USER_BOARDS}_${ActionType.Fulfilled}`:
      return {
        ...state,
          data: action.payload,
          isFetching: false,
          errors: null,
        };
    default:
      return state;
  }
}

export default boardsReducer;