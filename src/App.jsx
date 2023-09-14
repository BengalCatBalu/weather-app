import { useState } from "react";
import { Navbar } from "./components/navbar/Navbar";
import "./App.css";
import { MainPageComponent } from "./components/MainPageComponent/MainPageComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Dashboard } from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <div className={"main"}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={MainPageComponent}/>
          <Route path="/:city" render={(props) => <Dashboard key={props.match.params.city} {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
