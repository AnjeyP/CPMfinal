import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignIn from "./components/signIn/signIn.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/sign-in" component={SignIn} />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
