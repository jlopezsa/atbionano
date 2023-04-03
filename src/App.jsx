import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './routes/MainRouter';

function App() {
  return (
    <BrowserRouter>
      <div class="min-w-[350px]">
        <MainRouter />
      </div>  
    </BrowserRouter>
  );
}

export default App;
