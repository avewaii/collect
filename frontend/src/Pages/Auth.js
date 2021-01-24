import React, { useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './registration-style.css';

function Auth() {
    let [ userData, setUserData ] = useState({});

    function submitForm(e) {
        e.preventDefault();

        axios.post('api/login', userData)
            .then(response => localStorage.setItem('sessionID', response.data["session"]))
            .then(() => {
                // Redirect to another screen
            })
            .catch((error) => {
                // Show error message
            });

    }

    return(
        <div>
            <div className="row parent-row justify-content-center">
                <div className="col-md-4 align-self-center">

                    <form onSubmit={submitForm} className="form-horizontal">
                        <span className="heading">Authorization</span>
                        <div className="form-group">
                            <input name="email" onChange={(e) => setUserData({...userData, [e.target.name]: e.target.value})} type="email" className="form-control" id="inputEmail" placeholder="E-mail"/>
                            <i className="fa fa-user"></i>
                        </div>
                        <div className="form-group">
                            <input name="password" onChange={(e) => setUserData({...userData, [e.target.name]: e.target.value})} type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                            <i className="fa fa-lock"></i>
                        </div>
                        <div className="row justify-content-center">
                            <button onClick={(e) => setUserData({...userData, status: '1', selected: '0'})} type="submit" className="btn btn-default">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Auth;