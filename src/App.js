import logo from './platzi.webp';
import './App.css';

function App() { //esto es jsx no html
  return (
    <div className="App">

      <TodoItem />
      <TodoItem />
      <TodoItem />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          aprendamos React
        </a>
      </header>
    </div>
  );
}


function TodoItem () {
  return (
    <li>
      <span>V</span>
      <p>llorar con la llorona</p>
      <span>X</span>
    </li>
  )
}
export default App;
