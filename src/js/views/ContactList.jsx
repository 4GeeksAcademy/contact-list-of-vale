import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";


const ContactList = () => {
    const { store, actions } = useContext(Context);
    return (
        <div>
            <div>ContactList</div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <Link to="/EditContact" className="btn btn-success">
                edit the contact
            </Link>
            <div>
                <Link to="/CreateAcontact" className="btn btn-success">
                    Add a new one 
                </Link>
            </div>
            <div>
                <Link to="/DeleteContact" className="btn btn-success">
                    Delete one 
                </Link>
            </div>
        </div>
    );
};

export default ContactList;
