import React, { useCallback } from 'react';
import './App.css';
import './theme.scss';
import Button from './components/Button';
import { useDispatch } from 'react-redux';
import { connectManually } from './store/actions/connect.actions';

function App() {
  const dispatch = useDispatch();
  const id = 12;
  const connect = useCallback(() => {
    dispatch(connectManually(id));
  }, [dispatch, id]);

  return (
    <div className="App">
      <header className="App-header">
        <span>dechat</span>
      </header>
      <main>
        <Button onClick={connect}>connect manually</Button>
        <Button>connect using a server</Button>
        <input placeholder="enter a key that only your chat partner will know" />
      </main>
      <footer>da footah</footer>
    </div>
  );
}

export default App;
