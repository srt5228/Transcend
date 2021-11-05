import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";


function FocusTimer() {

    return (
        <>
            <Link to="/"><b>Home</b></Link>
            <h1>Focus Timer Page</h1>
            <h3>Focus Timer Table, Add, Edit or Delete Timer Records Below</h3>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>timerID</th>
                        <th>userID</th>
                        <th>timeElapsed</th>
                        <th>timeStamp</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>360</td>
                        <td>2021-10-28 09:16:30</td>
                        <td><button>Edit</button>    <button>Delete</button> </td>
                    </tr>
                </tbody>
            </table>

            <h3>Add Focus Timer</h3>
            <form onsubmit="return false">
                <div class="form-group">
                    <label class="form-label" for="userID">User Id</label>
                    <br></br>
                    <input id="userID" class="form-control" type="number"></input>
                    <br></br>
                    <label class="form-label" for="timeElapsed">Time Elapsed (in Seconds)</label>
                    <br></br>
                    <input id="timeElapsed" class="form-control" type="number"></input>
                    <br></br>
                    <label class="form-label" for="timeStamp">Time Stamp</label>
                    <br></br>
                    <input id="timeStamp" class="form-control" type="datetime-local"></input>
                    <br></br>
                    <button>Submit</button>
                </div>
            </form>
        </>
    );
};

export default FocusTimer;