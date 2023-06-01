import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LoginWrapper } from './components/LoginWrapper';
import { ContextContainer } from './ContextContainer';
import { ErrorBoundary } from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">

      <ContextContainer>
        <ErrorBoundary>
          <LoginWrapper>
            You are logged in!
          </LoginWrapper>
        </ErrorBoundary>
      </ContextContainer>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
