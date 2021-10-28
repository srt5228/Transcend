import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";


function Dashboard() {

    return (
        <>
            <h1>HOME PAGE</h1>
            <p>This will be a users first stop, from here they will be able to navigate to any of the pages below
                except for AdminDashboard which will only be accessible by the DBA.</p>
            <Link to="/habits">Habits Page</Link>
            <Link to="/journal">Journal Page</Link>
            <Link to="/focustimer">Focus Timer Page</Link>
            <Link to="/AdminDashboard">Admin Page</Link>
        </>
    );
};

export default Dashboard;