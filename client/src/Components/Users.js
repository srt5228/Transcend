import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";



function Users() {

    return (
        <>
            <Link to="/"><b>Home</b></Link>
            <h1>Users</h1>
            <h3>Add, Delete, and Search for Users Below</h3>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>userID</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>Modify</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>boban@example.com</td>
                        <td>732-344-2999</td>
                        <td><button>Edit</button>    <button>Delete</button> </td>
                    </tr>
                </tbody>
            </table>

            <h3>Add User</h3>
            <form onsubmit="return false">
                <div class="form-group">
                    <label class="form-label" for="email">Email</label>
                    <br></br>
                    <input id="email" class="form-control" type="text"></input>
                    <br></br>
                    <label class="form-label" for="phone">Phone</label>
                    <br></br>
                    <input id="phone" class="form-control" type="text"></input>
                    <br></br>
                    <button>Submit</button>
                </div>
            </form>

            <div id="search" >
                <h3>Search for user by email</h3>
                <form id="searchbyname">
                <label class="form-label" for="email">Email</label>
                    <br></br>
                    <input id="email" class="form-control" type="text"></input>
                    <br></br>
                    <button>Submit</button>

                </form>
            </div>


            
            

        </>
    );
};

export default Users;