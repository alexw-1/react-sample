import logo from './logo.svg';
import './App.css';
import Navbar from './Componets/Navbar'
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <h1>WELCOME TO THE PAGE</h1>
        <a href="https://youtu.be/dQw4w9WgXcQ"><button>Press me I dare you</button></a>
        </p>
      </header>
    </div>
  );
}

export default App;
