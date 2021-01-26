import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Components/Header";
import axios from "axios";
import {Link} from "react-router-dom";
import {CollectionContext, TableContext} from "../TableContext";


function Collections() {

    let [collections, setCollections] = useState([]);

    useEffect(() => {
        (async () => {
            axios.get('/api/collections')
                .then(response => setCollections(Object.values(response.data)))
                .catch((error) => {
                    console.log(error)
                })
        })()
    }, [])

    function addCollection(e) {
        e.preventDefault();
        alert('add new collection');
        console.log('collections', collections);
        window.location.href = 'createCollection';
    }

    function deleteCollection(e) {
        alert('delete collection');

        let collectionId = e.target.value;

        axios.post('api/deleteCollection', collectionId)
            .then((response) => {
                console.log('deleted:', response);
            })
            .catch((error) => {
                console.log(error);
            });

        window.location.reload()
    }

    function editCollection(e) {
        e.preventDefault();
        alert('edit function');

        window.location.href = 'editCollection';

    }


    return(
        <>
            <Header/>
            <h2>My collections</h2>
            {/**/}
            <button onClick={ (e) => addCollection(e)}type="button" className="btn btn-outline-secondary">+ add new collection</button>

            <TableContext.Provider value={{ collections, setCollections }}>

            <ul className="list-group">
                {collections.map((collections, index) => (
                    <li key={collections.id} className="list-group-item d-flex justify-content-between">
                            <div className="d-flex">
                                <div>
                                    <img src="?"/>
                                </div>
                                <div>
                                    <p>id: {collections.id}</p>
                                    <h5>
                                        <Link to={`/collection/${collections.name} ${collections.id}`}>
                                            {/*<a href='/'>*/}
                                                {collections.name}
                                            {/*</a>*/}
                                        </Link>

                                    </h5>
                                    <p id="preview">Description: {collections.description}</p>
                                    <p>Theme: {collections.theme}</p>
                                    <p>Tags: 'hello', 'world'</p>
                                </div>
                            </div>
                            <div>
                                <button onClick={(e)=> editCollection(e)}type="button" className="btn btn-light">Edit</button>
                                <button onClick={(e)=> deleteCollection(e)} value={collections.id} type="button" className="btn btn-light">Delete</button>
                            </div>
                    </li>
                ))}
            </ul>

            </TableContext.Provider>
        </>
    )
}
export default Collections;