import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './theme.scss';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <span>dechat</span>
      </header>
      <main>
        <Button>connect manually</Button>
        <Button>connect using a server</Button>
        <input value="enter a key that only your chat partner will know" />
      </main>
      <footer>da footah</footer>
    </div>
  );
}

export default App;
