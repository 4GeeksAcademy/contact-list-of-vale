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
                    <div className='card-body'>
                        <h2>
                            {contact.name}
                        </h2>
                        <p>
                            {contact.email}
                        </p>
                        <p>
                            {contact.phone}
                        </p>
                        <p>
                            {contact.address}
                        </p>

                    </div>
                    <div className='card-footer'>
                        <Link to="/EditContact" className="btn btn-success">
                            Edit the contact
                        </Link>

                        <Link to="/DeleteContact" className="btn btn-success">
                            Delete one
                        </Link>

                    </div>
                </div>

            ))}


        </div>
    );
};

export default ContactList;
