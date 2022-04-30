import logo from './logo.svg';
import './App.css';

function App() {

  const makeRequest = () => {
    fetch('https://localhost:4000')
      .then((res) => res.json())
      .catch((err) => console.log(err))
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          rel="noopener noreferrer"
          onClick={() => makeRequest()}
        >
          Learn React
        </a>

      </header>
    </div>
  );
}

export default App;
