import React from "react";
import '../App.css';
import Dashboard from "./Dashboard";
import Habits from "./Habits";
import Journal from "./Journal";
import AdminDashboard from "./AdminDashboard";
import FocusTimer from "./FocusTimer";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Router>
          <Route path="/" exact>
            <Dashboard/>
          </Route>
          <Route path="/habits">
            <Habits/>
          </Route>
          <Route path="/journal">
            <Journal/>
          </Route>
          <Route path="/AdminDashboard">
            <AdminDashboard/>
          </Route>
          <Route path="/focustimer">
            <FocusTimer/>
          </Route>
        </Router>


      </div>


  );
}

export default App;
