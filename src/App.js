import React from "react";
import { Route } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Login from "./login";
import Home from './home'

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </ThemeProvider>
  );
}

export default App;
