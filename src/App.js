import React from "react";
import { BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom";
import Navbar from "./components/Navbar";
import CoinsData from "./pages/CoinsData";
import Home from "./pages/Home";
import "./App.css";
import Alert from "./components/Auth/Alert";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/coins/:id" >
          <CoinsData />
        </Route>
      </Switch>
      <Alert />
    </Router>
  );
}

export default App;

// inline style
// style={{fontSize:"40px", marginTop: "40px"}}
