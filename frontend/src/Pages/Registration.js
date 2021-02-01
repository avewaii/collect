import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert} from "react-bootstrap";

function Registration() {
    let [ userData, setUserData ] = useState({});

    let [alert, setAlert] = useState(true);

    function submitForm(e) {

        axios.post('api/users/register', userData)
            .then((response) => {
                console.log('resp:', response);

                localStorage.setItem('sessionID', response.data["session"])
                window.location.href = '/';

            })
            .catch((error) => {
                console.log(error);
                setAlert(false);
            });
        e.preventDefault();
    }

    return(
        <div>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content shadow p-3 mb-5 bg-white rounded">
                    <div className="modal-header justify-content-center">
                        <h5 className="modal-title">Registration</h5>
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
                                : <Alert variant="danger">User with this email has already registered.</Alert>
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
                                <p>Have you already registered?
                                    <a href='./auth'> Log in</a>
                                </p>
                            </div>

                            <div className="row justify-content-center modal-footer">
                                <button onClick={(e) => setUserData({...userData, status: '1'})} type="submit" className="btn btn-primary">Sign up</button>
                            </div>
                         </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration;