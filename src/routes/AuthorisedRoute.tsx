import { FC, ReactNode } from "react";
import { Redirect } from "react-router-dom";

import useAuthorise from "../hooks/useAuthorise";

interface AuthorisedRouteProps {
  children: ReactNode;
}

const AuthorisedRoute: FC<AuthorisedRouteProps> = ({ children }) => {
  const { trelloToken } = useAuthorise();
  
  if (!trelloToken) {
    return <Redirect to="/authorise" />
  }

  return <>{children}</>;
}

export default AuthorisedRoute;
