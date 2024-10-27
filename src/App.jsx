import "./App.css";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { customTheme } from "./theme/customTheme";
import { RouterApp } from "./routes/router";

function App() {
  return (
    <ThemeProvider value={customTheme}>
      <RouterProvider router={RouterApp.router} />
    </ThemeProvider>
  );
}

export default App;
