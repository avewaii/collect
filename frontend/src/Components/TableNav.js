import React, { useContext } from 'react'

import { TableContext } from '../TableContext'

import * as ReactBootstrap from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";



function TableNav() {

    //const { value, setValue } = useContext(TableContext);

    const { checkboxes, setCheckboxes } = useContext(TableContext);


    function deleteUser(e) {
        axios.post('api/users/deleteUser', checkboxes)
            .then((response) => {
                console.log('deleted:', response);
            })
            .catch((error) => {
                console.log(error);
            });
    }



    return(
            <div className='container h-100' style={{ marginTop: "8px" }}>

                <ReactBootstrap.ButtonGroup size="md" className="mb-2 col-md-4 col-xs-12 offset-md-4 ">
                    <ReactBootstrap.Button variant='light'>Left</ReactBootstrap.Button>
                    <ReactBootstrap.Button variant='light'>Block</ReactBootstrap.Button>
                    <ReactBootstrap.Button onClick={(e) => deleteUser(checkboxes)} variant='light'>Delete</ReactBootstrap.Button>
                </ReactBootstrap.ButtonGroup>

            </div>
    )
}

export default TableNav;