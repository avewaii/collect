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
        <Header/>

        <h4>Home</h4>
        <p>User's session: {localStorage.getItem('sessionID')}</p>

        </>
    )
}
export default Home;