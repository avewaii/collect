import React, { useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './registration-style.css';

function Registration() {
    let [ userData, setUserData ] = useState({});

    function submitForm(e) {

        axios.post('api/users/register', userData)
            .then((response) => {
                console.log('resp:', response);

                // - на стороне реакта если сессию получили и код ответа 200 - записать сессию в локалсторэдж и переадресовать на таблицу
                localStorage.setItem('sessionID', response.data["session"])
                //window.location.href = '/';

            })
            .catch((error) => {
                console.log(error);
            });
        e.preventDefault();
    }

    return(
        <div>
            <div className="row parent-row justify-content-center">
                <div className="col-md-4 align-self-center">

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
                            <button onClick={(e) => setUserData({...userData, status: '1'})} type="submit" className="btn btn-default">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration;