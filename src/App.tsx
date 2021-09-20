
import './App.scss';

import AuthoriseProvider from './components/AuthoriseProvider';

import Routes from './routes';

function App() {
  return (
    <div className="app">
      <AuthoriseProvider>
        <Routes />
      </AuthoriseProvider>
    </div>
  );
}

export default App;
