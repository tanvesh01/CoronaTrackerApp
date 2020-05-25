import React from "react";
import Nav from "./Containers/Nav/Nav";
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from "./theme";

//import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <div>
        <Nav />
      </div>
    </ThemeProvider>
  );
}

export default App;
// * 1.india 2. top countries 3. global history
