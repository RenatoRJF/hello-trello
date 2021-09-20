// Trello instance;
const Trello = (window as any).Trello;

interface ApiRequest {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
  params?: {
    [key: string]: any;
  };
}

/**
 * authorizes app to use trello api
 * @param success {function}
 * @param error {function}
*/
export const trelloAuthorise = (
  success: () => void = () => {},
  error: () => void = () => {}
) => {
  (window as any).Trello.authorize({
    type: 'popup',
    name: 'HelloTrello',
    scope: {
      read: 'true',
      write: 'true' },
    expiration: 'never',
    success,
    error
  });
}

/**
 * Remove users' trello authotisation
 * @param success {function}
 * @param error {function}
*/
export const trelloDeauthorise = (cb: () => void) => {
  (window as any).Trello.deauthorize();
  cb();
}

/**
 * @returns A trello promise that handle trello's api calls
 */
 const apiRequest = ({ url,  method, params = {}}: ApiRequest): Promise<any> => (
  Trello[method](url, { ...params, token: localStorage.getItem('trello_token') })
 );

export default apiRequest;
