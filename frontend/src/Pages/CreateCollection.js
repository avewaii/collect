import React, {useState} from 'react';
import axios from 'axios';
import TextareaMarkdown from 'textarea-markdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Components/Header";



function CreateCollection() {

    let [ collection, setCollection ] = useState({});

    function createNewCollection(e) {
        e.preventDefault();

        axios.post('api/collections', collection)
            .then((response) => {
                console.log('resp:', response);
            })
            .catch((error) => {
                console.log(error);
            });

        console.log('collection',collection);

       window.location.href = 'collections';
    }

    return(
        <>
        <div className='container align-items-center'>
            <h4>create new collection</h4>
        </div>

        <form onSubmit={createNewCollection} className='container col-md-6 col-xl-8 mt-5'>
            <div className="form-group row">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input onChange={(e) => setCollection({...collection, [e.target.name]: e.target.value})}
                       type="text" name="name" className="form-control" id="inputEmail3" placeholder="Collection's name"/>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="editor">Description</label>
                <textarea onChange={(e) => setCollection({...collection, [e.target.name]: e.target.value})}
                      name="description" className="form-control"  id="editor" data-preview="#preview"></textarea>
            </div>

            <div className="form-group row">
                <label htmlFor="inputState" className="col-sm-2 col-form-label">Theme</label>
                <div className="col-sm-10">
                    <select onChange={(e) => setCollection({...collection, [e.target.name]: e.target.options[e.target.selectedIndex].text})}
                        name="theme" className="col-md-4" id="inputState" className="form-control">
                        <option selected>Books</option>
                        <option>Alcohol</option>
                        <option>Pictures</option>
                        <option>Flowers</option>
                    </select>
                </div>
            </div>

            <div className="dropdown-divider"></div>

            <h6>For collection's items</h6>
            <span>Select an additional fields for items in this collection.</span>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="id" checked disabled/>
                <label className="form-check-label" htmlFor="id">ID</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="name" checked disabled/>
                <label className="form-check-label" htmlFor="name">Name</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="tags" checked disabled/>
                <label className="form-check-label" htmlFor="tags">Tags</label>
            </div>

            <div className="form-group row justify-content-center mt-4">
                <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">Create new collection</button>
                </div>
            </div>
        </form>
        </>

    )
}

export default CreateCollection;