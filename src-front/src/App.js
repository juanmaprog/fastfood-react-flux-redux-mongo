import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';


function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    setUser(false);
    setIsLoading(false);
  }

  return !user ? <Auth /> : <UserLogged />;
}

function UserLogged() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Login></Login>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
