import React, { useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
//подключить registration-style
import './registration-style.css';

function Registration() {
    let [ userData, setUserData ] = useState({});

    function submitForm(e) {

        console.log('submit form', userData);

        axios.post('api/users/login', userData)
            .then((response) => {
                console.log('resp:', response);
            })
            .catch((error) => {
                console.log(error);
            });
            e.preventDefault();
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-offset-3 col-md-6">
                    <form onSubmit={submitForm} className="form-horizontal">
                        <span className="heading">Registration</span>
                        <div className="form-group">
                            <input name="email" onChange={(e) => setUserData({...userData, [e.target.name]: e.target.value})} type="email" className="form-control" id="inputEmail" placeholder="E-mail"/> 
                            <i className="fa fa-user"></i>
                        </div>
                        <div className="form-group">
                            <input name="password" onChange={(e) => setUserData({...userData, [e.target.name]: e.target.value})} type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                            <i className="fa fa-lock"></i>
                        </div>
                        <div className="row justify-content-center">
                            <button onClick={(e) => setUserData({...userData, status: 'avaliable'})} type="submit" className="btn btn-default">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration;