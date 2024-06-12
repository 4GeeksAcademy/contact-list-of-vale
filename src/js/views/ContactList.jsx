import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";

const ContactList = () => {
    const { store, actions } = useContext(Context);
    console.log(store);

    return (
        <div className="container mx-auto">
            {store.contactList.map(contact => (
                <div className='card' key={contact.id}>
                    <div className='card-body'>{contact.name}</div>
                    <div className='card-body'>{contact.email}</div>
                    <div className='card-body'>{contact.phone}</div>
                    <div className='card-body'>{contact.address}</div>
                </div>
            ))}
            <Link to="/EditContact" className="btn btn-success">
                Edit the contact
            </Link>
            <div>
                <Link to="/DeleteContact" className="btn btn-success">
                    Delete one
                </Link>
            </div>
        </div>
    );
};

export default ContactList;
