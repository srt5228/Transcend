import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";


function UserLogs() {

    return (
        <>
            <Link to="/"><b>Home</b></Link>
            <h1>User Logs Page</h1>
            <h3>Current Logged Events of Users in Transcend</h3>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>logID</th>
                        <th>userID</th>
                        <th>eventID</th>
                        <th>timeStamp</th>
                        <th>Modify</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>2021-10-28 09:16:30</td>
                        <td><button>Edit</button>    <button>Delete</button> </td>
                    </tr>
                </tbody>
            </table>

            <h3>Add Log Event to User</h3>
            <form onsubmit="return false">
                <div class="form-group">
                    <label class="form-label" for="userID">User ID</label>
                    <br></br>
                    <input id="userID" class="form-control" type="number"></input>
                    <br></br>
                    <label class="form-label" for="habitID">Event ID</label>
                    <br></br>
                    <input id="eventID" class="form-control" type="number"></input>
                    <br></br>
                    <label class="form-label" for="text">timeStamp</label>
                    <br></br>
                    <input id="timeStamp" class="form-control" type="datetime-local"></input>
                    <br></br>
                    <button>Submit</button>
                </div>
            </form>
        </>
    );
};

export default UserLogs;