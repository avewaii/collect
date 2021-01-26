import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Components/Header'
import axios from "axios";



function Home() {

    axios.get('/api/identifyUser')
        .then(response => console.log(response))
        .catch((error) => {
            console.log(error)
        })

    return(
        <>
        <h1>Home page</h1>
        <p>User's session: {localStorage.getItem('sessionID')}</p>

        </>
    )
}
export default Home;