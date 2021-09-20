import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Authorise from '../pages/Authorise/Authorise';
import BoardDetails from "../pages/BoardDetails/BoardDetails";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotFound from "../pages/NotFound/NotFound";

import AuthorisedRoute from "./AuthorisedRoute";

const Routes = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        component={() => (
          <AuthorisedRoute>
            <Dashboard />
          </AuthorisedRoute>
        )}
      />

      <Route
        exact
        path="/boards/:boardId"
        component={() => (
          <AuthorisedRoute>
            <BoardDetails />
          </AuthorisedRoute>
        )}
      />
      
      <Route path="/authorise" component={Authorise} />
      
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
