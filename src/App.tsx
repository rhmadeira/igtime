import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/styles/themes/default";
import Router from "./Router";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
