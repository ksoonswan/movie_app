import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./components/Detail";
import Navigation from "./Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/About" exact={true} component={About} />
      <Route path="/movie/:id" exact={true} component={Detail} />
    </HashRouter>
  );
}

export default App;
