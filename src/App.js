import React from "react";
import { Route } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Login from "./login";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Route path="/login">
        <Login />
      </Route>
    </ThemeProvider>
  );
}

export default App;
