import apiRequest from '../../services/api';

export const FETCH_USER_DATA = 'FETCH_USER_DATA';

export const fetchUserData = () => (dispatch: any) => (
  dispatch({
    type: FETCH_USER_DATA,
    payload: apiRequest({ url: '/member/me', method: 'get' }),
  })
)