import logo from './logo.svg';
import './App.css';
import LandingPage from './screens/landing/LandingPage';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <header class="bg-white sticky top-0">
        <Header />
      </header>
      <LandingPage />
    </div>
  );
}

export default App;
