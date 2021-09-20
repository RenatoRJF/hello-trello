import { Reducer } from 'redux';
import { ActionType } from 'redux-promise-middleware';
import { FluxStandardAction } from 'redux-promise-middleware';

import { FETCH_BOARD_LISTS } from '../actions/lists';

interface State {
  data: Array<any> | null; 
  isFetching: boolean;
}

const intialState = {
  data: null,
  isFetching: false,
};

const listsReducer: Reducer = (state: State = intialState, action: FluxStandardAction) => {
  switch (action.type) {
    case `${FETCH_BOARD_LISTS}_${ActionType.Pending}`:
      return {
        ...state,
        isFetching: true,
        errors: null,
      };
    case `${FETCH_BOARD_LISTS}_${ActionType.Rejected}`:
      return {
        ...state,
        isFetching: false,
        errors: null,
      };
    case `${FETCH_BOARD_LISTS}_${ActionType.Fulfilled}`:
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

export default listsReducer;