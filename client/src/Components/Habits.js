import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";


function Habits() {

    return (
        <>
            <Link to="/"><b>Home</b></Link>
            <h1>Habits Page</h1>
            <h3>Habits - Add, Edit, and Delete Transcend's global habits below</h3>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>habitID</th>
                        <th>habitName</th>
                        <th>Modify</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Lifting Weights</td>
                        <td><button>Edit</button>    <button>Delete</button> </td>
                    </tr>
                </tbody>
            </table>

            <h3>Add Habit</h3>
            <form onsubmit="return false">
                <div class="form-group">
                    <label class="form-label" for="email">Habit Name</label>
                    <br></br>
                    <input id="email" class="form-control" type="text"></input>
                    <br></br>
                    <button>Submit</button>
                </div>
            </form>
        </>
    );
};

export default Habits;