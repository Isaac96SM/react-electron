import React from 'react';
import logo from './logo.svg';
import './App.css';

declare global {
  interface Window {
    require: any;
  }
}

const electron = window.require('electron');

const fs = electron.remote.require('fs');
const ipcRenderer = electron.ipcRenderer;

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {
            fs.existsSync('C:\\Windows\\notepad.exe') ? 'exists' : 'not exists'
          }
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
