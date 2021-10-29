import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";


function JournalEntries() {

    return (
        <>
            <Link to="/"><b>Home</b></Link>
            <h1>Users Journal Page</h1>
            <h3>Current Journal Entries in Transcend</h3>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>journalID</th>
                        <th>userID</th>
                        <th>journalText</th>
                        <th>timeStamp</th>
                        <th>Modify</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>Played basketball and liftend weights today.</td>
                        <td>2021-10-28 09:16:30</td>
                        <td><button>Edit</button>    <button>Delete</button> </td>
                    </tr>
                </tbody>
            </table>

            <h3>Add Journal Entry</h3>
            <form onsubmit="return false">
                <div class="form-group">
                    <label class="form-label" for="userID">userID</label>
                    <br></br>
                    <input id="userID" class="form-control" type="number"></input>
                    <br></br>
                    <label class="form-label" for="journalText">Journal Text</label>
                    <br></br>
                    <input id="journalText" class="form-control" type="text"></input>
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

export default JournalEntries;