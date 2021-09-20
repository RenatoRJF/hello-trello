import { useState } from 'react';
import { trelloAuthorise, trelloDeauthorise } from "../services/api";


const useTrelloAuthorise = () => {
  const [trelloToken, setTrelloToken] = useState(localStorage.getItem('trello_token') || null);

  const authoriseUser = (success = () => {}, error = () => {}) => {
    trelloAuthorise(() => {
      setTrelloToken(localStorage.getItem('trello_token'))
      success();
    }, error)
  };

  const deauthoriseUser = (cb = () => {}) => {
    trelloDeauthorise(() => {
      setTrelloToken(null);
      cb();
    })
  };

  return {
    trelloToken,
    authoriseUser,
    deauthoriseUser
  };
}

export default useTrelloAuthorise;
