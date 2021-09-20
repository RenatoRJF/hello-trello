import { FC, createContext, ReactNode } from 'react';

import useTrelloAuthorise from '../hooks/useTrelloAuthorise';

interface AuthoriseContextProps {
  trelloToken: string | null;
  authoriseUser: (success?: () => void, error?: () => void) => void;
  deauthoriseUser: (cb?: () => void) => void;
}

export const authoriseContext = createContext<AuthoriseContextProps>({
  trelloToken: null,
  authoriseUser: () => {},
  deauthoriseUser: () => {}
});

interface AuthoriseProviderProps {
  children: ReactNode;
}

const AuthoriseProviderProvider: FC<AuthoriseProviderProps> = ({ children }) => {
  const authorise = useTrelloAuthorise();

  return (
    <authoriseContext.Provider value={authorise}>
      {children}
    </authoriseContext.Provider>
  );
}

export default AuthoriseProviderProvider;
