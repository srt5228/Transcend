import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";


function Dashboard() {

    return (
        <>
            <h1>Transcend Home Page</h1>
            <p>Welcome to the Transcend Habit Tracker Application Database!</p>
            <Link to="/users"><b>Users Table</b> <br></br></Link>
            <Link to="/habits"><b>Habits Table</b> <br></br></Link>
            <Link to="/focustimer"><b>Focus Timers Table</b> <br></br></Link>
            <Link to="/journalentries"><b>Journal Entries Table</b> <br></br></Link>
            <Link to="/logeventtypes"><b>Log Event Types Table</b> <br></br></Link>
            <Link to="/userhabits"><b>User Habits Table</b> <br></br></Link>
            <Link to="/userlogs"><b>User Logs Table</b> <br></br></Link>


        </>
    );
};

export default Dashboard;