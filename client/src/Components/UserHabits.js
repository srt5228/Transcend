import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

function UserHabits() {

    return (
        <>
            <Link to="/"><b>Home</b></Link>
            <h1>User Habits Page</h1>
            <h3>Table Containing All of the Actively Tracked Habits by Transcend Users</h3>
                <table class="table table-hover">
                <thead>
                    <tr>
                        <th>instanceID</th>
                        <th>userID</th>
                        <th>habitID</th>
                        <th>schedule</th>
                        <th>customHabitName</th>
                        <th>Modify</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>Mon: 0 Tue: 0 Wed: 0 Thu: 0 Fri: 0 Sat: 0</td>
                        <td>NULL</td>
                        <td><button>Edit</button>    <button>Delete</button> </td>
                    </tr>
                </tbody>
            </table>

            <h3>Add User Habit</h3>
            <form onsubmit="return false">
                <div class="form-group">
                    <label class="form-label" for="userID">User ID</label>
                    <br></br>
                    <input id="userID" class="form-control" type="number"></input>
                    <br></br>
                    <label class="form-label" for="habitID">Habit ID</label>
                    <br></br>
                    <input id="journalText" class="form-control" type="number"></input>
                    <br></br>
                    <label class="form-label" for="text">Schedule</label>
                    <br></br>
                    <input id="timeStamp" class="form-control" type="text"></input>
                    <br></br>
                    <label className="form-label" htmlFor="text">Custom Habit Name (OPTIONAL - Will set User ID to NULL)</label>
                    <br/>
                    <input id="customHabit" class="form-control" type="text"></input>
                    <br></br>
                    <button>Submit</button>
                </div>
            </form>
        
        </>
    );
};

export default UserHabits;