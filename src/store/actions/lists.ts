import apiRequest from '../../services/api';

export const FETCH_BOARD_LISTS = 'FETCH_BOARD_LISTS';

export const fetchBoardLists = (boardId: string) => (dispatch: any) => (
  dispatch({
    type: FETCH_BOARD_LISTS,
    payload: apiRequest({ url: `/boards/${boardId}/lists`, method: 'get' }),
  })
)