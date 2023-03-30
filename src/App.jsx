import './App.css';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './screens/landing/LandingPage';
import Header from './components/header/Header';

function App() {
  return (
    <BrowserRouter>
      <div class="min-w-[350px]">
        <header class="bg-white sticky top-0">
          <Header />
        </header>
        <LandingPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
