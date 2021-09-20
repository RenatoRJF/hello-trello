import apiRequest from '../../services/api';

export const FETCH_USER_BOARDS = 'FETCH_USER_BOARDS';

export const fetchUserBoards = () => (dispatch: any) => (
  dispatch({
    type: FETCH_USER_BOARDS,
    payload: apiRequest({ url: '/members/me/boards', method: 'get' }),
  })
)