import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";


function LogEventTypes() {

    return (
        <>
            <Link to="/"><b>Home</b></Link>
            <h1>Log Event Types Page</h1>
            <h3>Transcent Log Event Types - Add, Edit, and Delete Types Below</h3>

            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>eventID</th>
                        <th>eventName</th>
                        <th>Modify</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Logged into Transcend</td>
                        <td><button>Edit</button>    <button>Delete</button> </td>
                    </tr>
                </tbody>
            </table>

            <h3>Add Log Event Type</h3>
            <form onsubmit="return false">
                <div class="form-group">
                    <label class="form-label" for="eventName">Event Name</label>
                    <br></br>
                    <input id="eventName" class="form-control" type="text"></input>
                    <br></br>
                    <button>Submit</button>
                </div>
            </form>
        </>
    );
};

export default LogEventTypes;