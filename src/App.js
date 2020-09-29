import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Formulario from './components/form';
import Contador from './components/Contador';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
{/*import Feed from './components/feed';
import Row from './components/row';
import Anuncio from './components/Anuncio';
import 'materialize-css/dist/css/materialize.css';*/}



function App() {

const [data, setData] = useState([]);

useEffect(() => {
  async function fetchData() {
     await axios({
       method:'GET',
       url: "https://pokeapi.co/api/v2/pokemon",
     }).then((res) => {
       setData(res.data.results);
     });
   }
   fetchData();
 }, []);



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
        <Contador/>
        <Formulario />
          { data !== " "
            ? data.map((data,i) => {
              return <li key={i}>{data.name}</li>
            })
          : "Sem infos"}
      </header>
      {/*<Anuncio>
      <div>
      <h3>Sou o anúncio 1</h3>
      </div>
      </Anuncio>
      <Feed />
      <Anuncio>
      Sou o anúncio 2
      </Anuncio>*/}

    </div>

);
}

export default App;
