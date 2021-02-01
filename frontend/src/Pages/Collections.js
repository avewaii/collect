import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Components/Header";
import axios from "axios";
import {Link, Route} from "react-router-dom";
import {CollectionContext, TableContext} from "../TableContext";
import Home from "./Home";
import CollectionItems from "./CollectionItems";


function Collections() {

    let [collections, setCollections] = useState([]);

    let [chosenCollection, setChosenCollection] = useState();

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

        console.log('collections', collections);
        window.location.href = 'createCollection';
    }

    function deleteCollection(e) {
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
        window.location.href = 'editCollection';
    }


    return(
        <>
            <Header/>
            <div className="row justify-content-around col-lg-6 m-3">
                <h4>My collections</h4>
                <button onClick={ (e) => addCollection(e)} type="button" className="btn btn-secondary btn-sm">Add new collection</button>
            </div>

            <TableContext.Provider value={{ collections, setCollections }}>

            <ul className="list-group">
                { !collections.length ?
                    <div className="align-self-center align-items-end">
                        <h5>You don't have a collections yet</h5>
                    </div>
                    :
                    collections.map((collections, index) => (
                    <li key={collections.id} className="list-group-item d-flex justify-content-between">

                            <div className="d-flex">
                                <div>
                                    <img src="?" alt='collection icon'/>
                                </div>
                                <div>
                                    <p>id: {collections.id}</p>
                                    <h5>
                                        <Link to={`/collection/${collections.name}/${collections.id}`}
                                        onClick={(e) => setChosenCollection(collections.id)}>
                                            {/*<a href='collection'>*/}
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
                                <button onClick={(e)=> editCollection(e)} type="button" className="btn btn-light">Edit</button>
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