import React from 'react';
import logo from './logo.svg';
import './App.css';
import Feed from './components/feed'
import Formulario from './components/form';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{margin: "20px"}}>
          Edite o arquivo <code>src/App.js</code> e salve para recarregar.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprenda React
        </a>
        <Formulario />

      </header>
      <Feed />

    </div>
  );
}

export default App;
