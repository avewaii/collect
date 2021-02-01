import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert} from "react-bootstrap";

function Auth() {
    let [ userData, setUserData ] = useState({});

    let [alert, setAlert] = useState(true);

    function submitForm(e) {
        e.preventDefault();

        axios.post('api/login', userData)
            .then(response => localStorage.setItem('sessionID', response.data["session"]))
            .then(() => {
                window.location.href = '/';
            })
            .catch((error) => {
                // Show error message
                setAlert(false);
            });
    }

    return(
        <div>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content shadow p-3 mb-5 bg-white rounded">
                    <div className="modal-header justify-content-center">
                        <h5 className="modal-title">Authorization</h5>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={submitForm}>
                            <div className="form-group">
                                <label htmlFor="inputEmail">Email address</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                             <span className="input-group-text" id="basic-addon1">
                                                    <i className="fa fa-user"></i>
                                             </span>
                                    </div>
                                    <input name="email" onChange={(e) => setUserData({...userData, [e.target.name]: e.target.value})} type="email" className="form-control" id="inputEmail" placeholder="E-mail"/>
                                </div>
                            </div>

                            {alert
                                ? console.log('ok')
                                : <Alert variant="danger">User is not registered.</Alert>
                            }

                            <div className="form-group">
                                <label htmlFor="inputPassword">Password</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                             <span className="input-group-text" id="basic-addon2">
                                                    <i className="fa fa-lock"></i>
                                             </span>
                                    </div>
                                    <input name="password" onChange={(e) => setUserData({...userData, [e.target.name]: e.target.value})} type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                                </div>
                            </div>

                            <div>
                                <p>Do you not registered?
                                    <a href='./registration'> Sign up</a>
                                </p>
                            </div>

                            <div className="row justify-content-center modal-footer">
                                <button onClick={(e) => setUserData({...userData, status: '1'})} type="submit" className="btn btn-primary">Log in</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Auth;