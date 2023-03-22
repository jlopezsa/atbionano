import logo from './logo.svg';
import './App.css';
import LandingPage from './screens/landing/LandingPage';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <LandingPage />
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
