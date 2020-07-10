import React from "react";
import { Route } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import PrivateRoute from './utils/PrivateRoute'
import Login from "./login";
import Home from './home'
import Contact from "./contact";
import Dashboard from './dashboard'

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
      <Route path='/contact'>
        <Contact />
      </Route>
      {/* Private Routes*/}
      <PrivateRoute path='/dashboard' component={Dashboard} />
    </ThemeProvider>
  );
}

export default App;
