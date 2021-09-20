import { Reducer } from 'redux';
import { ActionType } from 'redux-promise-middleware';
import { FluxStandardAction } from 'redux-promise-middleware';

import { User } from '../../interfaces/user';
import { FETCH_USER_DATA } from '../actions/user';

interface State {
  data: User | null; 
  isFetching: boolean;
}

const intialState = {
  data: null,
  isFetching: false,
};

const userReducer: Reducer = (state: State = intialState, action: FluxStandardAction) => {
  switch (action.type) {
    case `${FETCH_USER_DATA}_${ActionType.Pending}`:
      return {
        ...state,
        isFetching: true,
        errors: null,
      };
    case `${FETCH_USER_DATA}_${ActionType.Rejected}`:
      return {
        ...state,
        isFetching: false,
        errors: null,
      };
    case `${FETCH_USER_DATA}_${ActionType.Fulfilled}`:
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

export default userReducer;