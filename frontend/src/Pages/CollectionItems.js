import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

function CollectionItems() {

    let [items, setItems] = useState([{
        id: 1,
        name: 'aaa',
        description: 'fff',
    }]);

    return(
        <>
        <h4>Collection: CollectionName {items[0].name}</h4>
        <p>Description: Description</p>
        <p>tags</p>

        <ul className="list-group">
            {items.map((items, index) => (
                <li key={items.id} className="list-group-item d-flex justify-content-between">
                    <div className="d-flex">

                        <div>
                            <p>id: {items.id}</p>
                            <h5>
                                {items.name}
                            </h5>
                            <p>Description: {items.description}</p>
                            <p>Tags: 'hello', 'world'</p>
                        </div>
                    </div>
                    <div>
                        <button type="button" className="btn btn-light">Edit</button>
                        <button type="button" className="btn btn-light">Delete</button>
                    </div>
                </li>
            ))}
        </ul>
        </>
    )
}

export default CollectionItems;

