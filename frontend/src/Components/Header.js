import React from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import SwitchTheme from "./SwitchTheme";
// import 'dark-mode.css'


function Header () {

    function logOut(e) {
        e.preventDefault();
        localStorage.removeItem("sessionID");
        window.location = "/auth";
    }


    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light row">
            <div className='col-6'>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler"
                        aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">

                            <Link to='/'>
                                <a className="nav-link" href="Home">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/collections'>
                                <a className="nav-link" href="Collections">My collections</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>


            <div className='col-6 row align-items-center justify-content-end'>

                <SwitchTheme/>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control form-control-sm mr-sm-2" type="search" placeholder="Search"/>
                    <button className="btn btn-outline-secondary btn-sm my-2 my-sm-0" type="submit">Search</button>
                </form>
                <div>
                    <button onClick={logOut} type="button" className="btn btn-link">Log out</button>
                </div>
            </div>
        </nav>
    )
}

export default Header;