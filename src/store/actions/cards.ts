import apiRequest from '../../services/api';

export const FETCH_LIST_CARDS = 'FETCH_LIST_CARDS';

export const fetchListCards = (listId: string) => (dispatch: any) => (
  dispatch({
    type: FETCH_LIST_CARDS,
    meta: { listId },
    payload: apiRequest({ url: `/lists/${listId}/cards`, method: 'get' }),
  })
)