import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './routes/MainRouter';
// import { ThemeProvider } from '@material-tailwind/react';
// @material-tailwind/react

function App() {
  return (
    <BrowserRouter>
    {/* <ThemeProvider> */}
      <div class="min-w-[350px] font-custom">
        <MainRouter />
      </div>  
    {/* </ThemeProvider> */}
    
    </BrowserRouter>
  );
}

export default App;
