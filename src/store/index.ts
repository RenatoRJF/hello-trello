import { createStore, Store, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise-middleware';

import userReducer from './reducers/user';
import boardsReducer from './reducers/boards';
import listsReducer from './reducers/lists';
import cardsReducer from './reducers/cards';

const store: Store = createStore(
  combineReducers({
    user: userReducer,
    boards: boardsReducer,
    lists: listsReducer,
    cards: cardsReducer
  }), 
  applyMiddleware(thunkMiddleware, promise)
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;