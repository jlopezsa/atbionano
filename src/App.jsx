import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./routes/MainRouter";
import { ThemeProvider } from "@material-tailwind/react";
import { customTheme } from "./theme/customTheme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider value={customTheme}>
        <div class="min-w-[350px] font-custom">
          <MainRouter />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
