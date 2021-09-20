import { Redirect } from "react-router-dom";

import './Authorise.scss';

import Button from "../../components/Button/Button"; 
import Logo from "../../components/Logo/Logo";
import useAuthorise from "../../hooks/useAuthorise";

const Authorise = () => {
  const { authoriseUser, trelloToken } = useAuthorise();

  if (trelloToken) {
    return <Redirect to="/" />;
  }

  return (
    <div className="app__authorise">
      <div className="app__authorise__card">
        <Logo size="large" />

        <span className="app__authorise__card__welcome">Welcome to</span>

        <h1 className="app__authorise__card__title">HelloTrello</h1>

        <p className="app__authorise__card__description">
          To connect to your trello account, please click on the button below and to authosise.
        </p>

        <Button
          className="app__authorise__card__button"
          kind="primary"
          onClick={() => authoriseUser()}
        >
          Authorise
        </Button>
      </div>
    </div>
  );
}

export default Authorise;
