import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";


function Dashboard() {

    return (
        <>
            <h1>Transcend Home Page</h1>
            <p>Welcome to the Transcend Habit Tracker Application Database!</p>
            <Link to="/users"><b>Users Page</b> <br></br> View and manage users</Link>
            <Link to="/habits"><b>Habits Page</b> <br></br> View and manage habits</Link>
            <Link to="/focustimer"><b>Focus Timers Page</b> <br></br> View and manage focus timers</Link>
            <Link to="/journalentries"><b>Journal Entries Page</b> <br></br> View and manage journal entries</Link>
            <Link to="/logeventtypes"><b>Log Event Types Page</b> <br></br> View and manage user log event types</Link>
            <Link to="/userhabits"><b>User Habits Page</b> <br></br> View and manage the habits of users</Link>
            <Link to="/userlogs"><b>User Logs Page</b> <br></br> View and manage the log events of users</Link>


        </>
    );
};

export default Dashboard;