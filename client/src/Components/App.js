import React from "react";
import '../App.css';
import Dashboard from "./Dashboard";
import Habits from "./Habits";
import FocusTimer from "./FocusTimer";
import Users from "./Users";
import LogEventTypes from "./LogEventTypes";
import UserHabits from "./UserHabits";
import UserLogs from "./UserLogs";
import JournalEntries from "./JournalEntries";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Router>
          <Route path="/" exact>
            <Dashboard/>
          </Route>
          <Route path="/users">
            <Users/>
          </Route>
          <Route path="/habits">
            <Habits/>
          </Route>
          <Route path="/focustimer">
            <FocusTimer/>
          </Route>
          <Route path="/journalentries">
            <JournalEntries/>
          </Route>
          <Route path="/logeventtypes">
            <LogEventTypes/>
          </Route>
          <Route path="/userhabits">
            <UserHabits/>
          </Route>
          <Route path="/userlogs">
            <UserLogs/>
          </Route>

        </Router>


      </div>


  );
}

export default App;
