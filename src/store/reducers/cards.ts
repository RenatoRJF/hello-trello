import { Reducer } from 'redux';
import { ActionType } from 'redux-promise-middleware';
import { FluxStandardAction } from 'redux-promise-middleware';

import { FETCH_LIST_CARDS } from '../actions/cards';

interface State {
  data: Array<any> | null; 
  isFetching: boolean;
}

const intialState = {
  data: null,
  isFetching: false,
};

const cardsReducer: Reducer = (state: State = intialState, action: FluxStandardAction) => {
  switch (action.type) {
    case `${FETCH_LIST_CARDS}_${ActionType.Pending}`:
      return {
        ...state,
        [action.meta.listId]: {
          isFetching: true,
          errors: null,
        }
      };
    case `${FETCH_LIST_CARDS}_${ActionType.Rejected}`:
      return {
        ...state,
        [action.meta.listId]: {
          isFetching: false,
          errors: null,
        }
      };
    case `${FETCH_LIST_CARDS}_${ActionType.Fulfilled}`:
      return {
        ...state,
        [action.meta.listId]: {
          data: action.payload,
          isFetching: false,
          errors: null,
        }
      };
    default:
      return state;
  }
}

export default cardsReducer;